import React from 'react'
import Style from './Logo.module.css';
import logo from '../../../assets/logo.png'
// import logo from '../../../../public/logo.png'

const Logo = () => {
  return (
    <div className={Style.logoContainer} >
      <img src={logo} alt="musicart" />
    </div>
  )
}

export default Logo
