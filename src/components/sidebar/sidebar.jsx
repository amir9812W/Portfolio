import '../../components/sidebar/sidebar.scss'
import {motion} from 'framer-motion'
import Links from './links/links'
import {useState} from 'react'

function Sidebar () { 

  const [open , setOpen] = useState(false)

  const idk = () => {
    setOpen(prev => !prev)
    console.log(open)
  }

  const variants = {
    open : {
      clipPath : 'circle(1200px at 50px 50px)',
      transition : {
        duration : 1,
        type : 'spring',
        stiffness : 20,
        damping  : 10
      }
    },
    closed : {
        clipPath : 'circle(34px at 50px 50px)',
        transition : {
          duration : 1,
          type : 'spring',
          damping : 7.6,
          stiffness : 26
        }
    }
  }

  return (
    <motion.div className='sidebar' animate = {open ? 'open' : 'closed'}>
      <motion.div className='bg' variants={variants}>
        <Links/>
      </motion.div>
      <button className='button' onClick={idk}>
        <svg width={'23px'} height={'23px'} viewBox='0 0 23 23 '>
          <motion.path strokeWidth={'3'} stroke='black' strokeLinecap='round' 

          variants={
          { closed: {d: "M 2 2.5 L 20 2.5"}, 
            open : {d: "M 3 16.5 L 17 2.66"} 
          }
        }/>

          <motion.path strokeWidth={'3'} stroke='black' strokeLinecap='round' d = 'M 2 9.423 L 20 9.423'
          variants={{
            open : {opacity : 0}, 
            closed : {opacity : 1}
            }}
           animate = {open? 'open' : 'closed'} />

          <motion.path strokeWidth={'3'} stroke='black' strokeLinecap='round'   
          variants={{closed: {d: "M 2 16.346 L 20 16.346"}, 
          open : {d: "M 3 2.5 L 17 16.346"} }}/>
        </svg>
      </button>
    </motion.div>
  )
}


export default Sidebar