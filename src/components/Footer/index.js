import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div>
    <footer className="footer bg-ftblue">
      <div className="footer-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="f-maincontent bg-white border-start bw-3 bc-green">
                <img src="/images/logo.png" alt="" />
                <p className="mt-3 mb-3">
                  I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper matti pibus leo.
                </p>
                <ul className="social-links-a square-link">
                  <li>
                    <a href="#"><TwitterIcon className="fab fa-twitter" /></a>
                  </li>
                  <li>
                    <a href="#"><FacebookIcon className="fab fa-facebook-f" /></a>
                  </li>
                  <li>
                    <a href="#"><EmailIcon className="fab fa-youtube" /></a>
                  </li>
                  <li>
                    <a href="#"><LinkedInIcon className="fab fa-pinterest-p" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 ps-lg-4">
              <div className="ft-lists">
                <h3 className="cl-white">Useful Links</h3>
                <ul className="d-flex flex-column">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Our Patients</a></li>
                  <li><a href="#">Doctors</a></li>
                  <li><a href="#">Appointments</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="ft-lists">
                <h3 className="cl-white">Our Services</h3>
                <ul className="d-flex flex-column">
                  <li><a href="#">Cardiology</a></li>
                  <li><a href="#">Diagnosis</a></li>
                  <li><a href="#">Cardiology</a></li>
                  <li><a href="#">Massage Therapy</a></li>
                  <li><a href="#">Dental Care</a></li>
                  <li><a href="#">Blood Test</a></li>
                  <li><a href="#">Operation Theater</a></li>
                  <li><a href="#">Pharmacy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ft-lists">
                <h3 className="cl-white">Weekly Newslatter</h3>
                <p className="cl-white">
                  I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, conse iscing elit. Ut elit telctus nec ullamcorper matti
                </p>
                <form>
                  <div className="form-group">
                    <input type="email" className="form-control mt-3 p-3" id="exampleFormControlInput1" placeholder="Your Email" />
                    <button className="btn w-100 mt-1">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-main p-3 bg-footer-blue">
        <div className="container">
          <div className="copyright-text d-flex justify-content-between">
            <p className="cl-white m-0">© 2022 Ayurvedic. All rights reserved</p>
            <p className="cl-white">Made by Edwin</p>
          </div>
        </div>
      </div>
    </footer>
    <form action="#" className="ct-searchForm">
      <div className="inner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-8">
              <div className="form-group">
                <input id="cf-search-form" type="text" placeholder="Search ..." required className="form-control" />
                <button type="submit" className="ct-search-btn"><i className="fa fa-search" /></button>
              </div>
              <div className="form-group">
                <a href="#" className="ct-searchForm-close">
                  <i className="fas fa-times" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

      <ArrowUpwardIcon style={{color: '#20c997', cursor:'pointer'}} id="back-to-top"/>

  </div>
  )
}

export default Footer