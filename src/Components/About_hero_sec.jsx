import React from 'react';
import { Container } from 'react-bootstrap';
import About_hero_img from '../assets/images/About_us/About_hero_img.gif';

const About_hero_sec = () => {
  return (
    <>
        <section className='about_hero_sec'>
            <Container>
                <div className='about_hero_row'>
                    <div className='about_hero_text'>
                        <h1>The Next-Generation API Platform</h1>
                        <p>Find, Connect to, and Manage thousands of APIs</p>
                        <a href="#0">Explore Indian Railways API</a>
                    </div>
                    <div className='about_hero_img'>
                        <img src={About_hero_img} alt="About_hero_img" />
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default About_hero_sec;