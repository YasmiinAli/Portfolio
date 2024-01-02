import React, { useState } from 'react'
import './NavBar.scss'
import { motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
export default function NavBar() {
  const [toggle, settoggle] = useState(false)
  return (
    <nav className="app__navbar cursor-pointer">
      <ul className="app__navbar-links ">
        {['home', 'about', 'work', 'skills', 'certificates', 'contact'].map(
          (item, index) => (
            <li key={index} className="p-text app__flex">
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ),
        )}
      </ul>
      <div className="app__navbar-menu">
        <AiOutlineMenu
          onClick={() => {
            settoggle(true)
          }}
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <AiOutlineClose
              onClick={() => {
                settoggle(false)
              }}
            />
            <ul>
              {['home', 'about', 'work', 'skills','certificates', 'contact'].map(
                (item, index) => (
                  <li
                    key={index}
                    className="p-text app__flex"
                    onClick={() => {
                      settoggle(false)
                    }}
                  >
                    <a href={`#${item}`}>{item}</a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
