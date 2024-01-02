import React from 'react'
import SocialMedia from '../SocialMedia/SocialMedia'
import Dots from '../Dots/Dots'

 const AppWraper = (Component, idName, classNames ) =>  function Wrap() {
  return (
    <div id={idName} className={`app_container ${classNames}`}>
      <SocialMedia/>
      <div className="app__wrapper app__flex">
      <Component />
      <div className="copyright">
        <p className='p-text'>@2023 Yasmin Ali</p>
        <p className='p-text'>All rights reserverd</p>
      </div>
      </div>
      <Dots active={idName}/>
    </div>
  )
}

export default AppWraper