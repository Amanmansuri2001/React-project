import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Header() {
  const redirect = useNavigate();

  const logout = () => {

    localStorage.removeItem('user name')
    localStorage.removeItem('user surname')
    toast.success("Log-out success")
    return redirect("/")
  }

  return (
    <div>
      <div>
        <header className="header-area header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  {/* ***** Logo Start ***** */}
                  <a href="index.html" className="logo">
                    <img src="assets/images/logo.png" />
                  </a>
                  {/* ***** Logo End ***** */}
                  {/* ***** Menu Start ***** */}
                  <ul className="nav">
                    <li className="scroll-to-section"><NavLink to="/ ">Home</NavLink></li>
                    <li className="scroll-to-section"><NavLink to="/men">Men's</NavLink></li>
                    <li className="scroll-to-section"><NavLink to="/women">Women's</NavLink></li>
                    <li className="scroll-to-section"><NavLink to="/kid">Kid's</NavLink></li>
                    <li className="scroll-to-section"><NavLink to="/contact">Contact Us</NavLink></li>
                    {
                      localStorage.getItem('user name') ?
                        <li className="submenu " >
                          <NavLink to="/user">
                            <i class="fa fa-user" style={{ fontSize: "20px" }}></i> Hi, {localStorage.getItem('user name')} {localStorage.getItem('user surname')}  </NavLink>

                          <ul style={{ left: "15px" }} >
                            <li style={{ cursor: "pointer" }} ><NavLink to="/user">Profile</NavLink></li>
                            <li style={{ cursor: "pointer" }} onClick={logout}><NavLink>Log out</NavLink></li>
                          </ul>
                        </li> :
                        <li className="submenu" >
                          <a href="javascript:;"><i class="fa fa-user" style={{ fontSize: "20px" }}></i></a>
                          <ul style={{ left: "-5px" }}>
                            <li className=" "><NavLink to="/login">Login </NavLink></li>
                            <li className=" "><NavLink to="/signup">Sign up </NavLink></li>


                          </ul>
                        </li>
                    }
                  </ul>




                  <a className="menu-trigger">
                    <span>Menu</span>
                  </a>
                  {/* ***** Menu End ***** */}
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* ***** Header Area End ***** */}
      </div>

    </div>
  )
}

export default Header