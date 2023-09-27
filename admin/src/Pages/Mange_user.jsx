import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Mange_user() {
 
  const redirect = useNavigate();
  

  useEffect (() => {
    fetch();
   },[])
  

  const [mydata,setMydata] = useState([]);
  const fetch= async()=>{
    const ans= await axios.get("http://localhost:3000/user")
    // console.log(ans)
    setMydata(ans.data)
  }

  const ondelete=async(id)=>{
    const ans= await axios.delete(`http://localhost:3000/user/${id}`)
    fetch();

  }
  return (
    <div>
      {/* /. NAV SIDE  */}
      <div id="page-wrapper">
          <div id="page-inner">
            <div classname="row">
              <div classname="col-md-12">
                <div className="container mt-3">
                  <h2>Manage User</h2>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th >User id</th>
                        <th >First name</th>
                        <th >Last name</th>
                        <th >User email</th>
                        <th >User password</th>
                        <th >Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      {
                        mydata.map((value) => {
                          return (
                            <tr>
                              <td>{value.id}</td>
                              <td>{value.firstname}</td>
                              <td>{value.lastname}</td>
                              <td>{value.email}</td>
                              <td>{value.password}</td>
                              <td>
                                <button style={{ outline: "none" }} type="button" class="btn btn-primary" onClick={()=>redirect(`/edit_user/${value.id}`)}>Edit</button><span> </span>
                                <button type="button" class="btn btn-danger ml-3" onClick={() => ondelete(value.id)} >Delete</button>
                              </td>
                            </tr>
                          );
                        })
                      }


                    </tbody>
                  </table>
                </div>
              </div>
            </div>


            {/* /. ROW  */}
            <hr />
            {/* /. ROW  */}
          </div>
          {/* /. PAGE INNER  */}
        </div>
      </div>
  
  )
}

export default Mange_user