import React from 'react'
import '../../styleSheets/Header.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { BsHeartHalf } from 'react-icons/bs'
import { RiShoppingBagLine } from 'react-icons/ri'
import { HiMenu } from 'react-icons/hi'
import Logo from '../../assets/images/eco-logo.png'
import { useSelector } from 'react-redux'


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

  const navigateToCart = () => {
    navigate('/cart')
  }


  return (
    <section className='header-section'>
      <header className='header'>
        <div className="div">
          <div className='nav__wrapper'>
            <div className='logo'>
              <img src={Logo} alt='' />
              <div>
                <h1>InterioMart</h1>
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
              {/* <h3>{currentUser.displayName}</h3> */}
              {

                // console.log(currentUser.displayName)

              }

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
              <span>
                user
              </span>
            </div>

            <div className='mobile__menu'>
              <span>
                <HiMenu />
              </span>
            </div>
          </div>
        </div>
      </header>
    </section>

  )
}

export default Header