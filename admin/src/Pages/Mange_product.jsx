import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Mange_product() {

  useEffect(() => {
    fetch();
  }, [])

  const [mydata, setMydata] = useState([]);
  const fetch = async () => {
    const ans = await axios.get("http://localhost:3000/product")
    // console.log(ans)
    setMydata(ans.data)
  }

  const ondelete = async(id)=>{
    const res = await axios.delete(`http://localhost:3000/product/${id}`)
    fetch();
  }

  return (

<div>
      <div>
        <div>
          {/* /. NAV SIDE  */}
          <div id="page-wrapper">
            <div id="page-inner">
              <div classname="row">
                <div classname="col-md-12">
                  <div className="container mt-3">
                    <h2>Manage Product</h2>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Category Name</th>
                          <th>Product Name</th>
                          <th>Product Des</th>
                          <th>Product Price</th>
                          <th>Product Imge</th>
                          <th>Product created</th>
													<th>Product updated</th>
													{/* <th>Prod_created</th>
                          <th>Prod_updated</th> */}
                          <th width={"13%"}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        { mydata.map((value) => {
                          return (
                            <tr>

                              <td>{value.id}</td>
                              <td>{value.category}</td>
                              <td>{value.pro_name}</td>
                              <td>{value.des}</td>
                              <td>{value.price}</td>
                              <td><img src={value.img_url} alt="" style={{ height: "50px" }} /></td>
                              <td>{value.created}</td>
															<td>{value.updated}</td>

                              <td><button style={{ outline: "none" }} type="button" class="btn btn-primary"  >Edit</button><span> </span>
                              <span></span>
                                <button style={{ outline: "none" }} type="button" class="btn btn-danger ml-3" onClick={()=>ondelete(value.id)} >	Delete</button>
                              </td>
                            </tr>
                          );
                        })}
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
      </div>
    </div>
  );
}


export default Mange_product