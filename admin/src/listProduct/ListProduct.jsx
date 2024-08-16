import classes from "./ListProduct.module.css"
import ListItem from "../components/listItem/ListItem"
import { useEffect, useState } from "react"
import Spinner from "../components/spinner/Spinner"
import { toast } from "react-toastify"

const ListProduct = () => {

    const [allProducts, setAllProducts] = useState([])

    const fetchProduct = async () => {
        await fetch('https://interiormart-ecom-api.onrender.com/product/allProduct')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data)
                console.log(data);
            })
    }

    const removeProduct = async (id) => {
        await fetch('https://interiormart-ecom-api.onrender.com/product/remove', {
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

    if (!allProducts.length)
        return <>
            <span
                style={{
                    fontSize: '25px',
                    marginBottom: '2rem',
                    color: '#02024d'
                }}
            >
                Fetching products
            </span>
            <Spinner />
        </>

    return (
        <>
            <div className={classes.listContainer}>
                <div className={classes.listHead}>
                    <span className={classes.name}>name</span>
                    <span className={classes.category}>category</span>
                    <span className={classes.price}>new price</span>
                    <span className={classes.price}>old price</span>
                    <span className={classes.image}>image</span>

                </div>
                {allProducts && allProducts.map((product, index) => {
                    return <div> {allProducts.length > 0 ? <ListItem
                        key={index}
                        name={product.productName}
                        category={product.category}
                        newPrice={product.newPrice} s
                        oldPrice={product.oldPrice}
                        imageSrc={product.image}
                        id={product.id}
                        removeProduct={(id) => removeProduct(product.id)}
                    /> : <Spinner
                    />}
                    </div>
                })}
            </div>
        </>
    )
}

export default ListProduct