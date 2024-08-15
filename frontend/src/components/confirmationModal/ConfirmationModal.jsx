import { useSelector } from "react-redux"
import "../../styleSheets/ConfirmationModal.css"
import { IoClose } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Bounce } from "react-reveal";
import { TbConfetti } from "react-icons/tb";

const ConfirmationModal = ({ openConfirmationModal, setOpenComfirmationModal }) => {

    const totalAmount = useSelector(state => state.cart.totalAmount)

    const setModalClose = () => {
        setOpenComfirmationModal(!openConfirmationModal)
    }

    return (
        openConfirmationModal &&
        <Bounce duration={1000}>
            <div className='container'>
                <div className='wrapper'>
                    <IoClose onClick={setModalClose} className="absolute" />
                    <TbConfetti className="icon" />
                    <h2>Congratulations, order successful!</h2>
                    <p>Delivery details will be sent to you shortly</p>
                    <span>Total Price: <span className="price">${totalAmount}</span></span>
                    <Link to="/shop">
                        <button className="button">Continue shopping <FiArrowRight /></button>
                    </Link>
                </div>
            </div>
        </Bounce>
    )
}

export default ConfirmationModal