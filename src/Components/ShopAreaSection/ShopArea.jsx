import { useEffect, useRef, useState } from "react";
import { forwardRef } from "react";
import "./ShopArea.css";

const cardDetail = [
  { productImage: "/assets/images/home_shop_thumb01.avif", title: "Antiaging and Longevity", price: "Tk 49.99", shapeColor: "grey",cardType:"one" },
  { productImage: "/assets/images/home_shop_thumb02.avif", title: "Box Full of Muscles", price: "Tk 85.99", shapeColor: "green",cardType:"one" },
  { productImage: "/assets/images/home_shop_thumb03.avif", title: "Protein Powder 2kg", price: "Tk 85.99", shapeColor: "purple",cardType:"one" },
  { productImage: "/assets/images/home_shop_thumb04.avif", title: "Whey Protein Powder", price: "Tk 49.99", shapeColor: "blue" ,cardType:"one"}
];

function ShopArea() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const totalProducts = cardDetail.length;

  const sliderProducts = [...cardDetail, ...cardDetail];

  const slideRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);


  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateWidthOfScreen = () => setScreenWidth(window.innerWidth);

    updateWidthOfScreen();
    window.addEventListener("resize", updateWidthOfScreen);

    return () => window.removeEventListener("resize", updateWidthOfScreen);
  }, []);


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



  useEffect(() => {

    if (screenWidth >= 1500) {
      setIndex(0); // reset when crossing 1500
      return;
    }

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);


    return () => clearInterval(interval);
  }, [screenWidth]);


  useEffect(() => {

    const track = trackRef.current;

    if (!track) return;


    if (screenWidth >= 1500) {
      track.style.transition = "none";
      setIndex(0);
      track.style.transform = "translateX(0px)";
      return;
    }



    track.style.transition = `transform 1000ms ease`;

    track.style.transform = `translateX(${-index * slideWidth}px)`;


    if (index === totalProducts) {
      setTimeout(() => {
        track.style.transition = "none";
        setIndex(0);
        track.style.transform = `translateX(0px)`;
      }, 1000);
    }
  }, [index, screenWidth]);


  return (
    <div id="shop_area_section">
      <div className="container">
        <div className="row position-relative">
          <button class="arrow_button_product slide_prev_product">
            <img class="rotate_180_degree" alt="right arrow image" src="/assets/images/right-arrow-black.png" />
          </button>
          <div className="slick_list">
            <div className="slick_track" ref={trackRef}>
              {sliderProducts.map((card, i) => (
                <div className="col-xxl-3 col-lg-4 col-md-6 col-12 product_list_custome" key={i} ref={i == 0 ? slideRef : null}>
                    <ShopAreaCard {...card} />
                </div>
              ))}
            </div>
          </div>
          <button class="arrow_button_product slide_next_product">
            <img  alt="right arrow image" src="/assets/images/right-arrow-black.png" />
          </button>


          <div className="list_roller">
            <div className="dot_roller" />
          </div>
        </div>
      </div>
    </div>
  );
}



// const ShopAreaCard = forwardRef(function ShopAreaCard({ productImage, shapeColor, title, price }, ref) {
function ShopAreaCard({ productImage, shapeColor, title, price, productType,cardType})
{
  return (
    // <div className="col-xxl-3 col-lg-4 col-md-6 col-12 product_list_custome" ref={ref}>
      <div className={`shop_area_card ${cardType==='two'?"inner_shop_item":""}`}>
        <div className="card_thumb">
          <a href="/" className="card_thumb_image">
            <img src={productImage} alt={title} />
          </a>
          {cardType==="one"&&(<div className={`bottom-half-circle ${shapeColor}`} />)}
        </div>

        <div className="card_bottom">
          {cardType==="two"&&(<div className="product_nutrition_type"><a href="/">{productType}</a></div>)}
          <h4 className="title"><a href="/">{title}</a></h4>
          <span className="home-shop-price">{price}</span>

          {cardType==="one"&&(<div className="rating">
            <img src="/assets/images/star.png" alt="star" />
            <img src="/assets/images/star.png" alt="star" />
            <img src="/assets/images/star.png" alt="star" />
            <img src="/assets/images/star.png" alt="star" />
            <img src="/assets/images/half-star.png" alt="half-star" />
            <span className="total_rating">(30)</span>
          </div>)}
          

          <div className="card_button_area">
            <div className="circled_add_to_cart">
              <img src="/assets/images/shopping-cart (1).png" alt="cart" />
            </div>
            <button className="buy_now_button">Buy Now</button>
          </div>
        </div>
      </div>
    // </div>
  );
};


export default ShopArea;
export {ShopAreaCard};
