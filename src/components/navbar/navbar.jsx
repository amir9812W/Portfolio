import './navar.scss'
import img from '../../fukcing portfolio/instagram.png'
import img1 from '../../fukcing portfolio/youtube.png'
import img2 from '../../fukcing portfolio/facebook.png'
import {motion} from 'framer-motion'
import Sidebar from '../sidebar/sidebar'

function Navbar() {

  

  return (
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <motion.span
        initial = {{opacity : 0 , scale : 0.4}}
        animate = {{opacity : 1 , scale : 1}}
        transition={{duration : .8}}
        >Nani dev</motion.span>
        <div className='socials'>
          <a href='https://www.instagram.com/maxpainintheass1.com'><img src={img} alt = 'who the fuck are you nigga'/>
          </a>
          <a href='https:/www.google.com'><img src={img1} alt = 'who the fuck are you nigga1'/></a>
          <a href='https:/www.google.com'><img src={img2} alt = 'who the fuck are you nigga2'/></a>
        </div>
      </div> 

    </div>
  )
}


export default Navbar