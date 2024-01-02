import React from 'react'
import './Header.scss'
import {  motion } from 'framer-motion'
import { images } from '../../constants'
import AppWraper from '../wrapeper/AppWraper'

function Header() {
  return (
    <div className="app_header app__flex " >
      <motion.div
        className="app_header-info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="app_header-badge">
          <div className="badge-cm app__flex">
            <span>👋</span>
            <div style={{ marginLeft: '10px' }}>
              <p >Hello, I'm</p>
              <h1 >Yasmin Ali</h1>
            </div>
          </div>
          <div className="tag-cm app__flex">
            <p >Frontend developer</p>
            <p >ReactJS developer</p>
          </div>
        </div>
      </motion.div>
      <motion.img  transition={{duration:0.8 ,ease:'easeOut'}} whileInView={{scale:[0,1]}} className="app_header-circle" src={images.circle} alt='circle' />

      <motion.div  className="app_header-circles" 
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1,ease:'easeInOut' }}
      >
        {[images.react, images.redux, images.javascript].map((imgSrc, index)=>
        <div className='cirecle app__flex' key={index}>
              <img src={imgSrc} alt="circleImg" />
        </div>)}
      </motion.div >
    </div>
  )
}

export default AppWraper(Header, 'home' )