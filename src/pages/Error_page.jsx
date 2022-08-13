import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { NavLink } from "react-router-dom";

const Error_page = () => {
    return (
        <>
            <div className='error_page'>
                <h1>oops!</h1>
                <h3>404 - PAGE NOT FOUND</h3>
                <div className='web_btn'>
                    <NavLink to="/">GO TO HOMEPAGE</NavLink>
                </div>
            </div>
        </>
    )
}

export default Error_page;