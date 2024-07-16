import {motion} from 'framer-motion'

const variants = {
  open : {
    transition : {
      staggerChildren : 0.2
    }
  },
  closed : {
    transition : {
      staggerChildren : 0.2,
   
    }
  }
}

const itemVariants = {
  open : {
    y : 0,
    opacity : 1
  },
  closed : {
    y : 10,
    opacity : 0
  }
}

function Links () {

  const list = ['Home','Serivces','Projects','Contact'];

  const link = list.map( item => (
    <motion.a href={`#${item}`} key = {item} variants={itemVariants}>{item}</motion.a>
  ))

  
  return (
    <motion.div className='links' variants={variants}>
      {link}
    </motion.div>
  )
}


export default Links