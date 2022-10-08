import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function ContactUs() {
  return (
    <div>
    <section   className="breadcrumb-wrap">
    <div className="container">
      <h2 className="cl-white mb-0">Contact Us</h2>
    </div>
    <div className="overlay" />
  </section>
  <section className="contact-us">
    <div className="container">
      <div className="sc-title-two text-center">
        <h4 className="cl-green">Let Us Help You</h4>
        <h2>Have Queries Before The Appointment?</h2>
      </div>
      <div className="row mb-7">
        <div className="col-lg-4 col-md-6">
          <div className="ct-detail-list d-flex align-items-center border border-light-c1 bg-sfgrey-2 p-4 mb-3">
            <i className="fas fa-phone-alt fs-1" />
            <div className="pl-4">
              <h3>+254 791 259985</h3>
              <p className="mb-0">Call Today</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="ct-detail-list d-flex align-items-center border border-light-c1 bg-sfgrey-2 p-4 mb-3">
            <i className="far fa-envelope fs-1" />
            <div className="pl-4">
              <h3><a href="https://htmldesigntemplates.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="650c0b030a25041c10171300010c064b060a08">test@gmail.com</a></h3>
              <p className="mb-0">Feel Free To Mail Us</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="ct-detail-list d-flex align-items-center border border-light-c1 bg-sfgrey-2 p-4 mb-3">
            <i className="fas fa-map-marker-alt fs-1" />
            <div className="pl-4">
              <h3>14 Street Brooklyn, NY</h3>
              <p className="mb-0">Find Our Location</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="map-wrap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18534.05213435798!2d-73.96033225713114!3d40.66883958891999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2snp!4v1642930373102!5m2!1sen!2snp" style={{border: 0}} allowFullScreen loading="lazy" width={600} height={450} />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 ps-lg-5">
          <form className="text-center">
            <div className="row mb-3">
              <div className="form-outline">
                <input type="text" id="form6Example1" className="form-control bg-sfgrey-2 border border-light-c" placeholder="Full Name" />
              </div>
            </div>
            <div className="form-outline mb-3">
              <input type="number" id="form6Example6" className="form-control bg-sfgrey-2 border border-light-c" placeholder="Phone Number" />
            </div>
            <div className="form-outline mb-3">
              <input type="email" id="form6Example5" className="form-control bg-sfgrey-2 border border-light-c" placeholder="Email Address" />
            </div>
            <div className="form-outline mb-2">
              <textarea className="form-control bg-sfgrey-2 border border-light-c" id="form6Example7" placeholder="Message" rows={4} defaultValue={""} />
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section className="how-it-works bgc-sfgrey-3 pb-0">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="sc-title-two sc-border-left appoint-info mb-8 w-100">
            <i className="fas fa-phone-volume bg-lgreen" />
            <h3 className="mt-2">Need An Emergecny Help</h3>
            <h2 className="cl-lgreen fs-1 mb-3">Call: +254 791 259985</h2>
          </div>
          <div className="appoint-detail">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="hotline-img pl-4 pr-4">
            <img src="images/inner/n-e1633078810928.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="call-to p-5 bg-green">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-12">
          <div className="call-contact d-flex align-items-center">
            <i className="fas fa-phone-alt display-6 cl-white" />
            <div className="pl-3">
              <h4 className="cl-white">Looking For Consultation?</h4>
              <p className="m-0 cl-white">(+6) 23 555 0892</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <p className="call-to-mid cl-white">Contact us for all questions and thinks those. We will proud to you</p>
        </div>
        <div className="col-lg-4 col-md-12 text-center">
          <a href="contact.html" className="btn btn-white">Get Consultation</a>
        </div>
      </div>
    </div>
  </section>
    <Footer />
    </div>
  )
}

export default ContactUs