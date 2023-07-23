import React, { useContext, useState } from 'react'
import img from "../../assetsImage/gaming.ebaf2ffc84f4451d.jpg"
import logo from "../../assetsImage/logo.png"
import style from "./Login.module.css"
import { useFormik } from 'formik'
import * as Yup from "yup";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'

export default function Login({saveUserData}) {
  const navigate= useNavigate();
  const [loading,setloading]=useState(false);
  const [err,setError]=useState("")
  const schema= Yup.object({
    email:Yup.string().required("email is required").email("email invalid"),
    password: Yup.string().required("password is required").matches(/^[A-Z][a-z]{3,}[0-9]{2,5}$/,"password not match"),
  })
  async function submitLogin(values){
    try {
      setloading(true);
      const {data}= await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values)
      console.log(data);
      if(data.message === "success"){
        localStorage.setItem("userToken",data.token);
        saveUserData();
        toast("success",{className:"bg-primary text-white py-1 h6"});
        navigate("/");
        setError("");
        setloading(false);
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };
    
  const formik= useFormik({
      initialValues:{
        email: "",
        password: "",
      },
      onSubmit: submitLogin,
      validationSchema: schema,
  });
    return (
    <>
        <div className='conatiner pt-5 px-2 px-lg-4 mt-lg-4 pb-5'>
          <div className='row g-0 pt-3 pt-lg-4 justify-content-center align-items-center'>
            <div className={`col-lg-6 d-none d-lg-block ${style.image}`}>
              <div  style={{backgroundImage:`url(${img})`,backgroundSize:"100% 100%",backgroundPosition:"center",height:"100%"}}></div>
            </div>
            <div className={`${style.cardRegister} col-lg-6 py-4 px-3`}>
              <div className={`${style.info}`}>
                <img src={logo} className={`${style.logo} mx-auto mb-3 d-block`} alt="logo"></img>
                <h1 className='fs-4 text-center mb-4'>Log in to GameOver</h1>
                <form onSubmit={formik.handleSubmit}>
                  
                  <input type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" id="email" className={`form-control p-1 mb-3 ${style.bgInput}`} placeholder='Email Address'></input>
                  {formik.errors.email && formik.touched.email?<p className='alert alert-danger p-1 mt-1'>{formik.errors.email}</p>:""}
                  {err?<p className='alert alert-danger mt-1 p-1'>{err}</p>:""}

                  <input type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name="password" id="password" className={`form-control p-1 mb-3 ${style.bgInput}`} placeholder='password'></input>
                  {formik.errors.password && formik.touched.password?<p className='alert alert-danger p-1 mt-1'>{formik.errors.password}</p>:""}

                  <button className='btn form-control text-white' type="submit" onClick={submitLogin}>{loading?<i className='fas fa-spinner fs-spin'></i>:"Login"}</button>
                </form>
                <p className='text-center mt-3 text-muted small px-2'>This site is protected by reCAPTCHA and the Google <a href="" className='text-muted'>Privacy Policy</a> and <a className='text-muted' href="">Term of Service </a>apply.</p>
              </div>
              <Link to="/forgetpassword" className='d-block mt-2 text-center'>forget a password?</Link>
              <p className='text-center mt-2'>Not a member yet? <Link to="/register" className='text-decoration-none'>Create Account <i className="fa-solid fa-angle-right"></i></Link></p>
            </div>
          </div>
        </div>
    </>
    )
}
