import "./VideoSection.css";
import { useState, useEffect, useRef } from "react";

function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoWrapperRef = useRef(null);

    const handlePlayClick = (e) => {
        e.preventDefault(); // Prevent navigation
        setIsPlaying(true);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (videoWrapperRef.current && !videoWrapperRef.current.contains(event.target)) {
                setIsPlaying(false); // close iframe if clicked outside
            }
        }
        if (isPlaying) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isPlaying]);


    return (
        <div id="video_section" className="video_section_bg">
            <div className="video_bg_overlay"></div>

            <div className="video_shape_one">
                <img src="/assets/images/video_shape01_c7268870-bd95-4dca-a7ce-141f63bc7cd0.avif" alt="image one" />
            </div>


            <div className="video_shape_two">
                <img src="/assets/images/video_shape02_0d75be31-08e5-4c25-bc04-c50f7d2c90fd.avif" alt="image two" />
            </div>

            <div className="big_wraaper">

                <div class="play-button-wrapper">
                    <div class="shadow-layer layer1"></div>
                    <div class="shadow-layer layer2"></div>
                    <div class="shadow-layer layer3"></div>

                    {
                        !isPlaying ? (<a href="https://www.youtube.com/watch?v=HQfF5XRVXjU" class="play-btn" onClick={handlePlayClick}>
                            <span class="play-icon">&#9654;</span>
                        </a>)
                            :
                            (
                                <div className="iframe-wrapper" ref={videoWrapperRef}>
                                    <button
                                        className="close-button"
                                        onClick={() => setIsPlaying(false)}
                                        aria-label="Close video"
                                    >
                                        ×
                                    </button>
                                    <iframe
                                        className="video_iframe"
                                        src="https://www.youtube.com/embed/HQfF5XRVXjU?autoplay=1"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                        title="YouTube Video Player"
                                    ></iframe>
                                </div>
                            )
                    }

                </div>
            </div>
        </div>
    );
}



function CircularProgressBar({ percentage, label, description }) {
    const circleRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        circle.style.strokeDasharray = `${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;

        let progress = 0;
        let animationFrame;

        function animate() {
            if (progress < percentage) {
                progress += 1; // speed of animation (can be slower/faster)
                const offset = circumference - (progress / 100) * circumference;
                circle.style.strokeDashoffset = offset;
                animationFrame = requestAnimationFrame(animate);
            }
        }
        animate();
        return () => cancelAnimationFrame(animationFrame);
    }, [percentage]);

    return (
        <div className="col-lg-4 col-md-6 col-sm-9">
        
        <div className="fact_item">
            <div className="chart">
                <svg width="70" height="70">
                <circle
                    stroke="#eee"
                    fill="transparent"
                    r="32"
                    cx="35"
                    cy="35"
                    strokeWidth="6"
                    />
                <circle
                    ref={circleRef}
                    stroke="#ffa726"
                    fill="transparent"
                    r="32"
                    cx="35"
                    cy="35"
                    strokeWidth="6"
                    style={{
                        transition: "stroke-dashoffset 1s linear",
                        strokeDasharray: "0",
                        strokeDashoffset: "0",
                        transform: "rotate(-90deg)",
                        transformOrigin: "center",
                    }}
                    />
                <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="16" fontWeight="600">
                    {percentage}%
                </text>
            </svg>
            </div>

            <div className="circular_bar_details">
                <h4 className="title">{label}</h4>
                <span className="description">{description}</span>
            </div>
        </div>
        </div>
    );
}

// How to use multiple in JSX:
function StatsBar() {
    return (
        <div id="fact_area_section">
        <div className="container">
            <div className="fact-items-wrapper">
                <div className="row justify-content-center">
                        <CircularProgressBar percentage={65} label="ACTIVE MEMBERS" description="Yes we did it asap software" />
                        <CircularProgressBar percentage={90} label="PROJECTS DONE" description="Yes we did it asap software" />
                        <CircularProgressBar percentage={80} label="GET REWARDS" description="Yes we did it asap software" />
                    </div>
                </div>
            </div>
        </div>
    );
}


export { VideoSection, StatsBar };
