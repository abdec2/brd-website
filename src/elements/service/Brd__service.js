import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: './images/service/service__NFT.jpg',
        title: 'NFT Development',
        description: ''
    },
    {
        image: './images/service/service__crypto.jpg',
        title: 'Crypto Currency',
        description: ''
    },
    {
        image: './images/service/service__launchpad.jpg',
        title: 'Launch Pad',
        description: ''
    },
    {
        image: './images/service/service__defi.jpg',
        title: 'DeFi',
        description: ''
    },
    {
        image: './images/service/service__odapp.jpg',
        title: 'On Demand App',
        description: ''
    }
]
const ServiceFive = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="content">
                                    <h4 className="title">
                                        <Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link>
                                    </h4>
                                    <p className="description" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                                <div className="image">
                                    <img src={`${val.image}`} alt="card Images" />
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceFive;