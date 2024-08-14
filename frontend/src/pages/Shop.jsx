import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import '../styleSheets/Shop.css'
import CommonSection from '../components/layout/UI/CommonSection'
import ProductList from '../components/layout/UI/ProductList'
import { useSelector } from 'react-redux'


const Shop = () => {
  const productsArray = useSelector(state => state.products.products);
  const [productsData, setProductData] = useState(productsArray)
  const filterHandler = (e) => {
    const filterValue = e.target.value

    if (filterValue === 'sofa') {
      const filteredProduct = productsData.filter((product) => {
        return product.category === 'sofa'
      })
      setProductData(filteredProduct)
    }

    if (filterValue === 'phone') {
      const filteredProduct = productsData.filter((product) => {
        return product.category === 'phone'
      })
      setProductData(filteredProduct)
    }


    if (filterValue === 'chair') {
      const filteredProduct = productsData.filter((product) => {
        return product.category === 'chair'
      })
      setProductData(filteredProduct)
    }
  }

  const searchHandler = (e) => {
    const searchValue = e.target.value
    const searchedProduct = productsData.filter((product) => {
      return product.productName.toLowerCase().includes(searchValue.toLowerCase())
    })
    setProductData(searchedProduct)
  }


  
  // const fetchProduct = async () => {
  //   await fetch('http://localhost:5000/product//allProduct')
  //     .then(res => res.json())
  //     .then(data => {
  //       setAllProducts(data)
  //       dispatch(setProducts(data))
  //       console.log(data);
  //     })
  // }


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
          </div>
        </div>


        <div className='shop__products'>
          {
            productsData.length === 0 ?
              <h1>No Products Found!</h1> :
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