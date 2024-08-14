
import React, { useState } from 'react'


import { Link } from 'react-router-dom'

import '../pages/SignUp.css'

import '../pages/Login.css'


import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { setDoc, doc } from 'firebase/firestore';

import { auth } from '../Firebase-config'
import { storage } from '../Firebase-config';
import { db } from '../Firebase-config';

import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'



const SignUp = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)


  const navigate = useNavigate()

  const registerUser = async (e) => {
    e.preventDefault()
    setLoading(true)

    createUserWithEmailAndPassword(auth, email, password).then(userInfo => {
      const userDetails = userInfo.user
      const storageRef = ref(storage, `images/${Date.now() + username}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on((error) => {
        toast.error(error.message)
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

          // update user profile
          await updateProfile(userDetails, {
            displayName: username,
            photoURL: downloadURL,
          })

          // store user data in firestore database
          await setDoc(doc(db, 'users', userDetails.uid), {
            uid: userDetails.uid,
            displayName: username,
            email,
            photoURL: downloadURL
          })
        })
      })

      setLoading(false)
      toast.success('account successfully created')
      navigate('/login')
      console.log(userDetails)


    }).catch(error => {
      setLoading(false)

      toast.error('something went wrong')
    })
    // try {
    //   const userCredential = await createUserWithEmailAndPassword(auth, email, password)

    //   const user = userCredential.user

    //   console.log(user)
    //   console.log('helo')



    // } catch (error) {

    // }
  }



  return (
    <div className="login">


      {
        loading ? (<h2>LOADING....</h2>) : (
          <section className='login_in'>
            <h3>Register</h3>
            <form action="" onSubmit={registerUser}>
              <div className="name">
                <input type="text" placeholder='Username...' value={username} onChange={e => setUsername(e.target.value)} />
              </div>
              <div className="name">
                <input type="email" placeholder='email...' value={email} onChange={e => setEmail(e.target.value)} />
              </div>

              <div className="email">
                <input type="password" placeholder='Enter Your Password...' value={password} onChange={e => setPassword(e.target.value)} />
              </div>


              <div className="file">
                <input type="file" onChange={e => setFile(e.target.files[0])} />
              </div>


              <button className='login__btn'>Sign Up</button>

              <h5>Already have an account?  <Link to='/login'><span >Click to login</span> </Link> </h5>
            </form>
          </section>

        )
      }
    </div>
  )
}

export default SignUp