import React from "react";
import { motion} from 'framer-motion'
import '../../components/navbar/navar.scss'

const Nani = () => {

  const functio = () => {
    setClick(prev => !prev)
  }

  const [click , setClick ] = React.useState(false)


  let varients = {
    visibl : {opacity : 1 , x : 100 , y : 200},
    hidden : {opacity : 0},
  }




  return (
    <div className="nani">
    <motion.div 
    variants = {varients}
    transition={{duration : 1}}
    animate = {click ? 'visibe ' : 'hidden'}
    drag
    >
 
    </motion.div>

    <button onClick={functio}>click</button>
    </div>

    
  )
}


export default Nani