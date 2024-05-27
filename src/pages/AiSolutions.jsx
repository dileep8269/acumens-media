import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUp, faBullseye, faCartShopping, faCommentDollar, faEnvelope, faGlobe, faHashtag, faMattressPillow, faMessage, faRocket, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faInstagramSquare, faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import image1 from "../wp-content/uploads/2023/05/GettyImages-1406332084.webp"
import image2 from "../wp-content/uploads/2023/05/pexels-pavel-danilyuk-7675014.webp";
import imageline1 from "../wp-content/uploads/2023/05/border-center.webp";
import jolie from "../wp-content/uploads/2023/06/jolie-1.webp";
import caridad from "../wp-content/uploads/2023/06/caridad.webp";
import F7 from "../wp-content/uploads/2023/06/F7.webp";
import scuola from "../wp-content/uploads/2023/06/Scuola_Logo_OnlyTop-1.webp";
import petmania from "../wp-content/uploads/2023/06/petmania.webp";
import tecnologia from "../wp-content/uploads/2023/06/tecnologia.webp";
import GoogleLogo from "../wp-content/uploads/2023/05/google-logo.webp";
import Rocket from "../wp-content/uploads/2023/05/GettyImages-1367732506-1.webp";
import MetaPartner from "../wp-content/uploads/2023/05/meta-partner.webp";
import MetaBusinessPartner from "../wp-content/uploads/2023/05/google-cloud.webp";
import GooglePartner from "../wp-content/uploads/2023/05/google-partner.webp";
import ShopifyPartner from "../wp-content/uploads/2023/05/shopify.webp";
import TiktokPartner from "../wp-content/uploads/2023/05/tiktok.webp";
import "../CSS/AiSolutions.css"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';


