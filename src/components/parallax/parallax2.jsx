import '../../components/parallax/retro.scss'
import {motion} from 'framer-motion'
function Retro() {

 
  const textVariants = {
    initial : {
      opacity : 0
    },
    animate : {
      opacity : 1 ,
      transition : {
        duration : 3,
        delay : .8
      }
    } 
  }
 

  return (
    <div className='retro-container'>
      <motion.h1 variants={textVariants} initial = "initial" whileInView={'animate'}>What i did</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="mountains-light" initial = {{opacity : 0}} whileInView = {{opacity : .8 , transition : {duration : 2 , delay : .8}}}>
      </motion.div>
    </div>
  )
}


export default Retro