import React, { useState } from 'react'
import '../../styleSheets/Header.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { BsHeartHalf } from 'react-icons/bs'
import { RiShoppingBagLine } from 'react-icons/ri'
import { HiMenu } from 'react-icons/hi'
import Logo from '../../assets/images/eco-logo.png'
import { useSelector } from 'react-redux'
import { IoCloseSharp } from "react-icons/io5";
import { Slide } from "react-reveal";


const nav__links = [
  {
    path: "home",
    display: "Home"
  },
  {
    path: "shop",
    display: "Shop"
  },
  {
    path: "cart",
    display: "Cart"
  }
]

const Header = () => {

  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)

  const navigateToCart = () => {
    navigate('/cart')
  }

  return (
    <>
      <header className='head'>
        <div className='nav__wrapper'>
          <div className='logo'>
            <img src={Logo} alt='' />
            <div>
              <Link to="/home">
                <h1>InterioMart</h1>
              </Link>
            </div>
          </div>

          <div className='navigation'>
            <ul className='menu'>
              {nav__links.map((nav, index) => (
                <li
                  className='nav__item'
                  key={index}
                >
                  <NavLink
                    to={nav.path}
                    className={(navClass) => navClass.isActive ? 'nav__active' : ''}
                  >
                    {nav.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>



          <div className='nav__icons'>
            <span className='cart__icons'>
              <BsHeartHalf />
              <span className='badge'>1</span>
            </span>
            <span className='cart__icons'>
              <RiShoppingBagLine />
              <span
                className='badge'
                onClick={navigateToCart}
              >
                {totalQuantity}
              </span>
            </span>
            <div className='mobile__menu'>
              <span>
                {
                  openModal ?
                    <IoCloseSharp
                      fontSize={30}
                      onClick={() => setOpenModal(!openModal)}
                    /> :
                    <HiMenu
                      fontSize={27}
                      onClick={() => setOpenModal(!openModal)}
                    />
                }
              </span>
            </div>
          </div>
        </div>

      </header>

      {
        openModal &&
        <Slide duration={1000} left>
          <div className='nav__responsive__item'>
            <ul className='menu__responsive__item'>
              {nav__links.map((nav, index) => (
                <li
                  className=''
                  key={index}
                  onClick={() => setOpenModal(!openModal)}
                >
                  <NavLink
                    to={nav.path}
                    className={(navClass) => navClass.isActive ? 'nav__active' : ''}
                  >
                    {nav.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Slide>
      }
    </>
  )
}

export default Header