import { useEffect } from 'react'

const GlobalSoundEffect = () => {
  useEffect(() => {
    const sound = new Audio('/audio/mouseClickSound.mp3')

    const handleClick = (e) => {
      if (e.target.tagName === 'BUTTON') {
        sound.currentTime = 0
        sound.play()
      }
    }

    document.body.addEventListener('click', handleClick)
    return () => document.body.removeEventListener('click', handleClick)
  }, [])

  return null
}

export default GlobalSoundEffect
