import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/Banner (1).jpg'
import banner2 from '../../../images/Banner/Banner (2).jpg'
import banner3 from '../../../images/Banner/Banner (3).jpg'
import banner4 from '../../../images/Banner/Banner (4).jpg'
import banner5 from '../../../images/Banner/Banner (5).jpg'
import banner6 from '../../../images/Banner/Banner (6).jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner5}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner6}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;