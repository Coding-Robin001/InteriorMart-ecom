
import React from 'react'

import CommonSection from '../components/layout/UI/CommonSection'

import { useSelector } from 'react-redux'

import '../pages/Checkout.css'

const Checkout = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
    <>
      <CommonSection title='Checkout' />

      <section className="checkout">
        <div className="form__info">
          <h6 className="checkout__head">Billing Information</h6>
          <form action="">
            <div className="name">
              <input type="text" placeholder='Enter Your Name...' />
            </div>
            <div className="email">
              <input type="text" placeholder='Enter Your Email...' />
            </div>
            <div className="number">
              <input type="number" placeholder='Enter Your Number...' />
            </div>
            <div className="address">
              <input type="text" placeholder='Street Address...' />
            </div>
            <div className="city">
              <input type="text" placeholder='City...' />
            </div>
            <div className="postal__code">
              <input type="text" placeholder='Postal Code...' />
            </div>
            <div className="country">
              <input type="text" placeholder='Country......' />
            </div>
          </form>
        </div>


        <div className="form__box">
          <div className="box quantity">
            <h4>Total Quantity :</h4>
            <span>{totalQuantity}</span>
          </div>
          <div className="box total__amount__form">
            <h4>Subtotal :</h4>
            <span>${totalAmount}</span>
          </div>
          <div className="box shipping">
            <h4>Shipping : <br /> free shipping</h4>
            <span>$0</span>
          </div>
          <div className="box cost">
            <h3>Total Cost :</h3>
            <span>${totalAmount}</span>
          </div>
          <button className='form__box__btn'>Place an order</button>




        </div>




      </section>

    </>
  )
}

export default Checkout