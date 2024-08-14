
import Clock from "../layout/UI/Clock"
import { Link } from "react-router-dom"
import counterImg from "../../assets/images/counter-Timer-img.png"
import "../../styleSheets/Clock.css"


const ClockContainer = () => {

    return (
        <section className="timer__countdown">
            <div className="timer">
                <div className="timer__text">
                    <div className="clock__top">
                        <h4>Limited Offfers</h4>
                        <h3>Quality Armchairs</h3>
                    </div>
                    <Clock />
                    <Link to='/shop' className="buy__btn white"> Visit Store</Link>
                </div>
                <div className="timer__image">
                    <img src={counterImg} alt="counter img" />
                </div>
            </div>

        </section>
    )

}

export default ClockContainer