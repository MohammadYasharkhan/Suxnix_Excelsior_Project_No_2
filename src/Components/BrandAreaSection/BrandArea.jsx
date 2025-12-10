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



    const slideRef = useRef(null);
    const [slideWidth, setSlideWidth] = useState(0);


    useEffect(() => {
        const updateWidth = () => {
            if (slideRef.current) {
                const width = slideRef.current.getBoundingClientRect().width;
                setSlideWidth(width);
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);



    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const track = trackRef.current;

        if (!track) return;

        // Smooth animation
        track.style.transition = `transform 1000ms ease`;

        // Move the track
        track.style.transform = `translateX(${-index * slideWidth}px)`;

        // If reached the end of duplicated list
        if (index === totalSlides) {
            setTimeout(() => {
                track.style.transition = "none"; // Remove animation for instant jump
                setIndex(0);
                track.style.transform = `translateX(0px)`;
            }, 1000);
        }
    }, [index]);

    return <div className='brand_area_section'>
        <div className='container brand_container'>
            <div className="row">
                <div className='col-12 brand_heading'>
                    <p className='title'>
                        perfect brand is featured on
                    </p>
                </div>
            </div>

            <div className="row">
                <div className='slick_list'>
                    <div className='slick_track' ref={trackRef}>
                        {
                            sliderImages.map((img,i)=>(
                                <div className='col-xl-2 col-xxl-2 col-md-3 col-sm-4 col-6 brand_item_custome_col' ref={i===0?slideRef:null}>
                                    <div className='slider_track_img_container' key={i}>
                                        <a href="/">
                                            <img src={img} alt='image' loading='lazy'/>
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* <div className='slider_track_img_container'>
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
                </div> */}

            </div>
        </div>
    </div>;
}

export default BrandArea; 