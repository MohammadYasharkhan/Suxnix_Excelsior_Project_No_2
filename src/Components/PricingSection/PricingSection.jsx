import './PricingSection.css';



const pricingCardDetails=[
    {
        outLineOrange:"false",
        hasCardLable:"false",
        cardItemImage:"/assets/images/pricing_01.avif",
    },
    {
        outLineOrange:"false",
        hasCardLable:"true",
        cardLable:"one",
        cardItemImage:"/assets/images/pricing_02.avif",
    },
    {
        outLineOrange:"true",
        hasCardLable:"true",
        cardLable:"two",
        cardItemImage:"/assets/images/pricing_03.avif",
    },
];  


function PricingSection()
{
    return <div id='pricing_section'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-xl-6 col-lg-8'>
                    <div className='pricing_heading'>
                        <p className='sub_title'>.. Suxnix Plans ..</p>
                        <h2 className='title'>SUPPLEMENT PACKAGES</h2>
                    </div>
                </div>
            </div>

            <div className='pricing_card_wrap'>
                <div className='row align-items-end justify-content-center'>
                <PricingCard singleCardDetails={pricingCardDetails[0]}></PricingCard>
                <PricingCard singleCardDetails={pricingCardDetails[1]}></PricingCard>
                <PricingCard singleCardDetails={pricingCardDetails[2]}></PricingCard>
                </div>
            </div>  
        </div>
    </div>
}

export default PricingSection;




function PricingCard({singleCardDetails})
{

    return <div className='col-lg-4 col-md-6 col-sm-9'>
    <div className='price_card_sub_wrapper'>

            {singleCardDetails.hasCardLable==="false"?null:(
                singleCardDetails.cardLable=="one"?
                (
                                                                <div className='lable_card_one'>
                                                                    <h4 className='lable_card_one_title lable_card_one_bgcolor'>★ Most Popular ★</h4>
                                                                </div>
                                                                ):
                                                                (
                                                                <div className='lable_card_one'>
                                                                    <h4 className='lable_card_one_title lable_card_two_bgcolor'>✓ Best Value</h4>
                                                                </div>
                                                            ))}
                <div className={`single_card ${singleCardDetails.outLineOrange==='true'?'outline_orange':null}`}>
                        <div className='pricing_head'>
                            <span>1 Bottle Of</span>
                            <h3 className='pricing_head_title'>Suxnix</h3>
                            <p>(1 x 250 veggie caps bottle)</p>
                        </div>

                        <div className='pricing_card_image'>
                                <img src={singleCardDetails.cardItemImage} alt="pricing image" />
                        </div>

                        <div className='pricing_card_price'>
                            <h3 className={`${singleCardDetails.outLineOrange==="true" ? 'orange_color' : null}`}>$69</h3>
                            <span className={`${singleCardDetails.outLineOrange==="true" ? 'orange_color' : null}`}>per <br /> bottle</span>
                        </div>

                        <h5 class="total">($69 TOTAL)</h5>

                        <div class="price_savings">
                                <h4 class="save">Save 14%</h4>
                                <span>+ Free Shipping</span>
                        </div>

                        <div className='pricing_card_button'>
                            <a href="/">BUY NOW <span>365 Day Full Money Back Guaranteed</span></a>
                        </div>
                </div>  
            </div>
    </div>
}