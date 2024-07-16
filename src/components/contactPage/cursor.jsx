import '../contactPage/cursor.scss'
import { useState , useEffect } from 'react'
import {motion} from 'framer-motion'

const Cursor = () => {

  const [position , setPosition] = useState({x : 0 , y : 0})
  const [rotate , setRotate] = useState(0)
 
  useEffect(() => {
    const Nani = (e) => {
      setPosition({x : e.clientX , y : e.clientY})
      setRotate(position.x + position.y)
    }

    window.addEventListener('mousemove', Nani)
    return () => {
      window.removeEventListener('mousemove', Nani)
    }
  },[position])


  return (
    <motion.div className='cursor-container' animate = {{x : position.x, y : position.y, rotate : rotate }}>
    </motion.div>
  )
}

export default Cursor