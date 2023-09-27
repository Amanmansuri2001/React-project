import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
 
import axios from "axios";

function Edit_user() {
   
    const redirect= useNavigate()

   useEffect(() => {
   fetch();
    }, [])

   const [mydata, setMydata] = useState({})

   const fetch = async () => {
      const id = localStorage.getItem('user id'); // the localStorege give your if for use
      // console.log(id) // chek id in localStorage and console are same..?
      const res = await axios.get(`http://localhost:3000/user/${id}`)
      // console.log(res.data) // chek your id in same the obj
      setMydata(res.data) // localStorage id show your data in obj
      setFormvalue(res.data) // your obj value/data
      }
 
 const [formvalue, setFormvalue] = useState({

      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      password: "",
   })

  
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

 const onchangehendel = (e) => {
      setFormvalue({ ...formvalue, [e.target.name]: e.target.value })
      // console.log(formvalue) // write and chek
   }

   const onsubmit= async(e)=>{
      e.preventDefault();
      if(validation())
      {
      const res= await axios.patch(`http://localhost:3000/user/${mydata.id}`,formvalue)
      // console.log(res) // chek your obj
      if(res.status==200)
      {  localStorage.setItem('user name',formvalue.firstname)
         localStorage.setItem('user surname',formvalue.lastname)
         toast.success('Edit user success')
         setFormvalue({...formvalue, firstname: "",lastname: "",phone: "",email: "",password: "",})
         fetch();
         return redirect('/user')
      }
      }
   }  
  return (

      <div>

         <div className="modal" id="myModal">
            <div className="modal-dialog modal-dialog modal-xl">
               <div className="modal-content">
                  {/* Modal Header */}
                  <div className="modal-header">
                     <h4 className="modal-title" >Edit Profile</h4>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" />
                  </div>
                  {/* Modal body */}
                  <div className="modal-body">
                     <form action="/action_page.php">
                        <div className="mb-3 mt-3">
                           <label htmlFor="name"> First Name :</label>
                           <input type="text" className="form-control" name="firstname" value={formvalue.firstname} onChange={onchangehendel} />
                        </div>
                        <div className="mb-3 mt-3">
                           <label htmlFor="name"> Last Name :</label>
                           <input type="text" className="form-control" name="lastname" value={formvalue.lastname} onChange={onchangehendel} />
                        </div>
                        <div className="mb-3 mt-3">
                           <label htmlFor="mobile">Phone :</label>
                           <input type="number" className="form-control" name="phone" value={formvalue.phone} onChange={onchangehendel} />
                        </div>

                        <div className="mb-3 mt-3">
                           <label htmlFor="email">Email :</label>
                           <input type="email" className="form-control" name="email" value={formvalue.email} onChange={onchangehendel} />
                        </div>

                        <div className="mb-3">
                           <label htmlFor="pwd">Password :</label>
                           <input type="password" className="form-control" name="password" value={formvalue.password} onChange={onchangehendel} />
                        </div>
                        <button type="button" className="btn btn-dark mb-4" data-bs-dismiss="modal" onClick={onsubmit}>Save</button>

                     </form>
                  </div>

               </div>
            </div>
         </div>


         <div className="container py-5 mt-5">
            <h1 className='text-center mt-5'>User Profile</h1>

            <div className="row mt-5">
               <div className="col-lg-4">
                  <div className="card mb-4 py-3">
                     <div className="card-body text-center" style={{ marginTop: '61px', marginBottom: "61px" }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="avatar" className="rounded-circle img-fluid" style={{ width: 150 }} />
                        <h3 className="mt-2">{mydata.firstname} {mydata.lastname}</h3>
                        <p className=''>{mydata.email}</p>
                        <div className="d-flex justify-content-center mb-1 mt-3">
                           <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#myModal"  >Edit Profile</button>
                        </div>
                     </div>
                  </div>

               </div>
               <div className="col-lg-8">
                  <div className="card mb-4 py-4 pl-3">
                     <div className="card-body">
                        <div className="row d-flex align-items-center">
                           <div className="col-sm-3 py-1">
                              <h6 className="mb-1">ID</h6>
                           </div>
                           <div className="col-sm-9">
                              <h5 className="text-muted mb-0">{mydata.id}</h5>
                           </div>
                        </div>
                        <hr />
                        <div className="row">
                           <div className="col-sm-3 py-1">
                              <h6 className="mb-1">First Name</h6>
                           </div>
                           <div className="col-sm-9">
                              <h5 className="text-muted mb-0">{mydata.firstname}</h5>
                           </div>
                        </div>
                        <hr />
                        <div className="row">
                           <div className="col-sm-3 py-1">
                              <h6 className="mb-1">Last Name</h6>
                           </div>
                           <div className="col-sm-9">
                              <h5 className="text-muted mb-0">{mydata.lastname}</h5>
                           </div>
                        </div>
                        <hr />
                        <div className="row">
                           <div className="col-sm-3 py-1">
                              <h6 className="mb-1">Phone</h6>
                           </div>
                           <div className="col-sm-9">
                              <h5 className="text-muted mb-0">{mydata.phone}</h5>
                           </div>
                        </div>
                        <hr />
                        <div className="row">
                           <div className="col-sm-3 py-1">
                              <h6 className="mb-1">Email</h6>
                           </div>
                           <div className="col-sm-9">
                              <h5 className="text-muted mb-0">{mydata.email}</h5>
                           </div>
                        </div>
                        <hr />
                        <div className="row">
                           <div className="col-sm-3 py-1">
                              <h6 className="mb-1">Password</h6>
                           </div>
                           <div className="col-sm-9">
                              <h5 className="text-muted mb-0">{mydata.password}</h5>
                           </div>
                        </div>
                        <hr />

                     </div>
                  </div>

               </div>
            </div>
         </div>


      </div>

   )
}

export default Edit_user