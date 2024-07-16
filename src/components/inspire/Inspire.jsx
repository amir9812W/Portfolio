import React from 'react'
import './inspire.scss'
import './SingleData.scss'
import { vidData } from './data';
import {motion} from 'framer-motion'
import youtube from './thumbs/youtube.png'


const SingleVideo = ({image, description, link}) => {

  return (
    <div className='youtube-vid'>
        <div className='describ'>
          <p>{description}</p>
        </div>
      <a href={link} target='_blank' rel="noreferrer">
        <img src={image} alt="dimm" className='youtube-thumbnail'/>
        <div className='des-thumb'>
          <img src={youtube} alt="you" width={100} height={100}/>
        </div>
      </a>
    </div>
  )
};

const variants = {
  initial : {
    opacity : 1
  },
  animate : {
    opacity : 0,
    zIndex : -100,
    transition : {
      duration : .6,
      delay : 4
    }
  }
}

const Inspire = () => {

  return (
    <div className='InspireContainer'>
      <motion.div className='modal' id = 'modal' variants={variants} initial = {'initial'} whileInView={'animate'} >
        <h1>Videos that inspired me to be a better developer</h1>
      </motion.div>
      <div className='items-container'>
        {vidData.map((item) => {
          return <SingleVideo key={item.id} image = {item.image} description={item.describtion} link = {item.link}/>        
        })}
      </div>
    </div>
  )
}

export default Inspire