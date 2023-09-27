import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios";
import { toast } from 'react-toastify'

function Sign_up() {

  const redirect = useNavigate();

  const [formvalue, setFormvalue] = useState({
    id: "",
    firstname: "",
    lastname:"",
    phone: "",
    email: "",
    password: "",
  });

  const onchange = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value, });
    console.log(formvalue);
  };

  const validation = () => {
    var result = true;

    if (formvalue.firstname == "" || formvalue.firstname == null) {
      result = false;
      toast.error("First name is required")
       
    }
    if (formvalue.lastname == "" || formvalue.lastname == null) {
      result = false;
      toast.error("Last name is required")
       
    }
    if (formvalue.phone == "" || formvalue.phone == null) {
      result = false;
      toast.error("Phone field is required")
       
    }
    if (formvalue.email == "" || formvalue.email == null) {
      result = false;
      toast.error("Email field is required")
       
    }
    if (formvalue.password == "" || formvalue.password == null) {
      result = false;
      toast.error("password field is required")
       
    }
    return result;
  }


  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const ans = await axios.post("http://localhost:3000/user", formvalue);
      // console.log(ans);
      if (ans.status == 201) {
        toast.success("sig-up success")
        setFormvalue({ ...formvalue, name: "", email: "", password: "" });
        return redirect("/login")
      }
    }

  };
 

  return (
    <div  className=' ' >
        <div className='container bg-white'  >
        <div className="container-fluid  "  >
          <div className="container  ">
            <div className="row justify-content-center  ">
              <div className="col-lg-6 mt-5">
                <h1 className="section-title position-relative text-center mb-3"> Sign Up </h1>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="contact-form bg-light rounded p-5">
                  <div id="success" />
                  <form name="sentMessage" id="contactForm" noValidate="novalidate" >
                    <div className="form-row">

                      <div className="col-sm-12 control-group">
                        <input type="text" className="form-control p-4 " value={formvalue.firstname}  name="firstname" onChange={onchange} id="name" placeholder="Your First Name" required="required" data-validation-required-message="Please enter first your firstname" />
                        <p className="help-block text-danger" />
                      </div>

                      <div className="col-sm-12 control-group">
                        <input type="text" className="form-control p-4  mt-3" value={formvalue.lastname}  name="lastname" onChange={onchange} id="name" placeholder="Your Last Name" required="required" data-validation-required-message="Please enter first your lastname" />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="col-sm-12 control-group">
                        <input type="number" className="form-control p-4 mt-3" value={formvalue.phone} name="phone" onChange={onchange} id="number" placeholder="Your Mobile" required="required" data-validation-required-message="Please enter your email" />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="col-sm-12 control-group">
                        <input type="email" className="form-control p-4 mt-3" value={formvalue.email} name="email" onChange={onchange} id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="col-sm-12 control-group">
                        <input type="password" className="form-control p-4 mt-3" value={formvalue.password} name="password" onChange={onchange} id="password" placeholder="Your Password" required="required" data-validation-required-message="Please enter your Password" />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className='text-center'>
                      <button className="btn btn-dark  mt-1" onClick={onsubmit} type="submit" id="sendMessageButton"> Sign Up </button>
                      <p className='  mt-2'>Already have an Account ? <NavLink to="/login">Log In</NavLink></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Sign_up

