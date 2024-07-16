import { useRef } from 'react'
import './parallax.scss'
import {motion, useScroll, useTransform} from 'framer-motion'

const planetVarients = {
  initial : {
    opacity : 0
  },
  animate : {
    opacity : 1,
    transition : {
      duration : 1,
      delay : 1.8
    }
  }
}

const starsVariants = {
  initial : {
    opacity : 0
  },
  animate : {
    opacity : 1,
    transition : {
      duration : 1 , 
      delay : .8
    }
  }
}

const textVriant = {
  initial : {
    opacity : 0,
  },
  animate : {
    opacity : 1,
    transition : {
      duration : 1,
      delay : 2.6
    }
  }
}




function Parallax()  {


  const ref = useRef()

  const { scrollYProgress } = useScroll({ target: ref, offset : ['start start', 'end start']});



  const yText = useTransform(scrollYProgress, [0 , 1], ['0%','100%'])
  const yPlanets = useTransform(scrollYProgress, [0 , 1], ['0%','100%'])

  return (
    <div className='container1'>
    <motion.div
      ref={ref}
      className='parallax-container' 
      style={{backgroundImage : ' linear-gradient(0deg , #0c0c1d , rgb(43, 18, 64))'}}>

        <motion.div className='mountains'></motion.div>
        <motion.h1 variants={textVriant} style={{translateY : yText, overflowY : 'hidden'}} initial = "initial" whileInView={'animate'}>what i do </motion.h1>

        <motion.div className='planets' style={{x : yPlanets}} variants = {planetVarients} initial = 'initial'
        whileInView={'animate'} ></motion.div>
            
        <motion.div className='stars' style={{x : yPlanets}} variants={starsVariants} initial = 'initial' whileInView={'animate'} ></motion.div>
     
      </motion.div>
    </div>
  )
}


export default Parallax