import axios from 'axios';
import React, { useState } from 'react' 
import { NavLink, useNavigate, } from "react-router-dom";
import { toast } from 'react-toastify'
 

function Login() {

  const redirect = useNavigate()

  const [formvalue,setFormvalue]= useState({
    id:"",
    email: "",
    password:"",
  })

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


  const onchangehandel= (e)=>{
      setFormvalue({...formvalue,[e.target.name]: e.target.value})
      console.log(formvalue)
  }
 
  const onsubmit=async(e)=>{
    e.preventDefault();

    if(validation())
    {
    const res = await axios.get(`  http://localhost:3000/admin?email=${formvalue.email}`,formvalue )
    // console.log(res)
    
    if(res.data.length > 0)
    {
      if(res.data[0].password == formvalue.password)
      {
        localStorage.setItem("user name",res.data[0].name)
        localStorage.setItem("user id",res.data[0].id)
        toast.success("Login success")
        setFormvalue({...formvalue,email:"",password:""})
        return redirect("/dashbord")
      }
      else
      {
        toast.error("Password not found")
         
      }
    }
    else{
      toast.error("Email not found")
       
    }

  }
}





  return (
     <>

<div className="navbar navbar-inverse set-radius-zero">
        <div className="container " >
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="index.html">
              <img src="assets/img/logo.png" />
            </a>
          </div>
          <div className="right-div">
            <NavLink to="/Logout" className="btn btn-danger pull-right">
              LOG OUT
            </NavLink>
          </div>
        </div>
      </div>
    
  <div className="container"style={{padding:"100px"}}>
  <div className="">
  <div className="col-md-12 col-sm-12 col-xs-12 ">
    <div className="panel panel-info">
      <div className="panel-heading col-md-12 "style={{textAlign:"center"}}>
      LOGIN
      </div>
      <div className="panel-body">
        <form role="form" method='post'>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="email" name="email"onChange={onchangehandel} value={formvalue.email} />
            <p className="help-block">Help text here.</p>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" name="password" onChange={onchangehandel} value={formvalue.password} />
            <p className="help-block">Help text here.</p>
          </div>
            <div className="text-center">
           <NavLink to="/"> <button type="submit" onClick={onsubmit} className="btn btn-info ">Login </button></NavLink> 
            </div>
            
          </form>
      </div>
    </div>
  </div>
</div>
  </div>
   
   



     </>
  )
}

export default Login