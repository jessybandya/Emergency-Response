import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function AboutUs() {
  return (
    <div>
    <div>
    <section className="breadcrumb-wrap">
      <div className="container">
        <h2 className="cl-white mb-0">About Us</h2>
      </div>
      <div className="overlay" />
    </section>
    <section className="aboutus aboutus-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="about-img position-relative">
              <img src="images/home/pediatrician-examining-boy-s-spine-2021-04-02-20-48-30-utc.jpg" className alt="" />
              <a href="#" className="bg-lgreen cl-white rounded-circle text-center m-auto js-video-button" data-video-id={83651159} data-channel="vimeo">
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 p-lg-4">
            <div className="sc-title-one mb-3">
              <h4 className="cl-green">Welcome To Best Medical &amp; Health</h4>
              <h2 className="mb-3">Get Best &amp; Amazing Experice With Our Professional Doctors</h2>
            </div>
            <div className="about-detail">
              <p>
              We offer medical services with a team of medics trained to give urgent care. Our team of trained professionals are equipped with skills to respond to emergency and deliver ambulatory care.
              </p>
              <ul className="d-flex flex-wrap">
                <li className="w-50"><i className="fas fa-angle-double-right cl-green" /> Professional Doctors</li>
                <li className="w-50"><i className="fas fa-angle-double-right cl-green" />24/7 Online Support</li>
                <li className="w-50"><i className="fas fa-angle-double-right cl-green" />Digital Laboratory</li>
                <li className="w-50"><i className="fas fa-angle-double-right cl-green" />High Packages</li>
                <li className="w-50 border-lg-0"><i className="fas fa-angle-double-right cl-green" />Online Schedule</li>
                <li className="w-50 border-lg-0"><i className="fas fa-angle-double-right cl-green" />And More...</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section className="w-process bg-map bgc-dblue">
    <div className="container">
      <div className="sc-title-two sc-title-two-white text-center">
        <h4 className="cl-white">Why Choose Us</h4>
        <h2 className="cl-white">Complete Health Care Solutions For All</h2>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <a href="services-detail.html">
            <div className="pcs-list p-4 bg-white">
              <i className="far fa-file-alt" />
              <h4>Experience Doctors</h4>
              <p className="cl-grey"></p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="services-detail.html">
            <div className="pcs-list p-4 bg-white">
              <i className="fas fa-laptop-medical" />
              <h4>+45 Yrs Experience</h4>
              <p className="cl-grey"></p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="services-detail.html">
            <div className="pcs-list p-4 bg-white">
              <i className="fas fa-star-of-life" />
              <h4>Standards Treatments</h4>
              <p className="cl-grey"></p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="services-detail.html">
            <div className="pcs-list p-4 bg-white mb-0">
              <i className="fas fa-user-md" />
              <h4>Best Departments</h4>
              <p className="cl-grey"></p>
            </div>
          </a>
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
              <p className="m-0 cl-white">+254 791 259985</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <p className="call-to-mid cl-white">Contact us for all questions and thinks those. We will proud to you</p>
        </div>
        <div className="col-lg-4 col-md-12 text-center">
        <a href="#" className="btn btn-white">Get Consultation</a>
        </div>
      </div>
    </div>
  </section>
  </div>
    <Footer />
    </div>
  )
}

export default AboutUs