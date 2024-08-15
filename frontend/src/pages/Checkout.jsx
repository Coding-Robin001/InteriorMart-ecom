import React, { useState } from 'react'
import CommonSection from '../components/layout/UI/CommonSection'
import { useSelector } from 'react-redux'
import "../styleSheets/Checkout.css"
import { toast } from 'react-toastify'
import ConfirmationModal from '../components/confirmationModal/ConfirmationModal'

const Checkout = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [postal, setPostal] = useState("")
  const [country, setCountry] = useState("")
  const [openModal, setOpenModal] = useState(false)

  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  const handlesubmit = (e) => {
    e.preventDefault()
    if (name === ""
      || email === ""
      || number === "" || number.length < 9
      || address === ""
      || city === ""
      || postal === ""
      || country === "") {
      toast.error("please fill out the form")
      return
    } else {
      setOpenModal(true)
      console.log(name, address, openModal);
    }
  }


  return (
    <>
      <CommonSection title='Checkout' />
      <section className="checkout">
        <div className="form__info">
          <h6 className="checkout__head">Billing Information</h6>
          <form action="">
            <div className="name">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder='Enter Your Name...'
              />
            </div>
            <div className="email">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder='Enter Your Email...'
              />
            </div>
            <div className="number">
              <input
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder='Enter Your Number...'
              />
            </div>
            <div className="address">
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder='Street Address...'
              />
            </div>
            <div className="city">
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder='City...'
              />
            </div>
            <div className="postal__code">
              <input
                onChange={(e) => setPostal(e.target.value)}
                type="text"
                placeholder='Postal Code...'
              />
            </div>
            <div className="country">
              <input
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                placeholder='Country......'
              />
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
          <button
            onClick={handlesubmit}
            className='form__box__btn'
          >
            Place an order
          </button>
        </div>
      </section>
      <ConfirmationModal
        openConfirmationModal={openModal}
        setOpenComfirmationModal={setOpenModal}
      />
    </>
  )
}

export default Checkout