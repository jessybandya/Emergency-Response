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
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h5>
            </div>
            <div className="about-detail">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris.
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
        <div className="w-process mt-5">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <a href="services-detail.html">
                <div className="pcs-list p-4 border border-light-c bg-white">
                  <i className="far fa-file-alt" />
                  <h4>Experience Doctors</h4>
                  <p className="cl-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="services-detail.html">
                <div className="pcs-list p-4 border border-light-c bg-white">
                  <i className="fas fa-laptop-medical" />
                  <h4>+45 Yrs Experience</h4>
                  <p className="cl-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="services-detail.html">
                <div className="pcs-list p-4 border border-light-c bg-white">
                  <i className="fas fa-star-of-life" />
                  <h4>Standards Treatments</h4>
                  <p className="cl-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="services-detail.html">
                <div className="pcs-list p-4 border border-light-c bg-white mb-0">
                  <i className="fas fa-user-md" />
                  <h4>Best Departments</h4>
                  <p className="cl-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="case-table pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 pr-lg-0">
            <div className="case-t-wrap bg-dblue">
              <i className="fas fa-phone-alt fs-1 cl-white" />
              <h3 className="cl-white mt-2">Emergency Cases</h3>
              <p className="cl-white mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvina</p>
              <a href="contact.html" className="btn btn-white btn-na case-c1"><i className="fas fa-phone-alt" /> 334 652 7885423</a>
            </div>
          </div>
          <div className="col-lg-4 p-lg-0">
            <div className="case-t-wrap bg-ftblue0">
              <i className="far fa-calendar-alt fs-1 cl-white" />
              <h3 className="cl-white mt-2">Doctor Timetable</h3>
              <p className="cl-white mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvina</p>
              <a href="appointment.html" className="btn btn-white btn-na case-c2"><i className="fas fa-phone-alt" /> Discover Table</a>
            </div>
          </div>
          <div className="col-lg-4 pl-lg-0">
            <div className="case-t-wrap bg-lblue1">
              <i className="far fa-file-alt fs-1 cl-white" />
              <h3 className="cl-white mt-2">Request Appoinment</h3>
              <p className="cl-white mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvina</p>
              <a href="contact.html" className="btn btn-white-lb btn-na case-c3"><i className="fas fa-phone-alt" /> Make Appointment</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="service-ss bg-sfgrey-3">
      <div className="container">
        <div className="sc-title-two text-center">
          <h4 className="cl-green">Our Services</h4>
          <h2>We Provide you one of the best Services</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-3">
            <a href="services-detail.html">
              <div className="service-aa p-4 d-flex align-items-center bg-white">
                <i className="fas fa-user-md cl-green" />
                <div className="sv-detail pl-4">
                  <h4>Professional Doctor</h4>
                  <p className="cl-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <a href="services-detail.html">
              <div className="service-aa p-4 d-flex align-items-center bg-white">
                <i className="fas fa-capsules cl-green" />
                <div className="sv-detail pl-4">
                  <h4>Pharmacy</h4>
                  <p className="cl-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <a href="services-detail.html">
              <div className="service-aa p-4 d-flex align-items-center bg-white">
                <i className="fas fa-hospital-alt cl-green" />
                <div className="sv-detail pl-4">
                  <h4>Operation Theater</h4>
                  <p className="cl-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="services-detail.html">
              <div className="service-aa p-4 d-flex align-items-center bg-white">
                <i className="fas fa-vials cl-green" />
                <div className="sv-detail pl-4">
                  <h4>Blood Test</h4>
                  <p className="cl-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="services-detail.html">
              <div className="service-aa p-4 d-flex align-items-center bg-white">
                <i className="fas fa-star-of-life cl-green" />
                <div className="sv-detail pl-4">
                  <h4>Cancer Service</h4>
                  <p className="cl-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="services-detail.html">
              <div className="service-aa p-4 d-flex align-items-center bg-white mb-0">
                <i className="fas fa-medkit cl-green" />
                <div className="sv-detail pl-4">
                  <h4>Outdoor Checkup</h4>
                  <p className="cl-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="short-info cl-blue pt-1 mt-3 border-none text-center">
          <p>If you have difficulty understanding our work process. <a href="#">Please contact us for better information.</a></p>
        </div>
      </div>
    </section>
    <section className="service">
      <div className="container">
        <div className="sc-title-two text-center">
          <h4 className="cl-green">Best Practice Care!</h4>
          <h2>We Offer Different Services To Improve Your Health</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <a href="services-detail.html">
              <div className="service-list bg-white bx-shadow mb-3">
                <div className="sv-icon mb-3">
                  <i className="fas fa-syringe" />
                </div>
                <div className="sv-title">
                  <h3>Dental Surgery</h3>
                </div>
                <p className="cl-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </a>
            <a href="services-detail.html">
              <div className="service-list bg-white bx-shadow">
                <div className="sv-icon mb-3">
                  <i className="fas fa-brain" />
                </div>
                <div className="sv-title">
                  <h3>Neurology</h3>
                </div>
                <p className="cl-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="services-detail.html">
              <div className="service-list bg-white bx-shadow mb-3">
                <div className="sv-icon mb-3">
                  <i className="fas fa-heartbeat" />
                </div>
                <div className="sv-title">
                  <h3>Cardiology</h3>
                </div>
                <p className="cl-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </a>
            <a href="services-detail.html">
              <div className="service-list bg-white bx-shadow">
                <div className="sv-icon mb-3">
                  <i className="fas fa-star-of-life" />
                </div>
                <div className="sv-title">
                  <h3>General Surgery</h3>
                </div>
                <p className="cl-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-12">
            <a href="services-detail.html">
              <div className="service-list bg-white bx-shadow mb-3">
                <div className="sv-icon mb-3">
                  <i className="fas fa-pills" />
                </div>
                <div className="sv-title">
                  <h3>Dermatology</h3>
                </div>
                <p className="cl-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </a>
            <a href="services-detail.html">
              <div className="service-list bg-white bx-shadow mb-0">
                <div className="sv-icon mb-3">
                  <i className="fas fa-vial" />
                </div>
                <div className="sv-title">
                  <h3>Labrotory Test</h3>
                </div>
                <p className="cl-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </a>
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