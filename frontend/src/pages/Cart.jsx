import React from 'react'
import CommonSection from '../components/layout/UI/CommonSection'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { cartActions } from '../redux/slices/CartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import "../styleSheets/Cart.css"
import { useState } from 'react'


const Cart = () => {


  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)


  return (
    <>
      <CommonSection title='Shopping Cart' />
      <div className="cart__section">
        {
          cartItems.length === 0 ? <h2 className='no__products'>No items added to the cart</h2> :
            <>
              <div className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th >Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => {
                    return (
                      <Tr item={item} key={index} />

                    )
                  })}
                </tbody>
              </div>

              <div className="form">
                <div className="total__amount">
                  <h3>Subtotal</h3>
                  <span>${totalAmount}</span>
                </div>
                <p>Tax and shipping cost will be calculated at checkout</p>
                <button className='buy__btn form__btn'><Link to='/checkout'> Checkout </Link></button>
                <button className='buy__btn form__btn'><Link to='/shop'> Continue Shopping </Link> </button>
              </div>
            </>
        }
      </div>
    </>
  )
}

const Tr = ({ item }) => {

  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  const changeQuantity = (command) => {
    if (command === 'dec') {
      if (quantity === 1) {
        return
      }
      setQuantity(prev => prev - 1)
      dispatch(cartActions.increaseQuantity)
    } else if (command === 'inc') {
      setQuantity(prev => prev + 1)
      dispatch(cartActions.decreaseQuantity)
    }
  }

  const addToCart = () => {
    dispatch(addProduct({...foodDetails, quantity}))
    toast.success("item added to cart")
  }

  const deleteProduct = () => {
    dispatch(cartActions.removeItem(item.id))
  }


  return (
    <tr >
      <td><img src={item.imgUrl} alt="product" /></td>
      <td className='table_title'>{item.productName}</td>
      <td>${item.price}</td>
      <td>
        <div className='quantity'>
          <button disabled={quantity === 1} onClick={() => changeQuantity('dec')}>-</button>
          <td className='td-quantity'>{quantity}px</td>
          <button onClick={() => changeQuantity('inc')}>+</button>
        </div>
      </td>
      <td
        className='table__icon'
        onClick={deleteProduct}
      >
        <RiDeleteBin6Line className='icon' />
      </td>
    </tr>
  )
}


export default Cart