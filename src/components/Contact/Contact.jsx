import React, { useState } from 'react'
import './Contact.scss';
import {images} from '../../constants'
import {client} from '../../client';
import AppWraper from '../wrapeper/AppWraper';
import MotionWrap from '../wrapeper/MotionWrap';


 function Contact() {
  const [formData, setformData] = useState({name:'', email:'', message:''});
  const [isSubmitted, setisSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange =(e)=>{
    const {name, value} = e.target;
    setformData({...formData,[name]:value})

  }
    const handleSubmit =(e)=>{
    setLoading(true)
    const contact ={
      _type:'contact',
      name:formData.name,
      email:formData.email,
      message:formData.message
    }
    client.create(contact)
    .then(()=>{
      setLoading(false);
      setisSubmitted(true)
    })
  }

  return (
    < >
      <h2 className="head">Contact With Me</h2>
      <div className="contact-contain">
        <div className="contact-item">
          <img src={images.email} alt="email" />
          <a href="mailto:yasmin.ali.helmy@gmail.com" className='p-text'>yasmin.ali.helmy@gmail.com</a>
        </div>
        <div className="contact-item ">
          <img src={images.mobile} alt="phone" />
          <a href="tel: 01091206172" className='p-text'>01091206172</a>
        </div>
      </div>
      {!isSubmitted ?
            <div className="contact-form app__flex">
        <div className="app__flex cursor-pointer">
          <input type="text" className='p-text' name='name' placeholder='Enter your name..' value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="app__flex cursor-pointer">
          <input type="email" className='p-text' name='email' placeholder='Enter your email..' value={formData.email} onChange={handleInputChange} />
      </div>
      <div className='cursor-pointer'>
        <textarea name='message' value={formData.message} placeholder='Enter your message' onChange={handleInputChange} className='p-text' />
      </div>
              <button type='button' className='p-text cursor-pointer' onClick={handleSubmit}>{loading?'Sending..' :'Send Message'}</button>

    </div>
    :
    <div>
      <h3 className="head">Thank you for getting in touch!</h3>
      </div>
      }

    </>
  )
}

export default (AppWraper(MotionWrap(Contact,'app_contact' ), 'contact', 'app_whitebg'))