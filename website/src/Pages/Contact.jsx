import axios from "axios";
import React, { useState } from "react";
import { toast } from 'react-toastify'

function Contact() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    message: "",
  });

  const onhendel = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value, });
    console.log(formvalue);
  };

  const validation = (result) => {
    result = true;

    if (formvalue.name == "" || formvalue.name == null) {
      result = false;
      toast.error("Name field is required")
        
    }
    if (formvalue.email == "" || formvalue.email == null) {
      result = false;
      toast.error("Email field is required")
       
    }
    if (formvalue.message == "" || formvalue.message == null) {
      result = false;
      toast.error("Message field is required")
       
    }
    return result;
  }


  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const ans = await axios.post("http://localhost:3000/inquiry", formvalue);
      console.log(ans);
      if (ans.status == 201) {
        setFormvalue({ ...formvalue, name: "", email: "", message: "" });
        toast.success("inquiry success")
        return false;
      }
    }

  };

  return (
    <div>
      <div>
        {/* ***** Main Banner Area Start ***** */}
        <div className="page-heading about-page-heading" id="top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content">
                  <h2>Contact Us</h2>
                  <span>Awesome, clean &amp; creative HTML5 Template</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ***** Main Banner Area End ***** */}
        {/* ***** Contact Area Starts ***** */}
        <div className="contact-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div id="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90186.37207676383!2d-80.13495239500924!3d25.9317678710111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1877e4a82d%3A0xa891714787d1fb5e!2sPier%20Park!5e1!3m2!1sen!2sth!4v1637512439384!5m2!1sen!2sth"
                    width="100%"
                    height="400px"
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                  {/* You can simply copy and paste "Embed a map" code from Google Maps for any location. */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-heading">
                  <h2>Say Hello. Don't Be Shy!</h2>
                  <span>
                    Details to details is what makes Hexashop different from the
                    other themes.
                  </span>
                </div>
                <form id="contact" method="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <fieldset> <input  name="name"  onChange={onhendel}  value={formvalue.name}  type="text"  id="name"  placeholder="Your name"  required
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <input  name="email"  onChange={onhendel}  value={formvalue.email}  type="text"  id="email"  placeholder="Your email"  required/>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea  name="message"  onChange={onhendel}  value={formvalue.message}  rows={6}  id="message"  placeholder="Your message"/>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button  type="submit"  onClick={onsubmit}  id="form-submit"  className="main-dark-button"><i className="fa fa-paper-plane" /></button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* ***** Contact Area Ends ***** */}
      </div>
    </div>
  );
}

export default Contact;
