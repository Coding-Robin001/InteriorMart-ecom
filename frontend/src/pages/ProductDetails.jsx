import { useParams } from 'react-router-dom'
import CommonSection from '../components/layout/UI/CommonSection'
import { useDispatch} from 'react-redux'
import { cartActions } from '../redux/slices/CartSlice'
import { toast } from 'react-toastify'
import "../styleSheets/ProductDetails.css"
import ProductList from '../components/layout/UI/ProductList'
import products from '../assets/data/products'

const ProductDetails = () => {
  const { id } = useParams()
  const product = products.find(item => item.id === id)
  const { productName, imgUrl, price, description, category } = product
  const relatedProducts = products.filter(item => item.category === category)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: id,
      imgUrl: imgUrl,
      productName: productName,
      price: price
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
            <ProductList data={relatedProducts} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails