 import React, { useEffect, useState } from 'react'

function Men() {
  
  // useEffect(()=>{
  //   fetch();
  // },[])

  // const [mydata,setMydata]= useState([])
  // const fetch=async()=>{
  // const res= await axios.get(`http://localhost:3000/product/?category=${"Mens"}`)
  // setMydata(res.data)
  // console.log(res.data)
  // }
  
  return (


    <>
       {/* ***** Products Area Starts ***** */}
<section className="section" id="products">

<div className="container mt-5">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-heading">
          <h2>Men's Latest</h2>
          <span>Details to details is what makes Hexashop different from the other themes.</span>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="item">
          <div className="thumb">
            <div className="hover-content">
              <ul>
                <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
            <img src="assets/images/men-01.jpg" alt />
          </div>
          <div className="down-content">
            <h4>Classic Spring</h4>
            <span>$120.00</span>
            <ul className="stars">
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="item">
          <div className="thumb">
            <div className="hover-content">
              <ul>
                <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
            <img src="assets/images/men-02.jpg" alt />
          </div>
          <div className="down-content">
            <h4>Air Force 1 X</h4>
            <span>$90.00</span>
            <ul className="stars">
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="item">
          <div className="thumb">
            <div className="hover-content">
              <ul>
                <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
            <img src="assets/images/men-03.jpg" alt />
          </div>
          <div className="down-content">
            <h4>Love Nana ‘20</h4>
            <span>$150.00</span>
            <ul className="stars">
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="item">
          <div className="thumb">
            <div className="hover-content">
              <ul>
                <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
            <img src="assets/images/women-01.jpg" alt />
          </div>
          <div className="down-content">
            <h4>New Green Jacket</h4>
            <span>$75.00</span>
            <ul className="stars">
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="item">
          <div className="thumb">
            <div className="hover-content">
              <ul>
                <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
            <img src="assets/images/women-02.jpg" alt />
          </div>
          <div className="down-content">
            <h4>Classic Dress</h4>
            <span>$45.00</span>
            <ul className="stars">
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="item">
          <div className="thumb">
            <div className="hover-content">
              <ul>
                <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
            <img src="assets/images/women-03.jpg" alt />
          </div>
          <div className="down-content">
            <h4>Spring Collection</h4>
            <span>$130.00</span>
            <ul className="stars">
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="item">
          <div className="thumb">
            <div className="hover-content">
              <ul>
                <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
            <img src="assets/images/kid-01.jpg" alt />
          </div>
          <div className="down-content">
            <h4>School Collection</h4>
            <span>$80.00</span>
            <ul className="stars">
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="item">
          <div className="thumb">
            <div className="hover-content">
              <ul>
                <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
            <img src="assets/images/kid-02.jpg" alt />
          </div>
          <div className="down-content">
            <h4>Summer Cap</h4>
            <span>$12.00</span>
            <ul className="stars">
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="item">
          <div className="thumb">
            <div className="hover-content">
              <ul>
                <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
            <img src="assets/images/kid-03.jpg" alt />
          </div>
          <div className="down-content">
            <h4>Classic Kid</h4>
            <span>$30.00</span>
            <ul className="stars">
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="pagination">
          <ul>
            <li>
              <a href="#">1</a>
            </li>
            <li className="active">
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">&gt;</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ***** Products Area Ends ***** */}

  </>
 



  )
}

export default Men