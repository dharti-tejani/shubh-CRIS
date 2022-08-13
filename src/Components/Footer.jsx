import React from 'react';
import { Container } from 'react-bootstrap';
import footer_logo from '../assets/images/footer_logo.svg';

const Footer = () => {
  return (
    <>
      <footer className='footer_sec'>
        <Container>
          <div className='footer_row'>
            <div className='footer_col'>
              <div className='footer_text'>
                <span>Our Buisness</span>
                <ul>
                  <li><a href="#0">Ticketing & Passengers</a></li>
                  <li><a href="#0">Freight Sevices</a></li>
                  <li><a href="#0">Operations</a></li>
                  <li><a href="#0">Asset Managment</a></li>
                  <li><a href="#0">Human Resource & Accounting</a></li>
                  <li><a href="#0">Procurement & Automation</a></li>
                </ul>
              </div>
            </div>
            <div className='footer_col'>
              <div className='footer_text'>
                <span>API Catalouge</span>
                <ul>
                  <li><a href="#0">Indian Railways E-procurment System (IREPS)s</a></li>
                  <li><a href="#0">Freight Operations Information System (FOIS)</a></li>
                  <li><a href="#0">National Train Enquiry Systems (NTES)</a></li>
                  <li><a href="#0">Passenger reservation System (PRS)</a></li>
                </ul>
              </div>
            </div>
            <div className='footer_col'>
              <div className='footer_text'>
                <span>Documents</span>
                <ul>
                  <li><a href="#0">Document on online and offline Registration process</a></li>
                  <li><a href="#0">API usages Pricing Policy</a></li>
                  <li><a href="#0">API consuming Process</a></li>
                  <li><a href="#0">Client development Guide using </a></li>
                  <li><a href="#0">Any other documents</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='View_all'>
            <a href="#0">View All</a>
          </div>
          <div className='footer_logo_main'>
            <a href="#0"><img src={footer_logo} alt="footer_logo" /></a>
            <ul>
              <li><a href="#0">Terms of Services</a></li>
              <li><a href="#0">FAQ</a></li>
              <li><a href="#0">Privacy Policy</a></li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default Footer;