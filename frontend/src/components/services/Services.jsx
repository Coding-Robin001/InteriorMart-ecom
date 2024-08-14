import React from 'react'
import '../../styleSheets/Services.css'
import { FiTruck } from 'react-icons/fi'
import { GiReturnArrow } from 'react-icons/gi'
import { MdPayments } from 'react-icons/md'
import { SiWebmoney } from 'react-icons/si'


const Services = () => {
    return (
        <section className='services-section'>
            <div className="services">
                <div className='service-item one' >
                    <div className="service-icon">
                        <FiTruck />
                    </div>
                    <div className="service-text">
                        <h3>Affordable Products</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    </div>
                </div>
                <div className='service-item two' >
                    <div className="service-icon">
                        <GiReturnArrow />
                    </div>
                    <div className="service-text">
                        <h3>Free Shipping</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='service-item three' >
                    <div className="service-icon">
                        <MdPayments />
                    </div>
                    <div className="service-text">
                        <h3>Best customer Service</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='service-item four' >
                    <div className="service-icon">
                        <SiWebmoney />
                    </div>
                    <div className="service-text">
                        <h3>Express Delivery</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Services