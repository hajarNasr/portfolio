import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImgCarousel = ()=>{
    const fcc1 = require('./images/fcc1.png'),
          fcc2 = require('./images/fcc2.png'),
          fcc3 = require('./images/fcc3.jpg'),
          fcc4 = require('./images/fcc4.JPG'),
          fcc5 = require("./images/fcc5.JPG");

    return (
        <Carousel>
            <div>
                <img src= {`${fcc1}`} 
                     alt="Responsive Web Design Certificate" />
            </div>
            <div>
                <img src= {`${fcc2}`}
                    alt="JavaScript Algorithms and Data Structures Certificate"
                />
            </div>
            <div>
                <img src= {`${fcc3}`} 
                    alt="Frontend Libraries Certificate"
                />
                </div>
            <div>
                <img src= {`${fcc4}`} 
                    alt="Data Visualization Certificate"
                />
            </div>
            <div>
                <img src= {`${fcc5}`} 
                    alt="APIs and Microservices Certificate"
                />
            </div>
        </Carousel>
    );

}

export default ImgCarousel;