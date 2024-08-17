import React from 'react'
import "../../../styleSheets/ProductCard.css"

import { HiOutlinePlus } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../../redux/slices/CartSlice'

import { toast } from 'react-toastify'

const ProductCard = ({ item }) => {

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    }))

    toast.success('product added to cart')
  }

  return (
    <div className='product__card'>
      <Link to={`/shop/${item.id}`}>
        <div className="product__img">
          <img src={item.imgUrl} alt="img" />
        </div>
      </Link>
      <h3 className="product__name">
        <Link to={`/shop/${item.id}`}>
          {item.productName}
        </Link>
      </h3>
      <span className="chair">{item.category}</span>
      <div className="product__card-bottom">
        <span className="price">${item.price}</span>
        <span className='icon' onClick={addToCart}>
          <HiOutlinePlus />
        </span>
      </div>
    </div>
  )
}

export default ProductCard