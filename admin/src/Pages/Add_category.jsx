import React from 'react'

function Add_category() {

  
  return (
    <div>
       <div className="row ">
  <div className="col-md-12 col-sm-12 col-xs-12 " style={{padding:"100px"}}>
    <div className="panel panel-info">
      <div className="panel-heading col-md-12 mt-5 "style={{textAlign:"center"}}>
      CATEGORY
      </div>
      <div className="panel-body">
        <form role="form" method='post'>
          <div className="form-group">
            <label>Add Category</label>
            <input className="form-control" type="text"   />
            <p className="help-block">Help text here.</p>
          </div>
          <div className="form-group">
            <label>Category </label>
            <input className="form-control" type="text" />
            <p className="help-block">Help text here.</p>
          </div>
           
          <button type="submit" className="btn btn-info">Send Message </button>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Add_category