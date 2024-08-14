import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import Products from '../assets/data/products'
import CommonSection from '../components/layout/UI/CommonSection'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../redux/slices/CartSlice'
import { toast } from 'react-toastify'
// import ProductList from '../components/layout/UI/ProductList'
import "../styleSheets/ProductDetails.css"
// import { useLocation } from 'react-router-dom';
import { clearSelectedProduct, setSelectedProduct } from '../redux/slices/ProductSlice'
import Spinner from '../components/spinner/Spinner'


const ProductDetails = () => {
  const products = useSelector(state => state.products.products);
  const [productArray, setProductsArray] = useState([])
  const [singleProduct, setSingleProduct] = useState()

  const { id } = useParams()

  useEffect(() => {
    setProductsArray(products)
    console.log(productArray);

    let single = productArray.find(item => item.id == id)
    setSingleProduct(single)

  }, [singleProduct, productArray, id]
  )

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      imgUrl,
      productName,
      price
    }))

    toast.success('Product added to cart')
  }



  // if (!singleProduct) {
  //   return <Spinner />



  return (
    <>
      <CommonSection title={singleProduct?.productName} />

      <div className="detail__wrapper">

        <div className="product__detailss">
          <div className="image">
            <img src={singleProduct?.image} alt="" />
          </div>

          <div className="item__detailss">
            <h2>{singleProduct?.productName}</h2>
            <div className="priCat">
              <h2 className='price-item'>${singleProduct?.oldPrice}</h2>
              <span className='cat'>Category: {singleProduct?.category.toUpperCase()}</span>

            </div>
            <h3>{singleProduct?.desc}</h3>

            <button className='' onClick={addToCart}> Add To Cart</button>

          </div>

        </div>


        {/* <div className="also__like">
          <h2>You might also like</h2>
          <div className="also__img">
            <ProductList data={reducedArray ? reducedArray : null} />
          </div>

        </div> */}

      </div>


    </>
  )
}

export default ProductDetails