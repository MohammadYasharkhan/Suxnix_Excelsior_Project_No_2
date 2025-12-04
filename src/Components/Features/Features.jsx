import './Features.css';
import FeatureCard from './FeaturesCard/FeatureCard';

function Features()
{
    return <div id='feature_section' className='feature_section_bg'>
        <div className='container'>
            <div className='row align-items-center'>

                <div className='col-xxl-6 col-lg-5 order-0 order-lg-2'>
                    <div className='feature_main_image'>
                        <img src="/assets/images/features_img_00ec7c4b-95e1-4661-b180-7c2bd4db7ebb.webp" alt="image" />
                    </div>
                </div>

                <div className='all_features col-xxl-6 col-lg-7'>
                    <div className='row justify-content-center'>
                            <FeatureCard icon={"assets/images/feature_icon_01.png"} title={"MULTI FRUITS FLAVOUR"} description={"A thing added to something else in order to complete or enhance it."} marginClass={"feature_margin_one"}/>
                            <FeatureCard icon={"assets/images/feature_icon_01.png"} title={"Flower Formula"} description={"A thing added to something else in order to complete or enhance it."} marginClass={"feature_margin_two"}/>
                            <FeatureCard icon={"assets/images/feature_icon_01.png"} title={"Fishbone Diagram"} description={"A thing added to something else in order to complete or enhance it."} marginClass={"feature_margin_three"}/>
                            <FeatureCard icon={"assets/images/feature_icon_01.png"} title={"100% Fat Blasting"} description={"A thing added to something else in order to complete or enhance it."} marginClass={"feature_margin_four"}/>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='feature_content'> */}
            {/* <div className='all_features'>
                <div className='feature_card_container card_align_start'>
                    <FeatureCard icon={"assets/images/feature_icon_01.png"} title={"MULTI FRUITS FLAVOUR"} description={"A thing added to something else in order to complete or enhance it."}/>
                    <FeatureCard icon={"assets/images/feature_icon_01.png"} title={"Flower Formula"} description={"A thing added to something else in order to complete or enhance it."}/>
                </div>
                <div className='feature_card_container card_align_end'>
                    <FeatureCard icon={"assets/images/feature_icon_01.png"} title={"Fishbone Diagram"} description={"A thing added to something else in order to complete or enhance it."}/>
                    <FeatureCard icon={"assets/images/feature_icon_01.png"} title={"100% Fat Blasting"} description={"A thing added to something else in order to complete or enhance it."}/>
                </div>
            </div> */}
            {/* <div className='feature_main_image'>
                <img src="/assets/images/features_img_00ec7c4b-95e1-4661-b180-7c2bd4db7ebb.webp" alt="image" />
            </div> */}
        {/* </div> */}
    </div>
}

export default Features;