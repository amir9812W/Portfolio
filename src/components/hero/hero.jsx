import './hero.scss'
import img from '../../fukcing portfolio/1708178133400 copy.png'
import img2 from '../../fukcing portfolio/scroll.png'
import {motion} from 'framer-motion'

const textVarients = {
  initial : {
    x : -500,
    opacity : 0
  },
  animate : {
    x : 0,
    opacity : 1,
    transition : {
      duration : 2,
      staggerChildren : 0.1
    }
  },
  scrollButton : {
    opacity : 0,
    y : 18,
    transition : {
      duration : 2,
      repeat : Infinity
    }
  },
}

const sliderTextVar = {
  initial : {
    x : -800
  },
  animate : {
    x : '-220%',
    transition : {
      duration : 40,
      repeat : Infinity,
      repeatType : 'mirror'
    }
  }
}



function Hero () {


  return (
    <div className='container'>
      <div className="wrapper">
        <motion.div className='container-text' variants  = {textVarients} initial = 'initial'animate = 'animate'>
          <motion.h2 variants={textVarients}>AmirHossein Hezareh</motion.h2>
          <motion.div className='texts'>
            <p>Front-End</p>
            <p>Web Developer</p>
          </motion.div>
          <motion.div className='buttons'>
            <button className='button-one'>
              <a href='#Projects'>See the latest works</a>
            </button>
            <button className='button-two' >
              <a href="#Contact">Contact Me</a>
            </button>
          </motion.div>
          <motion.button className='scroll-button' variants={textVarients} animate="scrollButton">
            <img src = {img2} width={'20px'} alt='scroll'/>
          </motion.button>
        </motion.div>
      </div>
      <motion.div className='slidingText' variants={sliderTextVar} initial = 'initial' animate = 'animate'>
        Front End Developer 3D Artist
      </motion.div>
      <div className='img-container'>
        <img src={img} alt = 'nigga' height={'100%'} className='me' />
      </div>
    </div>
  )
}

export default Hero