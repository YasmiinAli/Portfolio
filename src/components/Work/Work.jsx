import React, { useEffect, useState } from 'react'
import './Work.scss'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { client, urlFor } from '../../client'
import AppWraper from '../wrapeper/AppWraper'
import MotionWrap from '../wrapeper/MotionWrap'

function Work() {
  const [activeFilter, setActiveFiter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])
  const handleFilter = (item) => {
    setActiveFiter(item);
    setAnimateCard([{y:100, opacity:0}])

    setTimeout(() => {
          setAnimateCard([{y:0, opacity:1}])

          if(item === 'All') {
            setFilterWork(works)
          }
          else {
            setFilterWork(works.filter((work)=> work.tags.includes(item)))
          }

    }, 500);
  }
  useEffect(() => {
    const query = "*[_type == 'works']"
    client.fetch(query).then((data) => {
      setWorks(data)
      setFilterWork(data)
    })
  }, [])
  return (
    <div className="app_work">
      <h2 className="head">
        My Creative
        <span> Portfolio </span>
        Section
      </h2>
      <div className="app_work-filter">
        {['Web App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            className={`app_work-filter-item cursor-pointer app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
            onClick={() => handleFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        className="app_work-portfolio"
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {filterWork.map((work, index) => (
          <div className="app_work-item cursor-pointer app__flex" key={index}>
            <div className="app_work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="app_work-hover cursor-pointer app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    className="app__flex"
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    className="app__flex"
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app_work-content app__flex">
              <h4 className="text-bold">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWraper(MotionWrap(Work,'app_work'), 'work', 'app_primarybg')
