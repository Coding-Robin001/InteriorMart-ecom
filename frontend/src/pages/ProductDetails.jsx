import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CommonSection from '../components/layout/UI/CommonSection'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../redux/slices/CartSlice'
import { toast } from 'react-toastify'
import "../styleSheets/ProductDetails.css"
import Spinner from '../components/spinner/Spinner'
import ProductList from '../components/layout/UI/ProductList'

const ProductDetails = () => {
  const products = useSelector(state => state.products.products);
  const [productArray, setProductsArray] = useState([])
  const [singleProduct, setSingleProduct] = useState(null)
  const [OtherProduct, setOtherProduct] = useState([])

  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    setProductsArray(products)

    let single = productArray.find(item => item?.id == id)
    let otherProd = productArray.filter(item => item?.category == singleProduct?.category).slice(0, 3);
    setSingleProduct(single)
    setOtherProduct(otherProd)

  }, [singleProduct, productArray, id]
  )

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: singleProduct.id,
      imgUrl: singleProduct.image,
      productName: singleProduct.productName,
      price: singleProduct.oldPrice
    }))
    toast.success('Product added to cart')
  }

  if (!singleProduct)
    return <div
      style={{
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Spinner />
    </div>;


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


        <div className="also__like">
          <h2>You might also like</h2>
          <div className="also__img">
            <ProductList data={OtherProduct ? OtherProduct : null} />
          </div>

        </div>

      </div>


    </>
  )
}

export default ProductDetails