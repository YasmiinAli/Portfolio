import React from 'react'

export default function Dots({active}) {
  return (
    <div className='app_navigation'>
       {['home','about','work','skills','certificates','contact'].map((item,index)=>

            <a href={`#${item}`} key={index} className='app_navigation-dot'
            style={active === item ? {backgroundColor: '#313BAC'} : {}}
            />
          
        )}
      </div>
  )
}
