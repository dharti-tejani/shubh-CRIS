import React from 'react';
import hero_bg_img from '../assets/images/hero_bg_img.png';

const Hero_sec = () => {
  return (
    <>
        <section className='Hero_sec'>
            <div className='hero_img_main'>
                <img src={hero_bg_img} alt="hero_bg_img" />
                <div className='web_btn'>
                  <a href="#0">Get Started</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero_sec;