import { useEffect, useRef, useState } from "react";
import "./InstagramSlider.css";

export default function InstagramSlider({ images }) {
    const trackRef = useRef(null);
    const [index, setIndex] = useState(0);

    const totalSlides = images.length;

    // Create clones for infinite loop
    const sliderImages = [...images, ...images];

    // const slideWidth = 258; // px per slide (change as you want)
    const speed = 1000; // animation speed
    const autoplayDelay = 5000; // autoplay time


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



    // Autoplay effect
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, autoplayDelay);

        return () => clearInterval(interval);
    }, []);

    // Handle infinite loop switching
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
            }, speed);
        }
    }, [index]);

    return (
        <div className="footer_instagram">
            <div className="container">
                <div className="row">
                    <div className="slick_list">
                        <div className="slick_track" ref={trackRef}>
                            {sliderImages.map((img, i) => (
                                <div className="slick_slide col-2" key={i} ref={i === 0 ? slideRef : null}  >
                                    <div className="footer_insta_item">
                                        <img src={img} alt="" loading="lazy" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
