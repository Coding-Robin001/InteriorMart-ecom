import React, { useState, useEffect } from 'react'
import "../styleSheets/Home.css"
import ClockBox from '../components/clockContainer/ClockBox'
import HeroSection from "../components/hero_section/HeroSection"
import Services from "../components/services/Services"
import ProductList from '../components/layout/UI/ProductList'
import Spinner from '../components/spinner/Spinner'
import  products  from "../../src/assets/data/products"

const Home = () => {

  const [allProducts, setAllProducts] = useState(products)
  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])


  useEffect(() => {
    const filteredTrendingProducts = allProducts?.filter(item => item.category === 'chair')
    const filteredBestSalesProducts = allProducts?.filter(item => item.category === 'sofa')
    const filteredMobileProducts = allProducts?.filter(item => item.category === 'mobile')

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
  }, [allProducts])

  // const fetchProduct = async () => {
  // const res = await axios.get(`https://candle-boiled-era.glitch.me/product/all`)
  // console.log(res.data, res);

  // const data = await res.data
  // setAllProducts(data)
  // dispatch(setProducts(data))

  // await fetch('https://interiormart-ecom-api.onrender.com/product/allProduct')
  // await fetch('http://localhost:5000/product/allProduct')
  //   .then(res => res.json())
  //   .then(data => {
  //     setAllProducts(data)
  //     dispatch(setProducts(data))
  //   })
  //   .catch(error => console.log(error)
  //   )

return (
  <>
    <HeroSection />
    <Services />

    <section className="trending__products">
      <h2 className='section__title'>Trending Products</h2>
      <div className="product__items">
        {
          allProducts.length > 0 ? <ProductList data={trendingProducts} /> : <Spinner />
        }
      </div>
    </section>

    <section className="best__sales">
      <h2 className='section__title'>Best Sales</h2>
      <div className="product__items">
        {
          allProducts.length > 0 ? <ProductList className='best' data={bestSalesProducts} /> : <Spinner />
        }
      </div>
    </section>

    <ClockBox />

    <section className="new__arrivals">
      <h2 className='section__title'>New Arrivals</h2>
      <div className="product__items">
        {
          allProducts.length > 0 ? <ProductList data={mobileProducts} /> : <Spinner />
        }
      </div>
    </section>
  </>
)
}

export default Home