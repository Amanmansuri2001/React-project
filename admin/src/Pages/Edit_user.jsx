import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Mange_user from './Mange_user';
import { toast } from 'react-toastify';

function Edit_user() {

  const redirect = useNavigate();
  const { id } = useParams(); // this id is url path id in var store for use

  useEffect(() => {
    fetch()
  }, [])

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/user/${id}`)
    // console.log(res)
    setFormvalue(res.data)
  }

  const [formvalue, setFormvalue] = useState({
    firstname: '',
    lastname: "",
    phone: "",
    email: '',
    password: ''
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
    // console.log(formvalue)
  }
  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.patch(`http://localhost:3000/user/${id}`, formvalue)
      // console.log(res)
      if (res.status == 200) {
        toast.success("Edit user success")
        setFormvalue({ ...formvalue, firstname: "", lastname: "", phone: "", email: "", password: "" })
        return redirect("/mange user")
      }
    }
  }

  return (
    <div>
      <div className="row ">
        <div className="col-md-12 col-sm-12 col-xs-12 " style={{ padding: "100px" }}>
          <div className="panel panel-info">
            <div className="panel-heading col-md-12 mt-5 " style={{ textAlign: "center" }}>
              CATEGORY
            </div>
            <div className="panel-body">
              <form role="form" method='post'>
                <div className="form-group">
                  <label>First name :</label>
                  <input className="form-control" type="text" name='firstname' value={formvalue.firstname} onChange={onchangehendel} />
                </div>
                <div className="form-group">
                  <label>Last Name :</label>
                  <input className="form-control" type="text" name='lastname' value={formvalue.lastname} onChange={onchangehendel} />
                </div>
                <div className="form-group">
                  <label>Mobile :</label>
                  <input className="form-control" type=" number" name='phone' value={formvalue.phone} onChange={onchangehendel} />
                </div>
                <div className="form-group">
                  <label>Email ;</label>
                  <input className="form-control" type="text" name='email' value={formvalue.email} onChange={onchangehendel} />
                </div>
                <div className="form-group">
                  <label>Password :</label>
                  <input className="form-control" type="text" name='password' value={formvalue.password} onChange={onchangehendel} />
                </div>

                <button type="submit" className="btn btn-info" onClick={onsubmit}>Send Message </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit_user