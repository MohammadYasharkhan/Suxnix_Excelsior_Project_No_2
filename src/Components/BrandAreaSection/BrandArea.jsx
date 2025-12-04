import { useEffect, useRef, useState } from 'react';
import './BrandArea.css';


const imageArray=[
    "assets/images/brand_02.webp",
    "assets/images/brand_04.webp",
    "assets/images/brand_05.webp",
    "assets/images/brand_03.webp",
    "assets/images/brand_01.png",
    "assets/images/brand_06.webp",
];

function BrandArea()
{
    const trackRef=useRef(null);
    const [index,setIndex]=useState(0);

    const totalSlides=imageArray.length;


    const sliderImages=[...imageArray,...imageArray];

    

    return <div className='brand_area_section'>
        <div className='container brand_container'>
            <div className="row">
                <div className='col-12 brand_heading'>
                    <p className='title'>
                        perfect brand is featured on
                    </p>
                </div>
            </div>

            <div className="row slider_track" ref={sliderRef}>
                <div className='slider_track_img_container'>
                    <img src="assets/images/brand_02.webp" className="slide" />
                </div>

                <div className='slider_track_img_container'>
                    <img src="assets/images/brand_04.webp" className="slide" />
                </div>

                <div className='slider_track_img_container'>
                    <img src="assets/images/brand_05.webp" className="slide" />
                </div>

                <div className='slider_track_img_container'>
                    <img src="assets/images/brand_03.webp" className='slide' />
                </div>

                <div className='slider_track_img_container'>
                    <img src="assets/images/brand_01.png" className="slide" />
                </div>

                <div className='slider_track_img_container'>
                    <img src="assets/images/brand_06.webp" className="slide" />
                </div>

            </div>
        </div>
    </div>;
}

export default BrandArea; 