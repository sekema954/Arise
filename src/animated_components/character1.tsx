import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { OrbitControls } from 'three/examples/jsm/Addons.js'


const Character1 = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const parent = canvas.parentElement
    if (!parent) return

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      75,
      parent.clientWidth / parent.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 500

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    })
    renderer.setSize(parent.clientWidth, parent.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 2

    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(8, 8, 8)
    scene.add(directionalLight)

    const loader = new GLTFLoader()
    loader.load('/animations_models/starlight/scene.gltf',
      (gltf) => {
        const model = gltf.scene
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        model.position.sub(center)
        model.scale.set(2, 2, 2)
        scene.add(model)
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`)
      },
      (error) => {
        console.error('Error loading model:', error)
      }
    )

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (!parent) return
      const { clientWidth, clientHeight } = parent
      renderer.setSize(clientWidth, clientHeight)
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-27 left-0 w-full h-full" />
}

export default Character1
