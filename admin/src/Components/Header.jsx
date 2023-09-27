import React from "react";
import { NavLink, Link } from "react-router-dom";
import { toast } from 'react-toastify'

// localStorage.getItem('user') ? code1 : code2


function Header() {
  const logout = () => {

    localStorage.removeItem('user name')
    localStorage.removeItem('user id')
    toast.success("Logout success")
    
  }

  return (
    <>
      <div className="navbar navbar-inverse set-radius-zero">
        <div className="container">
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
          {
            localStorage.getItem('user name') ? 
            <div className="right-div">
            <i href="" style={{color:"black"}}>
            <i class="fa fa-user"  ></i> Hi, {localStorage.getItem('user name')}  </i>
            </div>:
            <p></p>
           }
           <div className="right-div">
            <NavLink to="/" className="btn btn-danger pull-right" onClick={logout}>
              LOG OUT
            </NavLink>
          </div>
        </div>
      </div>
       


      <section className="menu-section">
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <div className="navbar-collapse collapse ">
                <ul id="menu-top" className="nav navbar-nav navbar-right">
                  <li>
                    <NavLink to="/dashbord">DASHBOARD</NavLink>
                  </li>

                  <li role="presentation">
                    <NavLink role="menuitem" to="/add category">
                      Add category
                    </NavLink>
                  </li>
                  <li role="presentation">
                    <NavLink role="menuitem" to="/manage category">
                      Manage category
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/add product">Add product</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mange_product">Manage product</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mange user">Manage user</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
    
    

  );
}

export default Header;
