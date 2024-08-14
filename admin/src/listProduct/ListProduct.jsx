import classes from "./ListProduct.module.css"
import ListItem from "../components/listItem/ListItem"
import { useEffect, useState } from "react"
import img from "../assets/wireless-01.png"
import Spinner from "../components/spinner/Spinner"
import { toast } from "react-toastify"

const ListProduct = () => {

    const [allProducts, setAllProducts] = useState([])

    const fetchProduct = async () => {
        await fetch('http://localhost:5000/product//allProduct')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data)
                console.log(data);
            })
    }

    const removeProduct = async (id) => {
        await fetch('http://localhost:5000/product/remove', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
        toast.success("product removed succesfully!")
        fetchProduct();
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div className={classes.listContainer}>
            {allProducts && allProducts.map((product, index) => {
                return <div> {allProducts.length > 0 ? <ListItem
                    key={index}
                    name={product.productName}
                    category={product.category}
                    newPrice={product.newPrice}
                    oldPrice={product.oldPrice}
                    imageSrc={product.image}
                    id={product.id}
                    removeProduct={(id) => removeProduct(product.id)}
                /> : <Spinner
                />}
                </div>
            })}
        </div>
    )
}

export default ListProduct