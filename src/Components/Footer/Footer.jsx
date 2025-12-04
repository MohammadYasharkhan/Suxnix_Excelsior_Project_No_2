import { useEffect, useState, useRef } from 'react';
import './Footer.css';
import InstagramSlider from './InstagramSlider/InstagramSloder';


const images=[
    "/assets/images/instagram_post01_e129213d-f718-4e47-a5f4-d6ec8f7ab64d.avif",
    "/assets/images/instagram_post02_a85b661a-67ea-4a36-ad29-c9e84ee797ae.avif",
    "/assets/images/instagram_post03_8902567f-4641-4a0d-8a5d-d9ab44870ead.avif",
    "/assets/images/instagram_post04_f36edf63-f2ee-407c-ad8f-24edd6fcf69d.avif",
    "/assets/images/instagram_post05_076fdf6c-6ffe-45f7-8388-6900702b3b4b.avif",
    "/assets/images/instagram_post06_ec34de05-56ce-4943-96eb-fdbc6f239030.avif",
];

function Footer() {
    // const sliderRef = useRef(null);
    // const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const slider = sliderRef.current;
    //     const totalImages = slider.children.length;

    //     const interval = setInterval(() => {
    //         // Move to next image
    //         setIndex((prev) => (prev + 1) % totalImages);
    //     }, 5000); // wait 5 seconds between slides

    //     return () => clearInterval(interval);
    // }, []);

    // useEffect(() => {
    //     const slider = sliderRef.current;
    //     slider.style.transform = `translateX(-${index * 258}px)`; // adjust width per image
    //     slider.style.transition = "transform 0.8s ease-in-out";
    // }, [index]);



    return <footer className='footer_area'>
        <InstagramSlider images={images}></InstagramSlider>
        {/* <div className='footer_instagram'>
            <div className='container'>
                <div className='row slick_slider'>

                    <div className='slick_list'>
                        <div className='silck_track'>

                        </div>
                    </div> */}
                {/* <div className='footer_animated_card_list' ref={sliderRef}>


                    <img src="/assets/images/instagram_post01_e129213d-f718-4e47-a5f4-d6ec8f7ab64d.avif" alt="instagram images one" />
                    <img src="/assets/images/instagram_post02_a85b661a-67ea-4a36-ad29-c9e84ee797ae.avif" alt="instagram images one" />
                    <img src="/assets/images/instagram_post03_8902567f-4641-4a0d-8a5d-d9ab44870ead.avif" alt="instagram images one" />
                    <img src="/assets/images/instagram_post04_f36edf63-f2ee-407c-ad8f-24edd6fcf69d.avif" alt="instagram images one" />
                    <img src="/assets/images/instagram_post05_076fdf6c-6ffe-45f7-8388-6900702b3b4b.avif" alt="instagram images one" />
                    <img src="/assets/images/instagram_post06_ec34de05-56ce-4943-96eb-fdbc6f239030.avif" alt="instagram images one" />

                    <img src="/assets/images/instagram_post01_e129213d-f718-4e47-a5f4-d6ec8f7ab64d.avif" alt="instagram images one" />
                    <img src="/assets/images/instagram_post02_a85b661a-67ea-4a36-ad29-c9e84ee797ae.avif" alt="instagram images one" />
                    <img src="/assets/images/instagram_post05_076fdf6c-6ffe-45f7-8388-6900702b3b4b.avif" alt="instagram images one" />
                    <img src="/assets/images/instagram_post06_ec34de05-56ce-4943-96eb-fdbc6f239030.avif" alt="instagram images one" />
                    <img src="/assets/images/instagram_post03_8902567f-4641-4a0d-8a5d-d9ab44870ead.avif" alt="instagram images one" />
                    <img src="/assets/images/instagram_post04_f36edf63-f2ee-407c-ad8f-24edd6fcf69d.avif" alt="instagram images one" />
                </div> */}
                {/* </div>
            </div>
        </div> */}

        <div className='footer_main_wrapper'>
            <div className='container'>
                <div className='footer_widge_wrapper'>
                    <div className='row'>


                        <div className='sub_container_one col-lg-4 col-md-7'>
                            <div className='footer_widge'>
                                <div className='footer_logo'>
                                    <a href="/">
                                        <img src="/assets/images/white_logo.webp" alt="white logo" />
                                    </a>
                                </div>
                                <div className='footer_text'>
                                    <p>Making beauty especially relating complot especial common questions tend to recur through posts or queries standards vary orem donor command tei.</p>
                                </div>

                                <div className='footer_social'>
                                    <a href="#">
                                        <img src="/assets/images/facebook-app-symbol (1).png" alt="facebook image" />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/images/twitter (1).png" alt="facebook image" />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/images/social.png" alt="facebook image" />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/images/linkedin (1).png" alt="facebook image" />
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className='sub_container_two col-lg-2 col-md-5 col-sm-6'>
                            <div className='footer_widge second_box'>
                                <h4 className='fw_title'>About US</h4>
                                <ul className='footer_list'>
                                    <li><a href="/">Shop</a></li>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">Blogs</a></li>
                                    <li><a href="/">Product</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className='sub_container_two col-lg-2 col-md-5 col-sm-6'>
                            <div className='footer_widge'>
                                <h4 className='fw_title'>Support</h4>
                                <ul className='footer_list'>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Blogs</a></li>
                                    <li><a href="/">Blogs Post</a></li>
                                    <li><a href="/">Contact</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className='sub_container_one col-lg-4 col-md-5'>
                            <div className='footer_widge fourth_box'>
                                <h4 className='fw_title'>Contact Us</h4>
                                <div className='footer_contact_wrapper'>
                                    <p>4140 Parker Rd. Allentown, New Mexico 31134</p>

                                    <ul className='footer_list'>
                                        <li>
                                            <img src="/assets/images/call.png" alt="phone image" />
                                            +1 31-6555-0116
                                        </li>
                                        <li>
                                            <img src="/assets/images/email.png" alt="phone image" />
                                            Suxnix@example.com
                                        </li>
                                        <li>
                                            <img src="/assets/images/website.png" alt="phone image" />
                                            www.suxnixdomain.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer_shape_one'>
                <img src="/assets/images/footer_shape01_37052e5f-b0c1-4b24-a968-ab1bf6162c54.avif" alt="shape one" />
            </div>

            <div className='footer_shape_two'>
                <img src="/assets/images/footer_shape02_6c27ba26-cc9a-421c-ac37-46af9a3a907a.avif" alt="shape two" />
            </div>
        </div>


        <div className='copywrite_wrapper'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-7'>
                        <div className='copywrite_text'>
                            <p>Copyright © 2025 Suxnix All Rights Reserved.</p>
                        </div>
                    </div>

                    <div className='col-md-5'>
                        <div className='payment_img_conatiner text-md-end text-center'>
                            <img src="/assets/images/card_img_7d7d11a3-0daa-4469-956c-846a4c9b8acf.avif" alt="payment card images" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;