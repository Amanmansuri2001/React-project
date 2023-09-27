import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
 

function Login() {

  const redirect = useNavigate()

  const[formvalue,setFormvalue]= useState({
    id:"",
    email:"",
    password:"",
  })

  const onhendel = (e)=>{
    setFormvalue({...formvalue,[e.target.name]:e.target.value})
    // console.log(formvalue)
  }

  const validation=(result)=>{
    result=true;
    if(formvalue.email==""|| formvalue.email==null)
    {
      result=false;
      toast.error('Email field is requied')
      
    }
    if(formvalue.password==""|| formvalue.password==null)
    {
      result=false;
      toast.error('Password field is requied')
      
    }
    return result;
  }


  const onsubmit=async(e)=>{
    e.preventDefault();

    if(validation()){
    const res = await axios.get(`  http://localhost:3000/user?email=${formvalue.email}`,formvalue )
    console.log(res)
    
    if(res.data.length > 0)
    {
      if(res.data[0].password == formvalue.password)
      {
        localStorage.setItem("user name",res.data[0].firstname)
        localStorage.setItem("user surname",res.data[0].lastname)
        localStorage.setItem("user id",res.data[0].id)
        toast.success("Login success")
        setFormvalue({...formvalue,email:"",password:""})
        return redirect("/")
      }
      else{
        toast.error("Password not found")
        return false;
      }
    }
    else{
      toast.error("Email not found")
      return false;
    }

  }
}


  

  return (
    <div>
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 mt-5">
            <h1 className="section-title position-relative text-center mb-4"> Log In </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="contact-form bg-light rounded p-5">
              <div id="success" />
              <form name="sentMessage" id="contactForm" noValidate="novalidate" >
                <div className="form-row">
                  <div className="col-sm-12  control-group">
                    <input type="email" className="form-control p-4 mt-3" value={formvalue.email} name="email" onChange={onhendel} id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="col-sm-12  control-group">
                    <input type="password" className="form-control p-4 mt-3" value={formvalue.password} name="password" onChange={onhendel} id="email" placeholder="Your Password" required="required" data-validation-required-message="Please enter your email" />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className='text-center'>
                      <button className="btn btn-dark  mt-1 " onClick={onsubmit} type="submit" id="sendMessageButton">Login</button>
                      <p className='  mt-2'>Create an Account? <NavLink to="/signup">Sign Up</NavLink></p>
                    </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Login