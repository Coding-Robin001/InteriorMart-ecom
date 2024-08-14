import React from 'react'
import classes from "./CreateProduct.module.css"
import { useState } from 'react'
import { toast } from 'react-toastify'
import uploadArea from "../assets/upare.png"


const CreateProduct = () => {
  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("sofa")
  const [oldPrice, setOldPrice] = useState("")
  const [newPrice, setNewPrice] = useState("")
  const [uploadInProgress, setUploadInProgress] = useState(false)

  const addProduct = async () => {
    setUploadInProgress(true)
    let product = {
      title, image, desc, category, oldPrice, newPrice
    }
      await fetch('http://localhost:5000/product/add', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }).then(res => res.json()).then(data => {
        data.success ? toast.success("product added to database succesfully!") : toast.error("failed")
      })
      setUploadInProgress(false)
  }


  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Add Product Item to Database</h2>
        <div
        >
          <div className={classes.inputWrapper}>
            <label>Product Title: </label>
            <input type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder='Title...'
              className={classes.input}
              name="title"
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Description: </label>
            <input type="text"
              placeholder='Description...'
              name='description'
              className={classes.input}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Category: </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              id=""
              className={classes.select}
            >
              <option value="sofa">sofa</option>
              <option value="chair">chair</option>
              <option value="phone">Phone</option>
              <option value="headphone">headphone</option>
            </select>
          </div>

          <div className={classes.inputWrapper}>
            <label>Price: </label>
            <input type="number"
              value={oldPrice}
              step={0.01}
              placeholder='Price...'
              className={classes.input}
              name='oldPrice'
              onChange={(e) => setOldPrice(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Offer Price: </label>
            <input type="number"
              value={newPrice}
              step={0.01}
              placeholder='Price...'
              className={classes.input}
              name='newPrice'
              onChange={(e) => setNewPrice(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Image Url: </label>
            <div className='img'>
              <img
                src={image ? image : uploadArea}
                alt="image"
                className={classes.imageSize}
              />
            </div>
            <input type="text"
              placeholder='imageURL...'
              name='description'
              className={classes.input}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className={classes.buttonWrapper}>
            <button
              disabled={uploadInProgress}
              onClick={addProduct}
              type="submit"
              className={classes.submitBtn}
            >
              {uploadInProgress ? "uploading..." : "upload"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default CreateProduct