import React from 'react';
import About_hero_sec from '../Components/About_hero_sec';
import About_geting_started_sec from '../Components/About_geting_started_sec';
import Our_business_sec from '../Components/Our_business_sec';
import Support_API from '../Components/Support_API_sec';

const About_us = () => {
    return (
        <>
            <div className='main_wrapper'>
                <About_hero_sec />
                <About_geting_started_sec />
                <Our_business_sec />
                <Support_API />
            </div>
        </>
    )
}

export default About_us;