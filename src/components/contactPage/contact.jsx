import {motion , useInView} from 'framer-motion'
import '../../components/contactPage/contact.scss'
import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import reac from '../../fukcing portfolio/React_logo.png'
import framer from '../../fukcing portfolio/framer-icon.png'


const Contact = () => {

  const variants = {
    initial : {
      y : 500,
      opacity : 0
    },
    animate : {
      y : 0 ,
      opacity : 1,
      transition : {
        duration : 2,
        staggerChildren : .2,

      }
    }
  }

  const ref = useRef()
  const formRef = useRef()
  
  const isInView = useInView(ref , {margin : '-100px'})

  const [error, setError] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d8mo0yf', 'template_cvntte3', formRef.current, 'gADPwXL2YvfYdXLES')
      .then((result) => {
        console.log(result.text);
        setError(true)
      },
        (error) => {
          setError(false)
          console.log(error.text)
        }
      )
  } 

  return (
    <div className='contact-container' ref={ref}>
      <motion.div className='contact-info' variants={variants} initial= 'initial' whileInView = 'animate'>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div variants={variants}>
          <h3>Mail</h3>
          <h4>hezarehamir8@gmail.com</h4>
        </motion.div>
        <motion.div variants={variants}>
          <h3>Address</h3>
          <h4>I live in iran dude HELP ME!!</h4>
        </motion.div>
        <motion.div variants={variants}>
          <h3>Phone Number</h3>
          <h4>
            +98 903 307 8480
          </h4>
          <h4 className='copyRight'> &copy; Copy Right all rights reserved 2024</h4>
          <div className='info-power'>
            <p>This website is Powered by</p>
            <img src={framer} alt="framer" width={80}/>
            <img src={reac} alt="react" width={80}/>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 510.88 512" fill="currentColor" className="logo navbar-logo" width={50} color='#ff8434'>
                <rect x="270.57" width="240.31" height="240.31" rx="24" fill="inherit"></rect>
                <path d="M215.12 254.73V68.5a29.16 29.16 0 0 0-8.55-20.64 29.19 29.19 0 0 0-41.28 0L16.18 197a55.27 55.27 0 0 0 0 78.14l220.71 220.68a55.27 55.27 0 0 0 78.14 0l149.11-149.11a29.19 29.19 0 0 0 0-41.28l-1.14-1.12a29.16 29.16 0 0 0-20.64-8.55H256.15a41 41 0 0 1-41.03-41.03z" fill="inherit"></path>
              </svg>
                <p>email Js</p>
            </div>
          </div>
        </motion.div>
        <div className='links-container'>
        <a href="https://drive.google.com/file/d/1s2gkvlgVcc_c7aCVVXncvS3WqL-_VeeP/view?usp=sharing" className='links'
        target='_blank'>
           <p>My Cover letter</p>
          </a>
          <a href="https://drive.google.com/file/d/1oOIULxLCYT3Rbpynj0wYIoQuMM0TK6_l/view?usp=sharing"
          className='links'
          target='_blank'>
            <p>My Resume        
            </p>
          </a>
        </div>
      </motion.div>
      <motion.div className='form-container'>
        <motion.svg 
        initial = {{opacity : 1}} whileInView={{opacity : 0, transition : {duration : 1, delay : 2}}}
        height="400px" width="400px" style = {{stroke : 'white'}} viewBox="0 0 512 512"
        >
        <g>
          <g>
            <motion.path
            strokeWidth={10}
            initial = {{pathLength : 1}}
            animate = {isInView && {pathLength : 0}}
            transition={{duration : 2}}
            fill='none'
            d="M442.182,360.727v-26.764c0-19.782-15.127-34.909-34.909-34.909h-6.982c-27.927,0-55.855-4.655-81.455-12.8
              c-15.127-4.655-31.418,1.164-40.727,13.964l-10.473,17.455c-3.491,4.655-10.473,6.982-15.127,4.655
              c-57.018-30.255-102.4-75.636-132.655-132.655c-2.327-5.818-1.164-11.636,4.655-15.127l17.455-10.473
              c13.964-8.146,19.782-25.6,13.964-40.727c-9.309-26.764-12.8-53.527-12.8-81.455v-6.982C143.127,15.127,128,0,108.218,0H58.182
              C25.6,0,0,25.6,0,58.182c0,211.782,172.218,384,384,384c13.964,0,27.927-4.655,38.4-15.127c4.655-4.655,5.818-11.636,1.164-16.291
              c-4.655-4.655-11.636-5.818-16.291-1.164c-5.818,5.818-15.127,8.145-23.273,8.145C185.018,418.909,23.273,257.164,23.273,58.182
              c0-19.782,15.127-34.909,34.909-34.909h11.636v23.273c0,30.255,3.491,60.509,11.636,89.6c1.164,4.655,5.818,8.145,11.636,8.145
              c1.164,0,2.327,0,3.491,0c5.818-1.164,9.309-8.145,8.145-13.964c-8.145-26.764-11.636-55.855-11.636-83.782V23.273h15.127
              c6.982,0,11.636,4.655,11.636,11.636v6.982c0,30.255,4.655,60.509,13.964,88.436c1.164,4.655,0,10.473-4.655,13.964
              l-17.455,10.473c-15.127,9.309-20.945,30.255-12.8,46.545c32.582,60.509,81.455,109.382,141.964,141.964
              c16.291,8.145,36.073,3.491,46.545-12.8l10.473-17.455c2.327-4.655,8.145-6.982,13.964-4.655
              c29.091,9.309,58.182,13.964,88.436,13.964h6.982c6.982,0,11.636,4.655,11.636,11.636v26.764h-23.273
              c-27.927,0-57.018-3.491-83.782-11.636c-5.818-1.164-12.8,2.327-13.964,8.145c-1.164,5.818,2.327,12.8,8.145,13.964
              c29.091,8.146,59.345,11.636,89.6,11.636h34.909h5.818c29.091,0,52.364,23.273,52.364,52.364
              c0,29.091-23.273,53.527-52.364,53.527H186.182c-29.091,0-52.364-23.273-52.364-52.364c0-41.891-33.745-75.636-75.636-75.636
              c-6.982,0-11.636,4.655-11.636,11.636S51.2,384,58.182,384c29.091,0,52.364,23.273,52.364,52.364
              c0,41.891,33.745,75.636,75.636,75.636h250.182C478.255,512,512,478.255,512,436.364C512,396.8,481.745,364.218,442.182,360.727z"
              />
          </g>
        </g>
        </motion.svg>
        <motion.form 
        onSubmit={sendEmail} ref = {formRef} className='dunno' initial = {{opacity : 0}} whileInView={{opacity : 1, transition : {duration : 4, delay : 2.2}}}>
          <input type="text"  required placeholder = 'Name'  name='to_name'/>
          <input type="email" required placeholder='Email'  name='from_name'/>
          <textarea rows="14" style={{padding : '20px'}} name='message'></textarea>
          <button className='submit-button'>Submit</button>
          {error === true ? 'It fucking worked' : 'Try again later'}
        </motion.form>
      </motion.div>
    </div>
  )
}

export default Contact