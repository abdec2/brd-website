import React from 'react';
import Typed from 'react-typed';
import SEO from "../../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import BrdHeader from '../../common/header/BrdHeader';
import FooterTwo from '../../common/footer/FooterTwo';
import Copyright from '../../common/footer/Brd__Footer';
import AboutOne from '../../elements/about/Brd__aboutOne';
import ServiceFive from '../../elements/service/Brd__service';
import CalltoActionFive from '../../elements/calltoaction/Brd__callToAction';
import TeamTwo from '../../elements/team/TeamTwo';
import TestimonialThree from "../../elements/testimonial/TestimonialThree";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import Separator from "../../elements/separator/Separator";
import Mission from "../../elements/about/Mission";
import BlogList from "../../components/blog/itemProp/BlogList";
import BlogClassicData from '../../data/blog/BlogList.json';
import Blury from '../../common/Blury';
var BlogListData = BlogClassicData.slice(0, 3);




const BusinessConsulting2 = () => {
    return (
        <>
            <SEO title="Home" />
            <main className="page-wrapper">
                <BrdHeader btnStyle="round" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent height-850">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <span className="subtitle">Button For Change</span>
                                    <h1 className="title theme-gradient display-two">Button R Digitech <br /> {" "}
                                        <Typed
                                            strings={[
                                                "Consulting.",
                                                "Finance.",
                                                "Agency.",
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        />
                                    </h1>
                                    <p className="description">We are young and dynamic company; we build innovative solutions using emerging technologies</p>
                                    <div className="button-group">
                                        <Link className="btn-default btn-medium btn-border round btn-icon " to="/contact">Contact Us <i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <Separator />

                {/* Start About Area  */}
                <div id='about'>
                    <AboutOne /> 
                </div>                           
                {/* End About Area  */}

                <Separator />                            
                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap" id='services'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Services provide for you."
                                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Fusce blandit, odio vel pharetra bibendum, eros nulla facilisis neque"
                                    />
                            </div>
                        </div>
                        <ServiceFive 
                            serviceStyle = "gallery-style"
                            textAlign = "text-left"
                        />
                    </div>
                </div>
                {/* End Service Area  */}


                {/* Start Call To Action Area  */}
                <div className="rwt-callto-action-area">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div>
                {/* End Call To Action Area  */}


                 {/* Start Team Area  */}
                 {/* <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Experts."
                                        title = "Our Company Experts."
                                        description = "We provide company and finance service for <br /> startups and company business."
                                    />
                            </div>
                        </div>
                        <TeamTwo column="col-lg-4 col-md-6 col-12" teamStyle="team-style-default style-two" />
                    </div>
                </div> */}
                {/* End Team Area  */}
                <Separator /> 
                {/* Start Mission Area   */}
                {/* <Mission />                     */}
                {/* Start Mission Area  */}


                <Separator />                               
                {/* Start Testimonial Area  */}
                <div className="rwt-testimonial-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Client Feedback"
                                    title = "Our Awesome Client."
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                        </div>
                        <TestimonialThree teamStyle="" />
                    </div>
                </div>
                <Blury />
                {/* End Testimonial Area  */}

                <Copyright />
            </main>
        </>
    )
}
export default BusinessConsulting2;
