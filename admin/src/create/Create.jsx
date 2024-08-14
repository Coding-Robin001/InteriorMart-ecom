import React from 'react'
// import classes from './Create.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'



const Create = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [review, setReview] = useState("")
  const navigate = useNavigate()

  const { token } = useSelector((state) => state.auth)



  const handleCloseImg = () => {
    setImage('')
  }

  const handleCreateProduct = async (e) => {
    e.preventDefault()

    if (title === ""
      || desc === ""
      || image === ""
      || price === ""
      || category === ""
      || review === "") {
      toast.error("please fill out the form")
      return
    }

    try {
      const res = await fetch(`https://fooder-backend.onrender.com/api/product`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          category,
          image,
          // img: filename,
          price,
          review
        })
      })

      const food = await res.json()
      console.log(food)
      navigate(`/food/${food._id}`)

    } catch (error) {
      toast.error(error.message)
      console.error(error.message)
    }
  }



  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Create food</h2>
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          <div className={classes.inputWrapper}>
            <label>Title: </label>
            <input type="text"
              placeholder='Title...'
              className={classes.input}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Description: </label>
            <input type="text"
              placeholder='Description...'
              className={classes.input}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Category: </label>
            <input type="text"
              placeholder='Category...'
              className={classes.input}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Image Url: </label>

            {/* <label className={classes.labelFileInput}>Image: <span>Image Url</span></label> */}
            <input type="text"
              id="image"
              placeholder='Image...'
              className={classes.input}
              onChange={(e) => setImage(e.target.value)}
            // style={{ display: 'none' }}
            />
            {image && <p className={classes.imageName}>{image.name} <AiOutlineCloseCircle onClick={handleCloseImg} className={classes.closeIcon} /></p>}
          </div>

          {/* <div className={classes.inputWrapperImage}>
            
            <label htmlFor="image" className={classes.labelFileInput}>Image: <span>Upload here</span></label>
            <input type="file"
              id="image"
              placeholder='Image...'
              className={classes.input}
              onChange={onChangeFile}
              style={{ display: 'none' }}
            />
            {image && <p className={classes.imageName}>{image.name} <AiOutlineCloseCircle onClick={handleCloseImg} className={classes.closeIcon} /></p>}
          </div> */}
          <div className={classes.inputWrapper}>
            <label>Price: </label>
            <input type="number"
              step={0.01}
              placeholder='Price...'
              className={classes.input}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Review: </label>
            <input type="number"
              step={0.1}
              min={1}
              max={5}
              placeholder='Review...'
              className={classes.input}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div className={classes.buttonWrapper}>
            <button type="submit" className={classes.submitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create