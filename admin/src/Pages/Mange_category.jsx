import axios from "axios";
import { useEffect, useState } from "react";




function Mange_category() {


  useEffect(() => {
    fetch();
  }, [])


  const [mydata, setMydata] = useState([]);
  const fetch = async () => {
    const ans = await axios.get("http://localhost:3000/category")
    // console.log(ans)
    setMydata(ans.data)
  }

  const ondelete = async (id) => {
    const ans = await axios.delete(`http://localhost:3000/category/${id}`)
    fetch();

  }



  return (
    <div>
      <div className="row">
        <div className="col-md-12" style={{ padding: "50px" }}>
          <div className="panel panel-default">
            <div className="panel-heading">Hover Rows</div>
            
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th > id</th>
                      <th >Category Name</th>
                      <th >Action</th>

                    </tr>
                  </thead>
                  <tbody>
                      {
                        mydata.map((value) => {
                          return (
                            <tr>
                              <td>{value.id}</td>
                              <td>{value. categoryname}</td>
                              <td>
                                <button style={{ outline: "none" }} type="button" class="btn btn-primary" o >Edit</button><span> </span>
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
        </div>
      </div>
    
    
  );
}

export default Mange_category;
