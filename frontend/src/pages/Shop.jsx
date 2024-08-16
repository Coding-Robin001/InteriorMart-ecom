import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import '../styleSheets/Shop.css'
import CommonSection from '../components/layout/UI/CommonSection'
import ProductList from '../components/layout/UI/ProductList'
import { useSelector } from 'react-redux'
import Spinner from '../components/spinner/Spinner'


const Shop = () => {
  const productsArray = useSelector(state => state.products.products);
  const [productsData, setProductData] = useState(productsArray)


  return (
    <>
      <CommonSection title="Products" />
      <section className='shop'>
        <div className='shop__items'>
          {/* <div className='filter__widget'>
            <div className='filter'>
              <select name="" id="" onChange={filterHandler}>
                <option >Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="phone">phone</option>
                <option value="chair">Chair</option>
              </select>
            </div>

            <div className='sort'>
              <select name="" id="">
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>

            <div className='search__box'>
              <input type="text" placeholder='search products....' onChange={searchHandler} />
              <span><BsSearch /></span>
            </div>
          </div> */}
        </div>

        <div className='shop__products'>
          {
            productsData.length === 0 ?             
                <Spinner />
              :
              <ProductList
                data={productsData}
              />
          }
        </div>
      </section>
    </>
  )
}

export default Shop