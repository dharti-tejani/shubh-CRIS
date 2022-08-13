import React , {useState} from 'react';
import { Container } from 'react-bootstrap';

const Support_API_sec = () => {

    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    const [isShown5, setIsShown5] = useState(false);
   
    return (
        <>
            <section className='Support_API_sec'>
                <Container>
                    <div className='web_heading'>
                        <h2>Support for Multiple API Types</h2>
                    </div>
                    <div className='Support_API_images'>
                        <ul>
                            <div>
                                <li>
                                    <a href="#0">
                                        <svg width="199" height="175" viewBox="0 0 199 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_31_621)">
                                                <path d="M51.5828 6.20282L140.575 6.20283L185.071 83.272L140.575 160.341L51.5828 160.341L7.08694 83.272L51.5828 6.20282Z" fill="white" />
                                                <path d="M10.551 83.272L53.3149 9.20282L138.843 9.20283L181.606 83.272L138.843 157.341L53.3149 157.341L10.551 83.272Z" stroke="#BAE0FF" stroke-width="6" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_31_621" x="0.0869446" y="0.202881" width="197.984" height="174.138" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dx="3" dy="4" />
                                                    <feGaussianBlur stdDeviation="5" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_621" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_621" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </a>
                                </li>
                                <div className='support_li_hover_top support_li_hover'>
                                    <p>Use this popular API Type for web applications and projects that are flexible, scalable, and fast</p>
                                </div>
                                <li>
                                    <a href="#0">
                                        <svg width="199" height="175" viewBox="0 0 199 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_31_6240)"   onMouseEnter={() => setIsShown1(true)}  onMouseLeave={() => setIsShown1(false)}>   
                                                <path d="M52.0399 6.49579L141.032 6.4958L185.528 83.565L141.032 160.634L52.0399 160.634L7.54397 83.565L52.0399 6.49579Z" fill="url(#paint0_linear_31_6240)" />
                                                <path d="M11.0081 83.565L53.7719 9.49579L139.3 9.4958L182.063 83.565L139.3 157.634L53.7719 157.634L11.0081 83.565Z" stroke="#BAE0FF" stroke-width="6" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_31_6240" x="0.543968" y="0.49585" width="197.984" height="174.138" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dx="3" dy="4" />
                                                    <feGaussianBlur stdDeviation="5" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_624" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_624" result="shape" />
                                                </filter>
                                                <linearGradient id="paint0_linear_31_6240" className='stop_color' x1="52.0399" y1="6.49579" x2="141.032" y2="160.634" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#266699" />
                                                    <stop offset="1" stop-color="#5AA6E3" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className={`${isShown1 ? "Show" : "" }`}>REST</span>
                                    </a>
                                </li>
                                <div className={`support_li_hover ${isShown1 ? "Show" : "" }`}>
                                    <p>Use this popular API Type for web applications and projects that are flexible, scalable, and fast</p>
                                </div>
                            </div>
                            <div>
                                <li>
                                    <a href="#0">
                                        <svg width="199" height="175" viewBox="0 0 199 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_31_6241)"  onMouseEnter={() => setIsShown2(true)}  onMouseLeave={() => setIsShown2(false)} >
                                                <path d="M52.0399 6.49579L141.032 6.4958L185.528 83.565L141.032 160.634L52.0399 160.634L7.54397 83.565L52.0399 6.49579Z" fill="url(#paint0_linear_31_6241)" />
                                                <path d="M11.0081 83.565L53.7719 9.49579L139.3 9.4958L182.063 83.565L139.3 157.634L53.7719 157.634L11.0081 83.565Z" stroke="#BAE0FF" stroke-width="6" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_31_6241" x="0.543968" y="0.49585" width="197.984" height="174.138" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dx="3" dy="4" />
                                                    <feGaussianBlur stdDeviation="5" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_624" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_624" result="shape" />
                                                </filter>
                                                <linearGradient id="paint0_linear_31_6241"  className='stop_color' x1="52.0399" y1="6.49579" x2="141.032" y2="160.634" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#266699" />
                                                    <stop offset="1" stop-color="#5AA6E3" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className={`${isShown2 ? "Show" : "" }`}>GraphQL</span>
                                    </a>
                                </li>
                                <div  className={`support_li_hover_top support_li_hover ${isShown2 ? "Show" : "" }`} >
                                    <p>Use this popular API Type for web applications and projects that are flexible, scalable, and fast</p>
                                </div>
                                <li>
                                    <a href="#0">
                                        <svg width="199" height="175" viewBox="0 0 199 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_31_6242)" onMouseEnter={() => setIsShown3(true)}  onMouseLeave={() => setIsShown3(false)} >
                                                <path d="M52.0399 6.49579L141.032 6.4958L185.528 83.565L141.032 160.634L52.0399 160.634L7.54397 83.565L52.0399 6.49579Z" fill="url(#paint0_linear_31_6242)" />
                                                <path d="M11.0081 83.565L53.7719 9.49579L139.3 9.4958L182.063 83.565L139.3 157.634L53.7719 157.634L11.0081 83.565Z" stroke="#BAE0FF" stroke-width="6" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_31_6242" x="0.543968" y="0.49585" width="197.984" height="174.138" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dx="3" dy="4" />
                                                    <feGaussianBlur stdDeviation="5" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_624" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_624" result="shape" />
                                                </filter>
                                                <linearGradient id="paint0_linear_31_6242" className='stop_color' x1="52.0399" y1="6.49579" x2="141.032" y2="160.634" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#266699" />
                                                    <stop offset="1" stop-color="#5AA6E3" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className={`${isShown3 ? "Show" : "" }`}>Kafka</span>
                                    </a>
                                </li>
                                <div className={`support_li_hover ${isShown3 ? "Show" : "" }`}>
                                    <p>Use this popular API Type for web applications and projects that are flexible, scalable, and fast</p>
                                </div>
                            </div>
                            <div>
                                <li>
                                    <a href="#0">
                                        <svg width="199" height="175" viewBox="0 0 199 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_31_6243)" onMouseEnter={() => setIsShown4(true)}  onMouseLeave={() => setIsShown4(false)} >
                                                <path d="M52.0399 6.49579L141.032 6.4958L185.528 83.565L141.032 160.634L52.0399 160.634L7.54397 83.565L52.0399 6.49579Z" fill="url(#paint0_linear_31_6243)" />
                                                <path d="M11.0081 83.565L53.7719 9.49579L139.3 9.4958L182.063 83.565L139.3 157.634L53.7719 157.634L11.0081 83.565Z" stroke="#BAE0FF" stroke-width="6" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_31_6243" x="0.543968" y="0.49585" width="197.984" height="174.138" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dx="3" dy="4" />
                                                    <feGaussianBlur stdDeviation="5" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_624" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_624" result="shape" />
                                                </filter>
                                                <linearGradient id="paint0_linear_31_6243" className='stop_color' x1="52.0399" y1="6.49579" x2="141.032" y2="160.634" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#266699" />
                                                    <stop offset="1" stop-color="#5AA6E3" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className={`${isShown4 ? "Show" : "" }`}>RapidQL</span>
                                    </a>
                                </li>
                                <div className={`support_li_hover_top support_li_hover ${isShown4 ? "Show" : "" }`}>
                                    <p>Use this popular API Type for web applications and projects that are flexible, scalable, and fast</p>
                                </div>
                                <li>
                                    <a href="#0">
                                        <svg width="199" height="175" viewBox="0 0 199 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_31_6244)" onMouseEnter={() => setIsShown5(true)}  onMouseLeave={() => setIsShown5(false)}>
                                                <path d="M52.0399 6.49579L141.032 6.4958L185.528 83.565L141.032 160.634L52.0399 160.634L7.54397 83.565L52.0399 6.49579Z" fill="url(#paint0_linear_31_6244)" />
                                                <path d="M11.0081 83.565L53.7719 9.49579L139.3 9.4958L182.063 83.565L139.3 157.634L53.7719 157.634L11.0081 83.565Z" stroke="#BAE0FF" stroke-width="6" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_31_6244" x="0.543968" y="0.49585" width="197.984" height="174.138" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dx="3" dy="4" />
                                                    <feGaussianBlur stdDeviation="5" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_624" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_624" result="shape" />
                                                </filter>
                                                <linearGradient id="paint0_linear_31_6244" className='stop_color' x1="52.0399" y1="6.49579" x2="141.032" y2="160.634" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#266699" />
                                                    <stop offset="1" stop-color="#5AA6E3" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className={`${isShown5 ? "Show" : "" }`}>SOAP</span>
                                    </a>
                                </li>
                                <div className={`support_li_hover ${isShown5 ? "Show" : "" }`}>
                                    <p>Use this popular API Type for web applications and projects that are flexible, scalable, and fast</p>
                                </div>
                            </div>
                            <div>
                                <li>
                                    <a href="#0">
                                        <svg width="199" height="175" viewBox="0 0 199 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_31_621)">
                                                <path d="M51.5828 6.20282L140.575 6.20283L185.071 83.272L140.575 160.341L51.5828 160.341L7.08694 83.272L51.5828 6.20282Z" fill="white" />
                                                <path d="M10.551 83.272L53.3149 9.20282L138.843 9.20283L181.606 83.272L138.843 157.341L53.3149 157.341L10.551 83.272Z" stroke="#BAE0FF" stroke-width="6" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_31_621" x="0.0869446" y="0.202881" width="197.984" height="174.138" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dx="3" dy="4" />
                                                    <feGaussianBlur stdDeviation="5" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_621" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_621" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </a>
                                </li>
                                <li></li>
                            </div>
                        </ul>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Support_API_sec;