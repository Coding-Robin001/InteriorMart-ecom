import React, { useState, useEffect } from 'react'
import "../styleSheets/Home.css"
import HeroSection from "../components/hero_section/HeroSection"
import Services from "../components/services/Services"
import products from '../assets/data/products'
import ProductList from '../components/layout/UI/ProductList'
import ClockContainer from '../components/clockContainer/clockContainer'


const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])

  useEffect(() => {
    const filteredTrendingProducts = products.filter(item => item.category === 'chair')
    const filteredBestSalesProducts = products.filter(item => item.category === 'sofa')
    const filteredMobileProducts = products.filter(item => item.category === 'mobile')
    const filteredWirelessProducts = products.filter(item => item.category === 'wireless')

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
  }, [])


  return (
    <>
      <HeroSection />
      <Services />

      <section className="trending__products">
        <h2 className='section__title'>Trending Products</h2>
        <div className="product__items">
          <ProductList data={trendingProducts} />
        </div>
      </section>

      <section className="best__sales">
        <h2 className='section__title'>Best Sales</h2>
        <div className="product__items">
          <ProductList className='best' data={bestSalesProducts} />
        </div>
      </section>

      <ClockContainer />

      <section className="new__arrivals">
        <h2 className='section__title'>New Arrivals</h2>
        <div className="product__items">
          <ProductList data={mobileProducts} />
          <ProductList data={wirelessProducts} />
        </div>
      </section>
    </>
  )
}

export default Home