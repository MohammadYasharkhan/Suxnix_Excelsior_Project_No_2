import './Products.css';


const productList = [
    {
        mainImage: "/assets/images/features_product01.webp", subImage: "/assets/images/features_product_shape01.avif", title: "Serious Mass",
        quality: "High-strength, 5000IU",
        description: "Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness.",
        price: "$89.99",
        oldPrice: "$117.9",
        rightAlign: "false",
    },
    {
        mainImage: "/assets/images/features_product02.webp", subImage: "/assets/images/features_product_shape02.avif", title: "Protein Whey",
        quality: "High-strength, 4000IU",
        description: "Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness.",
        price: "$59.99",
        oldPrice: "$79.99",
        rightAlign: "true",
    },
    {
        mainImage: "/assets/images/features_product03.webp", subImage: "/assets/images/features_product_shape03.webp", title: "Max Mass 3xl",
        quality: "High-strength, 4000IU",
        description: "Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness.",
        price: "$69.99",
        oldPrice: "$89.99",
        rightAlign: "false",
    }
];




function Products() {
    return <section id='products_section' className='product_section_class'>
        <div className='container'>
            <ProductWithLeftSideImage productDetails={productList[0]}></ProductWithLeftSideImage>
            <ProductWithRightSideImage productDetails={productList[1]}></ProductWithRightSideImage>
            <ProductWithLeftSideImage productDetails={productList[2]}></ProductWithLeftSideImage>
        </div>

        <div className='side_img one'>
            <img src="/assets/images/features_sec_shape01.webp" alt="side_image1" />
        </div>


        <div className='side_img two'>
            <img src="/assets/images/features_sec_shape02.webp" alt="side_image2" />
        </div>


        <div className='side_img three'>
            <img src="/assets/images/features_sec_shape03.webp" alt="side_image3" />
        </div>

    </section>
}

function ProductWithLeftSideImage({ productDetails }) {
    return <div className='single_product'>
        <div className='row justify-content-center'>
        <LeftImageContainer mainImage={productDetails.mainImage} subImage={productDetails.subImage}></LeftImageContainer>
        <SingleProductDetails details={productDetails}></SingleProductDetails>
        </div>
    </div>
}


function ProductWithRightSideImage({productDetails}) {
    return <div className='single_product'>
        <div className='row justify-content-center'>
        <SingleProductDetails details={productDetails}></SingleProductDetails>
        <RightImageContainer mainImage={productDetails.mainImage} subImage={productDetails.subImage}></RightImageContainer>
        </div>
    </div>
}




function RightImageContainer({ mainImage, subImage }) {
    return <div className='product_image_container_wrapper col-lg-6 col-md-8'>

            <div className='product_image_container'>
                <div className='main_image_container'>
                    <img src={mainImage} alt="product image" className='main_image_right' />
                </div>
            <img src={subImage} alt="sub image" className='sub_image_right' />
            </div>
    </div>
}   

function LeftImageContainer({ mainImage, subImage }) {
    return <div className='product_image_container_wrapper col-lg-6 col-md-8'>
        <div className='product_image_container'>    
            <div className="main_image_container">
                <img src={mainImage} alt="product image" className='main_image_left' />
            </div>
        <img src={subImage} alt="sub image" className='sub_image_left' />
        </div>
    </div>
}




function SingleProductDetails({ details }) {
    return (
        <div className='product_detail_container col-lg-6 col-md-10'>
            <div className={`product_detail ${details.rightAlign=='true'?'rightAlignItem':''}`}>
                <h2 className='title'>
                    <a href="/">
                        {details.title}
                    </a>
                </h2>
                <h6 className='product_quality'>{details.quality}</h6>
                <p>{details.description}</p>
                <div className='product_button'>
                    <button className='shop_button'>Shop Now</button>
                    <span className='price'>
                        {details.price}
                        <span className='old_price'>{details.oldPrice}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Products;