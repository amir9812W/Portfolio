import data1 from "./projectsData"
import './projects.scss'
import { useRef } from "react"
import {motion, useScroll , useSpring, useTransform} from 'framer-motion'
import github from '../../fukcing portfolio/github.svg'

const Single = (item) => {


  const ref = useRef()
  const {scrollYProgress} = useScroll({target : ref})

  const Y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  const link = item.props.link
  const github1 = item.props.github


  return (
    <section className="single-container"style={{ transition : {duration : 1} }}> 
      <div className="wrapper1">
        <motion.div className="img-container"ref={ref}>
          <motion.img src={item.props.image} alt="dunno really" />
        </motion.div>
        <motion.div className="text-container" style={{y : Y}}   >
          <h1>{item.props.projectName}</h1>
          <p>{item.props.describe}</p>
          <div className="button-container">
                <a href={link} className="buttons" target="_blank">
                Link to Site
                </a>
                <a href={github1} target = '_blank' className="buttons2">
                  <img src = {github} alt="git" width={'30px'} />
                    Link to github repository
                </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


const Projects = () => {

  const MyRef = useRef()
  const { scrollYProgress } = useScroll({ target: MyRef , offset : ['end end','start start']});

  const scaleX = useSpring(scrollYProgress , {
    stiffness : 100, 
    damping : 20
  })

  return(
    <div className="projects-container" ref={MyRef}>
      <div className="text">
        <h1>Projects</h1>
        <motion.div className="progressBar" style={{scaleX : scaleX}}></motion.div>
      </div>
      {data1.map(x => (
        <Single props = {x} key = {x.id}/>
      ))}
    </div>
  )
}

export default Projects