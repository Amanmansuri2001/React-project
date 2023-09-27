import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

function Add_product() {

  useEffect(()=>{
    fetch();
  },[])

  const [mydata,seMydata] = useState([])

  const fetch = async ()=>{ // this fetch fun use it for category add
    const res = await axios.get("http://localhost:3000/category")
    // console.log(res.data)
    seMydata(res.data)
  }
  


  const [formvalue, setFormvalue] = useState({
    id: "",
    category: "",
    pro_name: "",
    des: "",
    price: "$",
    img_url:"",
    created: "",
		updated: "Not yet",
     

  })

  const validation = () => {
    var result = true;

    if (formvalue.category == "" || formvalue.category == null) {
      result = false;
      toast.error("Category name field is required")
       
    }
    if (formvalue.pro_name == "" || formvalue.pro_name == null) {
      result = false;
      toast.error("Product name field is required")
       
    }
    if (formvalue.des == "" || formvalue.des == null) {
      result = false;
      toast.error("Des field is required")
       
    }
    if (formvalue.price == "" || formvalue.price == null) {
      result = false;
      toast.error("Price field is required")
       
    }
    if (formvalue.img_url == "" || formvalue.img_url == null) {
      result = false;
      toast.error("Imge url field is required")
     }
   return result;    
  }


  const oncahngehendel = (e) => {
    const date = new Date().toUTCString().split("GMT")[0].slice(4, 16).trim();  
		const time = new Date().toLocaleTimeString();
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(),[e.target.name]: e.target.value,created: `${date} ${time}`,} )
    // console.log(formvalue)
  }
  
  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const ans = await axios.post("http://localhost:3000/product", formvalue);
      // console.log(ans);
      if (ans.status == 201) {
        toast.success("Add product success")
        setFormvalue({ ...formvalue,  id: "",category: "", pro_name: "",des: "", price: "$", img_url:"", created: "", updated: "Not yet", });
        }}
      };
    


  
  
return (
    <div>
      <div className="row ">
        <div className="col-md-12 col-sm-12 col-xs-12 " style={{ padding: "100px" }}>
          <div className="panel panel-info">
            <div className="panel-heading col-md-12 mt-5 " style={{ textAlign: "center" }}>
              PRODUCT
            </div>
            <div className="panel-body">
              <form role="form" method='post'>
              <div className="form-group "style={{marginTop:"50px"}} >
                <label>Product Category :</label>
                  <select class="form-select" name='category' value={formvalue.name} onChange={oncahngehendel}>
                     <option   disabled  selected >Select category</option>
                     {
                      mydata.map((value,index,intarr)=>{
                        return(
                              <option>{value.categoryname}</option>
                        )
                      })
                     }
                     
                  </select>
              </div>
               <div className="form-group">
                  <label>Product name :</label>
                  <input className="form-control" type="text" name='pro_name' value={formvalue.pro_name} onChange={oncahngehendel}/>
                </div>
                <div className="form-group">
                  <label>Product Des :</label>
                  <input className="form-control " type="text" name='des' value={formvalue.des} onChange={oncahngehendel} />
                </div>
                <div className="form-group">
                  <label>Product Price :</label>
                  <input className="form-control" type="text" name='price' value={formvalue.price} onChange={oncahngehendel} />
                </div>
                <div className="form-group">
                  <label>Product url :</label>
                  <input className="form-control" type='text' name="img_url" value={formvalue.img_url} onChange={oncahngehendel} />
                </div>

                <button type="submit" className="btn btn-info" onClick={onsubmit} >Send Message </button>
              </form>
            </div>
          </div>
        </div>
      </div></div>
      
  )
}

export default Add_product