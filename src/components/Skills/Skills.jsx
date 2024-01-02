import React, { useEffect, useState } from 'react'
import './Skills.scss'
import { motion } from 'framer-motion'
import { client, urlFor } from '../../client'
import AppWraper from '../wrapeper/AppWraper'
import MotionWrap from '../wrapeper/MotionWrap'

function Skills() {
  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    const skillsQuery = "*[_type == 'skills']"
    const experiencesQuery = "*[_type == 'experiences']"
    client.fetch(skillsQuery).then((data) => {
      setSkills(data)
    })
    client.fetch(experiencesQuery).then((data) => {
      setExperiences(data)
    })
  }, [])

  return (
    <div className="skills-container">
      <h2 className="head">Skills & Experience</h2>
      <div className="app_skills">
        <motion.div className="app_skills-list">
          {skills?.map((skill, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app_skills-item app__flex cursor-pointer"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.imgIcon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app_skills-experiences">
          {experiences?.map((experience, index) => (
            <motion.div key={index} className="app_skills-exp">
              <div className="app_skills-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app_skills-expWorks">
                {experience.works.map((work, index) => (
                  <>
                    <motion.div
                      key={index}
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      data-tip
                      data-for={work.name}
                      className="app_skills-experienceWork cursor-pointer"
                    >
                      <h4 className="text-bold">{work.name}</h4>
                      <h6 className="company">{work.company}</h6>
                      <p className='work-description'>{work.description}</p>
                    </motion.div>

            
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default AppWraper(MotionWrap(Skills,'app_skills'), 'skills', 'app_whitebg')
