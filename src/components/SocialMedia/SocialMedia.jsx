import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaFilePdf, FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/YasmiinAli" target='_blank' rel='noreferrer'>
            <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/yasmin-ali-helmy/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/yasmin_ali11?igsh=OGQ5ZDc2ODK2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                  <BsInstagram />

        </a>
      </div>
            <div>
        <a href="https://drive.google.com/file/d/1VMFL9o-SDxbVgLdXDmtvOimfY4fAJvYR/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <FaFilePdf/>
        </a>
      </div>
    </div>
  )
}
