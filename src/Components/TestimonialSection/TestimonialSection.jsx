import { useEffect, useState } from 'react';
import './TestimonialSection.css';

const cardData = [
    {
        personName: "Lempor Kooper",
        personImage: "/assets/images/testi_avatar01.jpg",
        description:
            "Becoming more involved in administration within the (MidMichigan) health system over the years, I had been researching options for further education that would assist in this transition and fit my busy schedule",
    },
    {
        personName: "Janeta Kooper",
        personImage: "/assets/images/testi_avatar02.webp",
        description:
            "Becoming more involved in administration within the (MidMichigan) health system over the years, I had been researching options for further education that would assist in this transition and fit my busy schedule",
    },
    {
        personName: "Robert Brown",
        personImage: "/assets/images/testi_avatar03.webp",
        description:
            "Becoming more involved in administration within the (MidMichigan) health system over the years, I had been researching options for further education that would assist in this transition and fit my busy schedule",
    },
];

function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div id="testimonial_section">
            <div className="testimonial_overlay"></div>

            <div className="container">
                <div className='row justify-content-center'>

                <div className='col-xxl-8 col-xl-9 col-lg-11'>

                <div className="animated_card_section">
                    <button className="arrow_button slide_prev">
                        <img
                            className="rotate_180_degree"
                            src="/assets/images/right-arrow.png"
                            alt="right arrow image"
                        />
                    </button>

                    {/* --- Sliding Cards --- */}
                    <div className="animated_list">
                        {cardData.map((card, index) => {
                            let className = "testimonial_card";
                            if (index === currentIndex) className += " active";
                            else if (
                                index ===
                                (currentIndex === 0 ? cardData.length - 1 : currentIndex - 1)
                            )
                                className += " prev";
                            else className += " next";

                            return (
                                <div key={index} className={className}>
                                    <div className="rating_wrapper">
                                        <img alt="star image" src="/assets/images/star.png" />
                                        <img alt="star image" src="/assets/images/star.png" />
                                        <img alt="star image" src="/assets/images/star.png" />
                                        <img alt="star image" src="/assets/images/star.png" />
                                        <img alt="half star image" src="/assets/images/half-star.png" />
                                    </div>

                                    <p>{card.description}</p>

                                    <div className="animated_list_bottom">
                                        <div className="list_bottom_img_container">
                                            <img src={card.personImage} alt="avatar" />
                                        </div>
                                        <h5>{card.personName}</h5>
                                    </div>
                                </div>
                            );
                        })}
                    </div>



                    <div className="testimonial_dots">
                        {cardData.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                            ></span>
                        ))}
                    </div>

                    <button className="arrow_button slide_next">
                        <img src="/assets/images/right-arrow.png" alt="right arrow image" />
                    </button>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;
