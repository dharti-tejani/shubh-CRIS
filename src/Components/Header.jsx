import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.svg';
import ReactLanguageSelect from "react-languages-select";
import "react-languages-select/css/react-languages-select.css";
import about_hover_icon_1 from '../assets/images/about_hover_icon_1.png';
import about_hover_icon_2 from '../assets/images/about_hover_icon_2.png';
import about_hover_icon_3 from '../assets/images/about_hover_icon_3.png';
import API_hover_icon_1 from '../assets/images/API_hover_icon_1.png';
import API_hover_icon_2 from '../assets/images/API_hover_icon_2.png';
import API_hover_icon_3 from '../assets/images/API_hover_icon_3.png';
import API_hover_icon_4 from '../assets/images/API_hover_icon_4.png';
import API_hover_crad from '../assets/images/API_hover_crad.png';
import Free_Download_icon from '../assets/images/Free_Download_icon.png';
import Documents_icon_1 from '../assets/images/Documents_icon_1.png';
import Documents_icon_2 from '../assets/images/Documents_icon_2.png';
import Documents_icon_3 from '../assets/images/Documents_icon_3.png';
import Documents_icon_4 from '../assets/images/Documents_icon_4.png';
import Documents_icon_5 from '../assets/images/Documents_icon_5.png';


const Header = () => {

    const [toggleClass, settoggleClass] = useState(false);
    const toggle = () => {
        settoggleClass(!toggleClass);
        document.documentElement.classList.toggle("cm_overflow");
    };

    let targetx = document.querySelectorAll(".nav-btn");
    targetx.forEach((item) => {
        item.addEventListener("click", function () {
            settoggleClass(false);
            document.documentElement.classList.remove("cm_overflow");

        });
    })

    return (
        <>
            <div className={`in_header_wrapper ${toggleClass === true ? "open_menu" : ""}`}>
                <header className="sticky">
                    <div className='header_wrapper_main'>
                        <Container>
                            <div className="in_header_block">
                                <div className="logo_hold">
                                    <a href="">
                                        <img src={logo} alt="logo" className="img-fluid" />
                                    </a>
                                </div>
                                <div className="menu_block">
                                    <div className="menu_list">
                                        <ul className="navbar_nav">
                                            <li className="nav-btn" data-row-id="banner_wrapper">
                                                <NavLink to="/" className="scroll_trigger">
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li className="nav-btn About_wrap">
                                                <NavLink to="/About_us">
                                                    About Us
                                                </NavLink>
                                                <div className='About_hover_main'>
                                                    <a href='https://www.swayamprabha.gov.in/' target="/" className='About_hover_item'>
                                                        <img src={about_hover_icon_1} alt="about_hover_icon_1" />
                                                        <p>Prabha</p>
                                                    </a>
                                                    <a href='https://www.indianrail.gov.in/enquiry/StaticPages/StaticEnquiry.jsp?StaticPage=index.html' target="/" className='About_hover_item'>
                                                        <img src={about_hover_icon_2} alt="about_hover_icon_1" />
                                                        <p>Indian Railways</p>
                                                    </a>
                                                    <a href='https://cris.org.in/crisweb/design1/index.jsp' target="/" className='About_hover_item'>
                                                        <img src={about_hover_icon_3} alt="about_hover_icon_1" />
                                                        <p>CRIS</p>
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="nav-btn API_cata_wrap">
                                                <NavLink to="/API_catalouges">
                                                    API Catalouges
                                                </NavLink>
                                                <div className='About_hover_main'>
                                                    <div className='About_hover_list'>
                                                        <a href='https://ireps.gov.in/' target="/" className='About_hover_item'>
                                                            <img src={API_hover_icon_1} alt="about_hover_icon_1" />
                                                            <p>Indian Railways E-procurment System (IREPS)s</p>
                                                        </a>
                                                        <a href='https://www.fois.indianrail.gov.in/FOISWebPortal/index.jsp' target="/" className='About_hover_item'>
                                                            <img src={API_hover_icon_2} alt="about_hover_icon_1" />
                                                            <p>Freight Operations Information System (FOIS)</p>
                                                        </a>
                                                        <a href='https://enquiry.indianrail.gov.in/mntes/' target="/" className='About_hover_item'>
                                                            <img src={API_hover_icon_3} alt="about_hover_icon_1" />
                                                            <p>National Train Enquiry Systems (NTES)</p>
                                                        </a>
                                                        <a href='https://prsindia.org/' target="/" className='About_hover_item'>
                                                            <img src={API_hover_icon_4} alt="about_hover_icon_1" />
                                                            <p>Passenger reservation System (PRS)</p>
                                                        </a>
                                                    </div>
                                                    <div className='Free_Download_box'>
                                                        <h6>FEAUTURED PRODUCT</h6>
                                                        <img src={API_hover_crad} alt="API_hover_crad" />
                                                        <a href="#0"><img src={Free_Download_icon} alt="Free_Download_icon" />Free Download</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-btn documents_wrap">
                                                <NavLink to="/Documents">
                                                    Documents
                                                </NavLink>
                                                <div className='About_hover_main'>
                                                    <a href='#0' className='About_hover_item'>
                                                        <img src={Documents_icon_1} alt="about_hover_icon_1" />
                                                        <p>Document on online and offline Registration process</p>
                                                    </a>
                                                    <a href='#0' className='About_hover_item'>
                                                        <img src={Documents_icon_2} alt="about_hover_icon_1" />
                                                        <p>API usages Pricing Policy</p>
                                                    </a>
                                                    <a href='#0' className='About_hover_item'>
                                                        <img src={Documents_icon_3} alt="about_hover_icon_1" />
                                                        <p>API consuming Process</p>
                                                    </a>
                                                    <a href='#0' className='About_hover_item'>
                                                        <img src={Documents_icon_4} alt="about_hover_icon_1" />
                                                        <p>Client development Guide using</p>
                                                    </a>
                                                    <a href='#0' className='About_hover_item'>
                                                        <img src={Documents_icon_5} alt="about_hover_icon_1" />
                                                        <p>Any other documents</p>
                                                    </a>
                                                </div>
                                            </li>
                                            <div className='log_signup_btn log_signup_btn_mobil'>
                                                <ul>
                                                    <li><a href="#0" className='nav-btn'>Log-In</a></li>
                                                    <li><a href="#0" className='nav-btn'>Sign Up</a></li>
                                                </ul>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className="header_log_main">
                                    <div className='language_drop'>
                                        <ReactLanguageSelect
                                            placeholder="En"
                                            languages={["en", "hi"]}
                                            customLabels={{ "hi": "Hindi", "en": "English", }}
                                            onSelect={(e) => console.log(e)}
                                            showSelectedLabel={true}
                                            selectedSize={16}
                                        />
                                    </div>
                                    <div className='log_signup_btn log_signup_btn_desktop'>
                                        <ul>
                                            <li><a href="#0">Log-In</a></li>
                                            <li><a href="#0">Sign Up</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu_toggle_btn" onClick={toggle}>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                </div>
                            </div>
                        </Container>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header;