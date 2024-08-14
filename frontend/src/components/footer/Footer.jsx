
import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

import {BsTelephonePlus} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {GoLocation} from 'react-icons/go'
const Footer = () => {
  return (
    <section id="footer">
      <div className='footer__container' >
        <div className="footer__item">
          <h4>Multimart</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. illum asperiores. Similique. sicing elit. illum asperiores. Sisicing elit. illum asperiores. Si</p>

        </div>
        <div className="footer__item">
          <h4>Top Categories</h4>
          <Link to='/shop'><p> Mobile Phones</p></Link>
          <Link to='/shop'><p> Modern Sofas</p></Link>
          <Link to='/shop'><p> Quality Armchairs</p></Link>
          <Link to='/shop'><p> Smart Watches</p></Link>
        </div>
        <div className="footer__item">
          <h4>Useful Links</h4>
          <Link to='/shop'><p> Shop</p></Link>
          <Link to='/cart'><p> Cart</p></Link>
          <Link to='/login'><p> Login</p></Link>
          <p>Privacy Policy</p>
        </div>
        <div className="footer__item">
          <h4>Contact</h4>
          <p><HiOutlineMail className='icon'/>  AdeAdewole1712@gmail.com</p>
          <p><BsTelephonePlus className='icon' /> 09024173596</p>
          <p><GoLocation className='icon'/>Brass Island</p>
        </div>
      </div>

      <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicielit. illum asperiores. Sisicing elit. illum asperiores. Si</p>



    </section>

  )
}

export default Footer