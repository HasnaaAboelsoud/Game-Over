import React, { useState } from 'react'
import img from "../../assetsImage/gaming.ebaf2ffc84f4451d.jpg"
import style from "./Register.module.css"
import { useFormik } from 'formik'
import * as Yup from "yup";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function Register() {
  const navigate= useNavigate();
  const [err,setError]=useState("");
  const [loading,setloading]=useState(false);
  const schema= Yup.object({
    name:Yup.string().required("name is required").min(3,"minimum char is 3").max(10,"maximum char is 10"),
    email:Yup.string().required("email is required").email("email invalid"),
    password: Yup.string().required("password is required").matches(/^[A-Za-z]{3,}[0-9]{2,5}$/,"Password must contain at least 3 characters and 2 numbers"),
    rePassword: Yup.string().required("repassword is required").oneOf([Yup.ref("password")],"repawword not match"),
    phone: Yup.string().required("phone is required").matches(/^(02)?(01)[0-25][0-9]{8}$/,"phone not match")
  })
  async function submitRegister(values){
    try {
      setloading(true);
      const {data}= await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values);
      if(data.message === 'success'){
        navigate("/login");
        toast("success",{className:"bg-primary text-white py-1 h6"});
        setError("");
        setloading(false);
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };
    
  const formik= useFormik({
      initialValues:{
        name:"",
        email: "",
        password: "",
        rePassword:"",
        phone: "",
      },
      onSubmit: submitRegister,
      validationSchema: schema,
  });
    return (
    <>
        <div className='container pt-5 mt-4 px-2 px-lg-4 mt-lg-4 pb-5'>
          <div className={`row g-0 pt-4 pt-lg-5 justify-content-center align-items-center`}>
            <div className={`col-lg-6 d-none d-lg-block ${style.image}`}>
              <div  style={{backgroundImage:`url(${img})`,backgroundSize:"100% 100%",backgroundPosition:"center",height:"100%"}}></div>
            </div>
            <div className={`${style.cardRegister} col-lg-6 py-4 px-3`}>
              <div className={`${style.info}`}>
                <h1 className='fs-4 text-center mb-4'>Create My Account!</h1>
                <form onSubmit={formik.handleSubmit}>
                  <input type="text" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} name="name" id="name" className={`form-control text-white p-1 mb-3 ${style.bgInput}`} placeholder='Name'></input>
                  {formik.errors.name && formik.touched.name?<p className='alert alert-warning p-1 mt-1'>{formik.errors.name}</p>:""}

                  <input type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" id="email" className={`form-control text-white p-1 mb-3 ${style.bgInput}`} placeholder='Email Address'></input>
                  {formik.errors.email && formik.touched.email?<p className='alert alert-warning p-1 mt-1'>{formik.errors.email}</p>:""}
                  {err?<p className='alert alert-warning p-1 my-0'>{err}</p>:""}

                  <input type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name="password" id="password" className={`form-control text-white p-1 mb-3 ${style.bgInput}`} placeholder='password'></input>
                  {formik.errors.password && formik.touched.password?<p className='alert alert-warning p-1 mt-1'>{formik.errors.password}</p>:""}
  
                  <input type="password" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} name="rePassword" id="rePassword" className={`form-control text-white p-1 mb-3 ${style.bgInput}`} placeholder='repassword'></input>
                  {formik.errors.rePassword && formik.touched.rePassword?<p className='alert alert-warning p-1 mt-1'>{formik.errors.rePassword}</p>:""}

                  <input type="tel" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} name="phone" id="phone" className={`form-control text-white p-1 mb-3 ${style.bgInput}`} placeholder='phone'></input>
                  {formik.errors.phone && formik.touched.phone?<p className='alert alert-warning p-1 mt-1'>{formik.errors.phone}</p>:""}

                  <button className='btn form-control text-white' type="submit" onClick={submitRegister}>{loading?<i className='fas fa-spinner fs-spin'></i>:"Create Account"}</button>
                </form>
                <p className='text-center mt-3 text-muted small px-2'>This site is protected by reCAPTCHA and the Google <a href="" className='text-muted'>Privacy Policy</a> and <a className='text-muted' href="">Term of Service </a>apply.</p>
              </div>
              <p className='text-center mt-3'>Already a member? <Link to="/" className='text-decoration-none'>Log In <i className="fa-solid fa-angle-right"></i></Link></p>
            </div>
          </div>
        </div>
    </>
    )
}
