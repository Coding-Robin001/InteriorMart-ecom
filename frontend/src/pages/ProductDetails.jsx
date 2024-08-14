import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import Products from '../assets/data/products'
import CommonSection from '../components/layout/UI/CommonSection'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/CartSlice'
import {toast} from 'react-toastify'
import ProductList from '../components/layout/UI/ProductList'
import "../styleSheets/ProductDetails.css"



const ProductDetails = () => {

  const { id } = useParams()
  const [productsData, setProductData] = useState(Products)

  const productsItem = Products.find(item => item.id === id)

  const { productName, imgUrl, price, description, category } = productsItem

  const relatedProducts = Products.filter(item => item.category === category)

  const dispatch = useDispatch()

  let reducedArray = productsData?.slice(0, 3);


  const addToCart = () => {
    dispatch(cartActions.addItemm({
      id,
      imgUrl,
      productName,
      price
    }))

    toast.success('Product added to cart')
  }


  return (
    <>
      <CommonSection title={productName} />

      <div className="detail__wrapper">

        <div className="product__detailss">
          <div className="image">
            <img src={imgUrl} alt="" />
          </div>

          <div className="item__detailss">
            <h2>{productName}</h2>
            <div className="priCat">
              <h2 className='price-item'>${price}</h2>
              <span className='cat'>Category: {category.toUpperCase()}</span>

            </div>
            <h3>{description}</h3>

            <button className='' onClick={addToCart}> Add To Cart</button>

          </div>

        </div>


        <div className="also__like">
          <h2>You might also like</h2>
          <div className="also__img">
            <ProductList data={reducedArray ? reducedArray : null} />
          </div>

        </div>

      </div>


    </>
  )
}

export default ProductDetails