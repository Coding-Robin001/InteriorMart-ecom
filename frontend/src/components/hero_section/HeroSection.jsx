import "../../styleSheets/HeroSection.css"
import heroImg from "../../assets/images/hero-img.png"
import { Link } from "react-router-dom"


const HeroSection = () => {

    return (
        <section className='hero-section'>
            <div className="hero">
                <div className="hero-content">
                    <p>Trendiing Poducts in 2024 </p>
                    <h2>Make Your Interior More Minimalistic And Modern</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quod, dolorem delectus, beatae mollitia quaerat laboru
                        m atque blanditiis e perferendis tempora incidunt optio.</p>

                    <Link to='/shop' className="buy__btn"> SHOP NOW! </Link>
                </div>
                <div className="hero-img">
                    <img src={heroImg} alt="sofa" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection