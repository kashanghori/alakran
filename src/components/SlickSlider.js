import React from 'react';
import Slider from "react-slick";

var settings = {
    className: "car-slider",
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 6
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 4
        }
    }]
}

const SlickSider = () => {
    return <Slider {...settings}>
        <div className="slide"><img src="/alarkan/image/brands1 (1).jpg" alt="brand" /></div>
        <div className="slide"><img src="/alarkan/image/mitsubishi.png" alt="brand" /></div>
        <div className="slide"><img src="/alarkan/image/honda.png" alt="brand" /></div>
        <div className="slide"><img src="/alarkan/image/brands1 (4).jpg" alt="brand" /></div>
        <div className="slide"><img src="/alarkan/image/Untitled design (74).png" alt="brand" /></div>
        <div className="slide"><img src="/alarkan/image/brands1 (6).jpg" alt="brand" /></div>
        <div className="slide"><img src="/alarkan/image/Untitled design (73).png" alt="brand" /></div>
        <div className="slide"><img src="/alarkan/image/brands1 (8).jpg" alt="brand" /></div>
        <div className="slide"><img src="/alarkan/image/brands1 (9).jpg" alt="brand" /></div>
        <div className="slide"><img src="/alarkan/image/suzuki.png" alt="brand" /></div>
        <div className="slide"><img src="/alarkan/image/bmw.png" alt="brand" /></div>
        <div className="slide"><img src="/alarkan/image/ford.png" alt="brand" /></div>
        <div className="slide"><img src="/alarkan/image/mazda.png" alt="brand" /></div>
    </Slider>
    // return <> </>
}

export default SlickSider
