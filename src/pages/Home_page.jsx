import React from 'react';
import Header from '../Components/Header';
import Hero_sec from '../Components/Hero_sec';
import Geting_started_sec from '../Components/Geting_started_sec';
import Our_business_sec from '../Components/Our_business_sec';
import Support_API from '../Components/Support_API_sec';
import Footer from '../Components/Footer';

const Home_page = () => {
    return (
        <>
            <Header />
            <Hero_sec />
            <Geting_started_sec />
            <Our_business_sec />
            <Support_API />
            <Footer />
        </>
    )
}

export default Home_page;