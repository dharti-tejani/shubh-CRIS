import React from 'react'
import { Container } from 'react-bootstrap';
import Geting_started_data from "../database/Geting_started_data";

const Geting_started_sec = () => {
    return (
        <>
            <section className='Geting_started_sec'>
                <Container>
                    <div className='Geting_started_row'>
                        {
                            Geting_started_data.map((item,index) => {
                                return (
                                    <div className='Geting_col' key={index}>
                                        <img src={item.item_image} alt="Geting_started_img_1" />
                                        <h4>{item.item_heading}</h4>
                                        <p>{item.item_description}</p>
                                        <div className='web_btn'>
                                            <a href="#0">{item.item_button}</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Geting_started_sec;