const AISOLUTIONS = () => {

    return (
        <div>
            <main className="Main">
                <div className="main-container">
                    <div className="container-1">
                        <h6>Ai Solutions</h6>
                        <h1>Ai Solutions for business growth, Management & Automation</h1>
                        <p>Acumens's Marketing Strategy is the intersection between creativity, Technology and performance. Our
                            team delivers with the perfect combination of creative experts, experienced marketing team &
                            Artificial Intelligence to maximize results.</p>
                        <a href='#' className='container-1-a'>Consult now <FontAwesomeIcon className='ArrowRight' icon={faArrowRight} /></a>
                    </div>
                    <div className="container-2">
                        <div className="container2-image-div">
                            <img src={image1}></img>
                        </div>
                    </div>
                </div>
                <div className="main-container2">
                    <div className="heading-container">
                        <h1>We lead with Client-first strategies:</h1>
                        <p>Driving growth through personalized experiences for truly end-to-end business building.</p>
                    </div>
                </div>
                <div className="main-container3">
                    <div className="main-container3-div1">
                        <div className="main-container3-box">
                            <a href="#"><FontAwesomeIcon className='icon' icon={faCommentDollar} /></a>
                            <a href="#" className="main-container3-box-a"><h2 className='main-container3-box-a-h2'>AI-Infused Social Media Automation</h2></a>
                            <p>Struggling to find Social Media Marketing experts who really understand your business & can actually drive long term results?
                                Our AI-Technology combined with the</p>
                        </div>
                        <div className="get-started">
                            <a href="#" className="get-started-a">Get started now</a>
                        </div>
                    </div>

                    <div className="main-container3-div1">
                        <div className="main-container3-box">
                            <a href="#"><FontAwesomeIcon className='icon' icon={faBullseye} /></a>
                            <a href="#" className='main-container3-box-a-h2'><h2 className='main-container3-box-a-h2'>Search Engine Services (SEO/SEM)</h2></a>
                            <p>Imagine a world where your SEO & SEM strategies are not just data-driven but intelligence-driven. Join the era of AI-Powered SEO & SEM, where our experienced Marketing team injects</p>
                        </div>
                        <div className="get-started">
                            <a href="#" className="get-started-a">Get started now</a>
                        </div>
                    </div>
                    <div className="main-container3-div1">
                        <div className="main-container3-box">
                            <a href="#"><FontAwesomeIcon className='icon' icon={faGoogle} /></a>
                            <a href="#" className='main-container3-box-a-h2'><h2 className='main-container3-box-a-h2'>AI-Fueled Google Business Services</h2></a>
                            <p>Expand your business visibility like never before with our AI-Fueled Google Service which covers Google's vast landscape like google Map, Google Business & AI-Created YouTube videos.</p>
                        </div>
                        <div className="get-started">
                            <a href="#" className="get-started-a">Get started now</a>
                        </div>
                    </div>
                    <div className="main-container3-div1">
                        <div className="main-container3-box">
                            <a href="#"><FontAwesomeIcon className='icon' icon={faEnvelope} /></a>
                            <a href="#" className='main-container3-box-a-h2'><h2 className='main-container3-box-a-h2'>AI-Powered Email Marketing</h2></a>
                            <p>When it comes to reaching your target audience, you can’t get much closer than direct to their inboxes.</p>
                        </div>
                        <div className="get-started">
                            <a href="#" className="get-started-a">Get started now</a>
                        </div>
                    </div>
                    <div className="main-container3-div1">
                        <div className="main-container3-box">
                            <a href="#"><FontAwesomeIcon className='icon' icon={faCartShopping} /></a>
                            <a href="#" className='main-container3-box-a-h2'><h2 className='main-container3-box-a-h2'>AI-Driven E-Commerce Solutions</h2></a>
                            <p>offering online platforms for seamless transactions, expanding market reach, and enhancing customer experiences.</p>
                        </div>
                        <div className="get-started">
                            <a href="#" className="get-started-a">Get started now</a>
                        </div>
                    </div>
                    <div className="main-container3-div1">
                        <div className="main-container3-box">
                            <a href="#"><FontAwesomeIcon className='icon' icon={faGlobe} /></a>
                            <a href="#" className='main-container3-box-a-h2'><h2 className='main-container3-box-a-h2'>AI-Integrated Web Design & Hosting</h2></a>
                            <p>Elevate your brand with a visually stunning website, supported by reliable hosting for a seamless digital experience.</p>
                        </div>
                        <div className="get-started">
                            <a href="#" className="get-started-a">Get started now</a>
                        </div>
                    </div>
                    <div className="main-container3-div1">
                        <div className="main-container3-box">
                            <a href="#"><FontAwesomeIcon className='icon' icon={faRocket} /></a>
                            <a href="#" className='main-container3-box-a-h2'><h2 className='main-container3-box-a-h2'>App Development</h2></a>
                            <p>Unlock innovation, engage users, and elevate your brand with customized, intuitive, and scalable mobile applications.</p>
                        </div>
                        <div className="get-started">
                            <a href="#" className="get-started-a">Get started now</a>
                        </div>
                    </div>
                    <div className="main-container3-div1">
                        <div className="main-container3-box">
                            <a href="#"><FontAwesomeIcon className='icon' icon={faUserGroup} /></a>
                            <a href="#" className='main-container3-box-a-h2'><h2 className='main-container3-box-a-h2'>ERP / CRM / IT / ChatBots</h2></a>
                            <p>Grow your brand with the help of our various web services infused with AI integration.</p>
                        </div>
                        <div className="get-started">
                            <a href="#" className="get-started-a">Get started now</a>
                        </div>
                    </div>
                    <div className="main-container3-div1">
                        <div className="main-container3-box">
                            <a href="#"><FontAwesomeIcon className='icon' icon={faLightbulb} /></a>
                            <a href="#" className='main-container3-box-a-h2'><h2 className='main-container3-box-a-h2'>Content Writing</h2></a>
                            <p>Enhancing brand communication and audience engagement. Elevate your digital presence with tailored content, optimized for impact and resonance in the online realm.</p>
                        </div>
                        <div className="get-started">
                            <a href="#" className="get-started-a">Get started now</a>
                        </div>
                    </div>
                    <div className="main-container3-div1">
                        <div className="main-container3-box">
                            <a href="#"><FontAwesomeIcon className='icon' icon={faHashtag} /></a>
                            <a href="#" className='main-container3-box-a-h2'><h2 className='main-container3-box-a-h2'>CCaaS / Outsourcing & Consulting</h2></a>
                            <p>From cloud-based communication solutions to strategic consulting, unlock efficiency and innovation for sustained growth and success in the modern marketplace.</p>
                        </div>
                        <div className="get-started">
                            <a href="#" className="get-started-a">Get started now</a>
                        </div>
                    </div>
                </div>
                <img src={imageline1} className='imagelineBorderCenter' alt='image_line_border_center'></img>
                <div className="main-container4">
                    <div className="main-container4-div1">
                        <h1>
                            Strategic Synergy: Elevating Your Vision with Our Dedicated Services</h1>
                        <p>At the heart of our approach is an unyielding commitment to your strategic goals. Whether crafting engaging content, developing innovative applications, or revolutionizing communication through CCaaS and Outsourcing & Consulting, we are dedicated to aligning with your vision. As your partners, we provide tailored solutions that drive your business towards sustained growth and success.</p>
                        <div className='get-started'>
                            <a href='#' className="get-started-a">MORE ABOUT OUR COMPANY</a>
                        </div>
                    </div>
                    <div className="main-container4-div2">
                        <div className="div2-image-div">
                            <img src={image2}></img>
                        </div>
                    </div>
                </div>
                <div className="main-container5">
                    <div className="main-container5-div1">

                        <div className="main-container5-div1-under-div">
                            <div className="main-container5-div1-under-div-bigbox">
                                <div className="main-container5-div1-under-div-smallbox">
                                    <h2 className='text'>500+</h2>
                                    <FontAwesomeIcon className='Arrowup' icon={faArrowUp} />
                                </div>
                            </div>
                            <p>International Clients</p>
                        </div>


                        <div className="main-container5-div1-under-div">
                            <div className="main-container5-div1-under-div-bigbox">
                                <div className="main-container5-div1-under-div-smallbox">
                                    <h2 className='text'>100%</h2>
                                    <FontAwesomeIcon className='Arrowup' icon={faArrowUp} />
                                </div>
                            </div>
                            <p>Guaranted growth</p>
                        </div>


                        <div className="main-container5-div1-under-div">
                            <div className="main-container5-div1-under-div-bigbox">
                                <div className="main-container5-div1-under-div-smallbox">
                                    <h2 className='text'>15m</h2>
                                    <FontAwesomeIcon className='Arrowup' icon={faArrowUp} />
                                </div>
                            </div>
                            <p>Managed budgets</p>
                        </div>

                        <div className="main-container5-div2">
                            <h2>282,000+</h2>
                            <p>Leads generated so far...</p>
                            <a href='#' className="main-container5-div2-a">contact us <FontAwesomeIcon className='ArrowRight' icon={faArrowRight} /></a>
                        </div>

                    </div>
                </div>

                <div className="main-container6">
                    <h4>The Best Brands Choose Acumens</h4>
                    <div className='main-container6-under-div'>
                        <img src={jolie} alt='jolie'></img>
                        <img src={caridad} alt='caridad'></img>
                        <img src={F7} alt='F7'></img>
                        <img src={scuola} alt='scuola'></img>
                        <img src={petmania} alt='petmania'></img>
                        <img src={tecnologia} alt='tecnologia'></img>
                    </div>
                </div>
                <img src={imageline1} className='imagelineBorderCenter' alt='Image_line_border_center'></img>
                <div className="main-container7">
                    <div className="main-container7-div1">
                        <div className="main-container-google-img">
                            <img src={GoogleLogo} alt='GooglrLogo'></img>
                        </div>
                        <h1>Get started with a Free consultation</h1>
                        <a href='#' className="main-container7-div1-a">Get a proposal <FontAwesomeIcon className='ArrowRight' icon={faArrowRight} /></a>
                        <img src={Rocket} className='Rocketimg' alt='Rocket'></img>
                    </div>
                </div>
                <div className="main-container8">

                    <div className="main-container8-div1">
                        <div className="main-container-flex">
                            <div className='main-container8-div1-heading'>
                                <h1>See how we can help your business grow</h1>
                            </div>
                            <div className='main-container8-div1-contact'>
                                <p>Ready to speak with a marketing expert? Call Us</p>
                                <div className="container-right">
                                    <div className="main-container-sale-contact">
                                        <span>Sales :</span>
                                        <span>Support :</span>
                                    </div>
                                    <div className="main-container-sale-contact-number">
                                        <a href='tel:8009694409' className="main-container-sale-contact-number-a"><span>800-969-4409</span></a>
                                        <a href='tel:8884915291' className="main-container-sale-contact-number-a"><span>888-491-5291</span></a>
                                    </div>
                                </div>
                                <a href='#' className='main-container8-div1-a-audit'>Get an audit <FontAwesomeIcon className='ArrowRight' icon={faArrowRight} /></a>
                            </div>
                        </div>
                        <img src={imageline1} className='imagelineBorderCenter addbackgroundColorInLine' alt='Image_line_border_center'></img>
                        <div className="main-container-flex2">
                            <div className="container-flex-under-div1">
                                <h2>A PARTNER, NOT A VENDOR</h2>
                                <div className="container-flex-under-div1-under-imgdiv">
                                    <img src={MetaPartner} alt='Meta_partner'></img>
                                    <img src={MetaBusinessPartner} alt='Meta_Business_partner'></img>
                                    <img src={GooglePartner} alt='Google_Partner'></img>
                                    <img src={ShopifyPartner} alt='Shopify_Partner'></img>
                                    <img src={TiktokPartner} alt='Tiktok_partner'></img>
                                </div>
                            </div>
                            <div className="container-flex-under-div2">
                                <div className='container-flex-under-div2-div'>
                                    <h1>6.7</h1>
                                    <span> / Average ROAS</span>
                                </div>
                                <span>across our 1000+ Global</span>
                                <span>Clients on SEO, PPC &</span>
                                <span>Social Media platforms.</span>
                            </div>
                        </div>
                    </div>

                    <div className="main-container-flex3">
                        <div className="main-container-flex3-under-div1">
                            <a href='#' className="main-container-flex3-under-div1-a"><div className="footer-link-div">About</div></a>
                            <a href='#' className="main-container-flex3-under-div1-a"><div className="footer-link-div">Blog</div></a>
                            <a href='#' className="main-container-flex3-under-div1-a"><div className="footer-link-div">Contact</div></a>
                        </div>
                        <div className="main-container-flex3-under-div2">
                            <div className="container-flex3-under-div2-div1">
                                <span>© 2017 - 2024</span>
                                <a href='#' className="container-flex3-under-div2-div1-a"><div className="footer-link-div">ACUMENS MEDIA INC</div></a>
                                <a href='#' className="container-flex3-under-div2-div1-a"><div className="footer-link-div">Terms & Conditions</div></a>
                                <a href='#' className="container-flex3-under-div2-div1-a"><div className="footer-link-div">Privacy Policy</div></a>
                            </div>
                            <div className="container-flex3-under-div2-div2">
                                <a href='#' className="container-flex3-under-div2-div2-a"><FontAwesomeIcon className='SocialMedia' icon={faLinkedin} /></a>
                                <a href='#' className="container-flex3-under-div2-div2-a"><FontAwesomeIcon className='SocialMedia' icon={faInstagram} /></a>
                                <a href='#' className="container-flex3-under-div2-div2-a"><FontAwesomeIcon className='SocialMedia' icon={faTwitter} /></a>
                                <a href='#' className="container-flex3-under-div2-div2-a"><FontAwesomeIcon className='SocialMedia' icon={faFacebook} /></a>
                                <a href='#' className="container-flex3-under-div2-div2-a"><FontAwesomeIcon className='SocialMedia' icon={faYoutube} /></a>
                            </div>
                        </div>
                    </div>


                </div>
            </main>

        </div>
    )
}

export default AISOLUTIONS;
