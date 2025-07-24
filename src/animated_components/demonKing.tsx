import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

const DemonKingScene = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const parent = canvas.parentElement
    if (!parent) return

    // Scene & Camera Setup
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      75,
      parent.clientWidth / parent.clientHeight,
      0.4,
      1000
    )
    camera.position.z = 2

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    })
    renderer.setSize(parent.clientWidth, parent.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 1.1
    controls.target.set(1, 1, 0)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Load Model
    const loader = new GLTFLoader()
    loader.load(
      '/animations_models/demon/scene.gltf',
      (gltf) => {
        const model = gltf.scene

        // Center and position model
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        model.position.sub(center)
        model.position.y -= 2.99 // Move chest up into frame

        model.scale.set(3, 3, 3) // Bigger and more detailed
        scene.add(model)
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`)
      },
      (error) => {
        console.error('Error loading model:', error)
      }
    )

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Resize Handler
    const handleResize = () => {
      if (!parent) return
      const { clientWidth, clientHeight } = parent
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(clientWidth, clientHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
}

export default DemonKingScene
