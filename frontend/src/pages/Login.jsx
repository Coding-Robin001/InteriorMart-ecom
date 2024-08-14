

import React, { useState } from 'react'

import { Link } from 'react-router-dom'

// import { signInWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../Firebase-config'

import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'

import '../pages/Login.css'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()


  // const signIn = async (e) => {
  //   e.preventDefault()
  //   setLoading(true)

  //   await signInWithEmailAndPassword(auth, email, password).then(userInfo => {
  //     const userDetails = userInfo.user
  //     console.log(userDetails)
  //     setLoading(false)
  //     toast.success('successfully logged in')
  //     navigate('/checkout')

  //   }).catch(error => {
  //     toast.error(error.message)
  //     setLoading(false)

  //   })

  // }

  return (
    <div className="login">
      {
        loading ? (<div>LOADING........ </div>) : (
          <section className="login_in">

            <h3>Login</h3>
            <form action="" onSubmit={signIn}>
              <div className="name">
                <input type="email" placeholder='Enter Your Email...' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="email">
                <input type="password" placeholder='Enter Your Password...' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <button className='login__btn'>Login</button>

              <h5>Dont have an account yet?  <Link to='/signup'><span >Create an account</span> </Link> </h5>


            </form>
          </section>



        )
      }
    </div>
  )
}

export default Login