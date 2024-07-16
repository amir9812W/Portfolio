import {motion} from 'framer-motion'
import '../Services/service.scss'
import nani from '../../fukcing portfolio/3d.webp'
import hello from '../../fukcing portfolio/people.webp'
import data from './data'

const textVariants2 = {
  initial :  {
    x : '-100%'
  },
  animate : {
    x : 0,
    transition : {
      type : 'spring',
      duration : 4
    }
  }
}

const headerText = {
  initial : {
    opacity : 0
  },
  animate : {
    opacity : 1,
    transition : {
      duration : 2
    }
  }
}


const textAnimation = {
  initial : {
    x : '+100%'
  },
  animate : {
    x : 0,
    transition : {
      type : 'spring',
      duration : 4
    }
 }
}



const variants = {
  initial : {
    x : '100%',
    opacity : 0,
  },
  animate : {
    x : 0 , 
    opacity : 1, 
    transition  : {
      duration : 2 ,
      type : 'spring',
      damping : 30,
      stffness : 20,
      staggerChildren : .5
    }
  }
}


const Element = (props) => {
  
  return (
    <motion.div className='items'>
      <motion.img src={props.item.img} className='hello' alt = {'icons'} variants = {variants} />
    </motion.div>
  )
}



const Service = () => {

  return (
    <motion.div className='service-container'>
      <motion.div className='text-container' variants={headerText} initial = 'initial' whileInView={'animate'}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className='texts'>
        <motion.div className="first-h1"  variants={textVariants2} initial = {'initial'} whileInView = {'animate'}>
          <img src={hello} alt='not found'/>
          <h1><b>Software</b> developer</h1>
        </motion.div>
        <motion.div className="second-h1" variants={textAnimation} initial = {'initial'} whileInView = {'animate'}>
          <h1><b>3D artist </b> for fun</h1>
          <img src={nani} alt="3D"/>
        </motion.div>
      </motion.div>
        <motion.div className="exprience" variants={variants} initial = 'initial' whileInView = 'animate'> 
        <motion.h1 initial = {{opacity : 0}} whileInView={{opacity : 1 , transition : {duration : 2 , delay : 2}}}
        >Technologies that i can work with</motion.h1>
          {data.map(x => (
            <Element key = {x.id} item={x}/>
          ))}
        </motion.div>  
    </motion.div>
  )
}

export default Service

