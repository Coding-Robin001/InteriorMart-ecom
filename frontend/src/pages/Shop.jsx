import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import '../styleSheets/Shop.css'
import CommonSection from '../components/layout/UI/CommonSection'
import products from '../assets/data/products'
import ProductList from '../components/layout/UI/ProductList'


const Shop = () => {
  const [productsData, setProductData] = useState(products)
  const filterHandler = (e) => {
    const filterValue = e.target.value

    if (filterValue === 'sofa') {
      const filteredProduct = products.filter((product) => {
        return product.category === 'sofa'
      })

      setProductData(filteredProduct)
    }


    if (filterValue === 'watch') {
      const filteredProduct = products.filter((product) => {
        return product.category === 'watch'
      })

      setProductData(filteredProduct)
    }


    if (filterValue === 'chair') {
      const filteredProduct = products.filter((product) => {
        return product.category === 'chair'
      })

      setProductData(filteredProduct)
    }

    if (filterValue === 'wireless') {
      const filteredProduct = products.filter((product) => {
        return product.category === 'wireless'
      })

      setProductData(filteredProduct)
    }

    if (filterValue === 'mobile') {
      const filteredProduct = products.filter((product) => {
        return product.category === 'mobile'
      })
      setProductData(filteredProduct)
    }
  }

  let reducedArray = productsData.slice(0, 8);

  const searchHandler = (e) => {
    const searchValue = e.target.value
    const searchedProduct = products.filter((product) => {
      return product.productName.toLowerCase().includes(searchValue.toLowerCase())
    })
    setProductData(searchedProduct)
  }

  return (
    <>
      <CommonSection title="Products" />
      <section className='shop'>
        <div className='shop__items'>
          <div className='filter__widget'>
            <div className='filter'>
              <select name="" id="" onChange={filterHandler}>
                <option >Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
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
          </div>
        </div>


        <div className='shop__products'>
          {
            productsData.length === 0 ?
              <h1>No Products Found!</h1> :
              <ProductList
                data={reducedArray}
              />
          }
        </div>
      </section>
    </>
  )
}

export default Shop