import classes from "./ListItem.module.css"
import { IoCloseSharp } from "react-icons/io5";

const ListItem = ({ name, category, imageSrc, oldPrice, newPrice, removeProduct, id }) => {

    return (
        <div className={classes.container}>
            
            <div className={classes.item}>
                <span><h2 className={classes.name}>{name}</h2></span>
                <span> <p className={classes.category}>{category}</p></span>
                <span> <p className={classes.price}>${newPrice}</p></span>
                <span><p className={classes.price}>${oldPrice}</p></span>
                <div className={classes.img}>
                    <img src={imageSrc} alt="image" />
                </div>
                <span onClick={removeProduct}><IoCloseSharp className={classes.icon}/></span>
            </div>
        </div>
    )
}


export default ListItem