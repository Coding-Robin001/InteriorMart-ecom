import classes from "./ListItem.module.css"
import { IoCloseSharp } from "react-icons/io5";

const ListItem = ({ name, category, imageSrc, oldPrice, newPrice, removeProduct, id }) => {

    return (
        <div className={classes.container}>
            <div className={classes.item}>
                <span><h2 className={classes.name}>{name} name</h2></span>
                <span> <h3 className={classes.category}>{category} category</h3></span>
                <span> <p className={classes.price}>{newPrice} price1</p></span>
                <span><p className={classes.price}>{oldPrice} price2</p></span>
                <div className={classes.img}>
                    <img src={imageSrc} alt="image" />
                </div>
                <span onClick={removeProduct}><IoCloseSharp className={classes.icon}/></span>
            </div>
        </div>
    )
}


export default ListItem