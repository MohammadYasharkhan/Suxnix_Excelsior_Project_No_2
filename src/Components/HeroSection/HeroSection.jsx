import './HeroSection.css';

function HeroSection() {
    return (
        <section id='hero_section' className='hero_section_main'>

            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xxl-8 col-xl-7 col-lg-8 col-md-10'>
                        <div className='center_banner_heading text-center'>
                            <p className='center_banner_heading_p1'>.. Increased Energy With SUXNIX ..</p>
                            <h2 className='center_banner_heading_p2'>Mix Protein Provided Way To Growth</h2>
                            <a href="/" className='btn-2 shop_button'>Shop Now</a>
                        </div>  
                    </div>
                </div>

                <div className='row'>
                    <div className="col-12">

                    <div className='center_banner_bottom text-center'>
                            {/* <div className='image_conatiner'> */}
                                <img src="assets/images/banner_round_bg_b113813b-23c3-450b-846b-d4d4d9541856.webp" className='hero_green_bg' alt="green background" />
                                <img src="assets/images/banner_img01_4dfc6924-a7d3-4e69-abc4-4e1199127900.webp" alt="Bottle 1" className='bottle_image' />
                            {/* </div> */}
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className='center_banner'>
                <div className='center_banner_heading'>
                    <div>
                    <p className='center_banner_heading_p1'>.. Increased Energy With SUXNIX ..</p>
                    <h2 className='center_banner_heading_p2'>Mix Protein Provided Way To Growth</h2>
                    </div>
                </div>  

                <div className='center_banner_bottom'>
                    <div className='image_conatiner'>
                        <img src="assets/images/banner_round_bg_b113813b-23c3-450b-846b-d4d4d9541856.webp" alt="green background" />
                        <img src="assets/images/banner_img01_4dfc6924-a7d3-4e69-abc4-4e1199127900.webp" alt="Bottle 1" className='bottle_image' />
                    </div>
                </div>
            </div> */}

            <div className='banner_shape left_leaf' >
                <img src="assets/images/banner_shape01.webp" alt="left leaf" />
            </div>

            <div className='banner_shape right_leaf'>
                <img src="assets/images/banner_shape02.avif" alt="right leaf" />
            </div>


            <div className='banner_shape bowel_with_leaf_one'>
                <img src="assets/images/banner_shape04.avif" alt="bowel_with_leaf" />
            </div>
            

            <div className='banner_shape hero_powder'>
                <img src="assets/images/banner_shape03.avif" alt="powder_image" />
            </div>
        </section>
    );
}

export default HeroSection;
