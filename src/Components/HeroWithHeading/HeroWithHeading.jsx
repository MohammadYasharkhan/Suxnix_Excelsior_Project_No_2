import './HeroWithHeading.css';

function HeroWithHeading({title}) {
    return <section className='hero_with_heading_bg' id='hero_with_heading'>
        <div className="container">
            <div className='row justify-content-center'>
                <div className='col-xl-10'>
                    <div className='hero_with_heading_content text-center'>
                        <h2 className='title'>
                            {title}
                        </h2>
                        <ul className='bottom'>
                            <li><a href="/"><span>Home</span></a></li>
                            <li><a><span>{title}</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="hero_heading_shape_one">
            <img src="/assets/images/video_shape01_c7268870-bd95-4dca-a7ce-141f63bc7cd0.avif" alt="image one" />
        </div>
        <div className="hero_heading_shape_two">
            <img src="/assets/images/video_shape02_0d75be31-08e5-4c25-bc04-c50f7d2c90fd.avif" alt="image two" />
        </div>
    </section>
}

export default HeroWithHeading;