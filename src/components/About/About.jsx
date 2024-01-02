import React, { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
import AppWraper from '../wrapeper/AppWraper'
import MotionWrap from '../wrapeper/MotionWrap'

function About() {
  const [aboutLinks, setAboutLinks] = useState([])

  useEffect(() => {
    const query = "*[_type == 'abouts']"
    client.fetch(query).then((data) => setAboutLinks(data))
  }, [])

  return (
    <div className="about">
      <h2 className="head">
        I know that
        <span>Good Development</span>
        <br />
        means
        <span> Good Business </span>
      </h2>
      <div className="app_profiles">
        {aboutLinks.map((aboutLink, index) => (
          <motion.div
            className="app_profile-link"
            key={index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <img src={urlFor(aboutLink.imgUrl)} alt={aboutLink.title} />
            <h2 className="text-bold" style={{marginTop:5}}>{aboutLink.title} </h2>
            <p className="p-text">{aboutLink.description} </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWraper(MotionWrap(About,'about'), 'about', 'app_whitebg')
