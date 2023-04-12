import React from 'react'
import img from "../../assetsImage/gaming.ebaf2ffc84f4451d.jpg"
import style from "./Register.module.css"
import { useFormik } from 'formik'
import * as Yup from "yup";

export default function Register() {
  const schema= Yup.object({})
    const formik =useFormik({
      initialvalues:{
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        age: "",
      },
      onSubmit: submitRegister,
      validationSchema: schema,
    }) 
    return (
    <>
        <div className='py-4 px-2 px-lg-4 mt-lg-4 pb-5'>
          <div className='row g-0 pt-lg-4 justify-content-center align-items-center'>
            <div className={`col-lg-6 d-none d-lg-block ${style.image}`}>
              <img src={img} className='w-100 h-100' alt="games"></img>
            </div>
            <div className={`${style.cardRegister} col-lg-6 py-4 px-3`}>
              <div className={`${style.info}`}>
                <h1 className='fs-4 text-center mb-4'>Create My Account!</h1>
                <form onSubmit={formik.handleSubmit}>
                  <div className='row mb-3'>
                    <div className="col-6">
                      <input type="text" value={formik.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='First Name' className={`form-control p-1 ${style.bgInput}`}></input>
                    </div>
                    <div className='col-6'>
                      <input type="text" placeholder='last Name' className={`form-control p-1 ${style.bgInput}`}></input>
                    </div>
                  </div>
                  <input type="email" placeholder='Email Address' className={`form-control p-1 mb-3 ${style.bgInput}`}></input>
                  <input type="number" placeholder='age' className={`form-control p-1 mb-3 ${style.bgInput}`}></input>
                  <input type="password" placeholder='password' className={`form-control mb-3 p-1 ${style.bgInput}`}></input>
                  <button className='btn form-control text-white' type="submit">Create Account</button>
                </form>
                <p className='text-center mt-3 text-muted small px-2'>This site is protected by reCAPTCHA and the Google <a href="" className='text-muted'>Privacy Policy</a> and <a className='text-muted' href="">Term of Service </a>apply.</p>
              </div>
              <p className='text-center mt-3'>Already a member? <a href="" className='text-decoration-none'>Log In <i className="fa-solid fa-angle-right"></i></a></p>
            </div>
          </div>
        </div>
    </>
    )
}
