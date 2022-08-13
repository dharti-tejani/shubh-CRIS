import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Our_business_data from "../database/Our_business_data";

const Our_business_sec = () => {
    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <section className='Our_business_sec'>
            <Container>
                <div className='web_heading'>
                    <h2>Our Business</h2>
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            Our_business_data.map((item, index) => {
                                return (
                                    <div className='Our_business_item' key={index}>
                                        <div>
                                            <img src={item.slider_image} alt="Our_Business_img_1" />
                                            <h3>{item.item_heading}</h3>
                                        </div>
                                        <p>{item.item_description}</p>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
                <div className='View_all'>
                    <a href="#0">View All</a>
                </div>
            </Container>
        </section>
    )
}

export default Our_business_sec;