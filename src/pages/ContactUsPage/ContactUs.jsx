import HeroWithHeading from '../../Components/HeroWithHeading/HeroWithHeading';
import './ContactUs.css';

function ContactUs() {
    return <>
        <HeroWithHeading title={"Contact Us"}></HeroWithHeading>
        <section id='contact_us_area'>
            <div className="container">
                <div className='contact_us_box_wrap'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-4 col-md-6 col-sm-9'>
                            <div className="contact_us_box">
                                <div className='contact_us_box_icon'>
                                    <span className='contact_box_overlay_icon'><i class="fas fa-check"></i></span>
                                    <i class="far fa-map"></i>
                                </div>
                                <div className='contact_us_box_content'>
                                    <h5 className='title'>Office Address</h5>
                                    <p>99 NY Address Street, Brooklyn, United State</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-9'>
                            <div className="contact_us_box">
                                <div className='contact_us_box_icon'>
                                    <span className='contact_box_overlay_icon'><i class="fas fa-check"></i></span>
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div className='contact_us_box_content'>
                                    <h5 className='title'>Phone Number</h5>
                                    <p>875 7556 464 7658 <br /> 765 648 567 98</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-9'>
                            <div className="contact_us_box">
                                <div className='contact_us_box_icon'>
                                    <span className='contact_box_overlay_icon'><i class="fas fa-check"></i></span>
                                    <i class="fas fa-globe"></i>
                                </div>
                                <div className='contact_us_box_content'>
                                    <h5 className='title'>Web Connect</h5>
                                    <p>info@suxnixmail.com <br /> suxnixexample.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='contact_us_form'>
            <div className="container">
                <div className='row'>
                    <div className='col-xl-6'>
                        <div id='contact_us_map'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96811.54759587669!2d-74.01263924803828!3d40.6880494567041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1636195194646!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <div className='contact_us_form_wrap'>
                            <div className='contact_us_form_title text-xl-start text-center'>
                                <p className='sub_title'>
                                    .. request make ..
                                </p>
                                <h2 className='title'>Asked Anything You Want To Know</h2>
                            </div>
                            <form action="/contactUs">
                                <div className='row'>
                                    <div className="col-md-6">
                                        <div className='form_grp'>
                                            <label htmlFor="name">Name</label>
                                            <input type="text" id='name' placeholder='Enter Here' />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className='form_grp'>
                                            <label htmlFor="email">Email</label>
                                            <input type="text" id='email' placeholder='Enter Here' />
                                        </div>
                                    </div>
                                </div>
                                <select className='form_select'>
                                        <option>Select Subject **</option>
                                        <option value="Delivery &amp; Orders">Delivery &amp; Orders</option>
                                        <option value="Diet &amp; Exercise">Diet &amp; Exercise</option>
                                        <option value="Marketing &amp; Press">Marketing &amp; Press</option>
                                        <option value="Share Your Success">Share Your Success</option>
                                        <option value="Wholesale And Returns">Wholesale And Returns</option>
                                </select>
                                <div className='form_grp'>
                                    <label htmlFor="message">Message</label>
                                    {/* <input type="text" id='name' placeholder='Enter Here' /> */}
                                    <textarea id="message" placeholder='Enter here'></textarea>
                                </div>


                                <div className='contact_us_form_button text-center text-xl-start'>
                                    <button type='submit'>
                                        make request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}
export default ContactUs;