import React, { useEffect, useState } from 'react'
import './Certificates.scss'
import { AiFillEye } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { client, urlFor } from '../../client'
import AppWraper from '../wrapeper/AppWraper'
import MotionWrap from '../wrapeper/MotionWrap'

function Certificates() {

  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [certificates, setcertificates] = useState([])

  
  useEffect(() => {
    const query = "*[_type == 'certificates']"
    client.fetch(query).then((data) => {
      setcertificates(data)
    })
  }, [])
  return (
    <div className="app_certificates">
      <h2 className="head">
        My Certificates
        <span> Section </span>
        
      </h2>

      <motion.div
        className="app_certificates-portfolio"
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {certificates.map((certificate, index) => (
          <div className="app_certificates-item cursor-pointer app__flex" key={index}>
            <div className="app_certificates-img app__flex">
              <img src={urlFor(certificate.imgUrl)} alt={certificate.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="app_certificates-hover cursor-pointer app__flex"
              >
                <a href={certificate.link} target="_blank" rel="noreferrer">
                  <motion.div
                    className="app__flex"
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app_certificates-content app__flex">
              <h4 className="text-bold">{certificate.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {certificate.company}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWraper(MotionWrap(Certificates,'app_certificates'), 'certificates', 'app_primarybg')
