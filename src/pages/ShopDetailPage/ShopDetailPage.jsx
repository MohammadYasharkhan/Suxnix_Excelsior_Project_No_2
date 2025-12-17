import { useEffect, useState, useRef, useContext } from "react";
import HeroWithHeading from "../../Components/HeroWithHeading/HeroWithHeading";
import { ShopAreaCard } from "../../Components/ShopAreaSection/ShopArea";
import { ProductSepratorContext } from "../../context/StoreContext";
import "./ShopDetailPage.css";


// var cardDetail = [
//     { productImage: "/assets/images/home_shop_thumb06_6a015f7a-5653-479c-9439-825779ead9e7.avif", title: "Serious Mass 2kg", price: "Tk 49.99", shapeColor: "green", cardType: "one" },
//     { productImage: "/assets/images/home_shop_thumb05.avif", title: "Whey Protein Powder", price: "Tk 49.99", shapeColor: "green", cardType: "one" },
//     { productImage: "/assets/images/home_shop_thumb02.avif", title: "Serious Mass 2kg", price: "Tk 49.99", shapeColor: "green", cardType: "one" },
// ];

function ShopDetailPage() {

    const { getProductItems, increment, decrement, updateCountForOneIdQty } = useContext(ProductSepratorContext);
    var cardDetail = getProductItems(13, 15);


    const [quantity, setQuantity] = useState(1);
    const [specificOneQty, setSepcificOneQty] = useState({ 1: 1 });
    useEffect(() => {
        setSepcificOneQty((prev) => (
            { ...prev, 1: quantity }
        ));
    }, [quantity]);
    // console.log(cardDetail);

    const [imageChanger, setImageChanger] = useState(
        "/assets/images/shop-details-thumb03.webp"
    );
    const [descriptionChange, setDescriptionChange] = useState("description");

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
        if (screenWidth >= 992) {
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


        if (screenWidth >= 992) {
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
        <>
            <HeroWithHeading title={"Shop Details"}></HeroWithHeading>
            <section id="shop_detail_display_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="shop_detail_display_left">
                                <div className="shop_display_image_wrap">
                                    <img src={imageChanger} alt="display image" />
                                </div>
                                <div className="shop_display_list_wrap">
                                    <ul className="shop_display_ul">
                                        <li className="shop_display_ul_item">
                                            <a
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setImageChanger(
                                                        "/assets/images/shop-details-thumb03.webp"
                                                    );
                                                }}
                                            >
                                                <img
                                                    src="/assets/images/shop-details-thumb03.avif"
                                                    alt="display image"
                                                />
                                            </a>
                                        </li>
                                        <li className="shop_display_ul_item">
                                            <a
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setImageChanger(
                                                        "/assets/images/shop-details-thumb07.webp"
                                                    );
                                                }}
                                            >
                                                <img
                                                    src="/assets/images/shop-details-thumb07.avif"
                                                    alt="display image"
                                                />
                                            </a>
                                        </li>
                                        <li className="shop_display_ul_item">
                                            <a
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setImageChanger(
                                                        "/assets/images/shop-details-thumb06.webp"
                                                    );
                                                }}
                                            >
                                                <img
                                                    src="/assets/images/shop-details-thumb06.avif"
                                                    alt="display image"
                                                />
                                            </a>
                                        </li>
                                        <li className="shop_display_ul_item">
                                            <a
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setImageChanger(
                                                        "/assets/images/shop-details-thumb04.webp"
                                                    );
                                                }}
                                            >
                                                <img
                                                    src="/assets/images/shop-details-thumb04.avif"
                                                    alt="display image"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shop_detail_display_right">
                                <h4 className="title">Antiaging and Longevity</h4>
                                <div className="shop_display_meta">
                                    <ul>
                                        <li>
                                            Vendor:{" "}
                                            <a href="javascript:void(0)">Fashion Shofy Ecommerce</a>
                                        </li>

                                        <li className="shop_display_review">
                                            <div className="rating">
                                                <div className="fas fa-star"></div>
                                                <div className="fas fa-star"></div>
                                                <div className="fas fa-star"></div>
                                                <div className="fas fa-star"></div>
                                                <div className="fas fa-star"></div>
                                            </div>
                                            <span>(4.5)</span>
                                        </li>

                                        <li>
                                            <span>
                                                Id :<a href="javascript:void(0)"> 7827143852089</a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="shop_detail_display_price">
                                    <h2 className="price">TK 49.99</h2>
                                    <h5 className="status">- instock</h5>
                                </div>

                                <p>
                                    The true strength of Suxnix : Whey Protein Isolates (WPIs) are
                                    the purest form of whey protein that currently exists. WPIs
                                    are costly to use, but rate among the best...
                                </p>

                                <div className="shop_detail_display_details_list">
                                    <ul>
                                        <li>
                                            Title :<span>Default Title</span>
                                        </li>

                                        <li>
                                            Vendor :<span>Fashion Shofy Ecommerce</span>
                                        </li>

                                        <li>
                                            Type :<span>Supplement</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="shop_detail_display_purchase_wrap">
                                    <div className="sdd-wrap-inc">
                                        <div
                                            className="dec qtybutton"
                                            onClick={() => {
                                                setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
                                            }}
                                        >
                                            -
                                        </div>
                                        <div className="number_display_div">{quantity}</div>
                                        <div
                                            className="inc qtybutton"
                                            onClick={() => {
                                                setQuantity((prev) => prev + 1);
                                            }}
                                        >
                                            +
                                        </div>
                                    </div>

                                    <button className="cart_button" onClick={() => { updateCountForOneIdQty(specificOneQty[1]) }}>Add To Cart</button>
                                </div>

                                <div className="shop_detail_display_bottom">
                                    <div className="meta_items">
                                        <span className="meta_lable">Tags:</span>
                                        <span className="meta_value">
                                            <a href="/ourshop">medecine</a>
                                            <a href="/ourshop">Protin</a>
                                        </span>
                                    </div>
                                    <div className="meta_items">
                                        <span className="meta_lable">Categories:</span>
                                        <span className="meta_value">
                                            <a href="/ourshop">Nutrition</a>
                                            <a href="/ourshop">Protin</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="shop_detail_middle_description">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="shop_detail_middle_description_wrap">
                                <ul className="middle_description_ul">
                                    <li>
                                        <a
                                            href="#"
                                            className={`${descriptionChange === "description"
                                                ? "border_onstate"
                                                : ""
                                                }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setDescriptionChange("description");
                                            }}
                                        >
                                            Description
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className={`${descriptionChange === "additional information"
                                                ? "border_onstate"
                                                : ""
                                                }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setDescriptionChange("additional information");
                                            }}
                                        >
                                            Additional Information
                                        </a>
                                    </li>
                                </ul>

                                <div className="middle_description_content">
                                    {descriptionChange === "description" && (
                                        <>
                                            <h4 className="title">The true strength of Suxnix :</h4>
                                            <p>
                                                Whey Protein Isolates (WPIs) are the purest form of whey
                                                protein that currently exists. WPIs are costly to use,
                                                but rate among the best proteins that money can buy.
                                                That’s why they’re the first ingredient you read on the
                                                Gold Standard 100% Whey™ label. By using WPI as the
                                                primary ingredient along with premium ultra-filtered
                                                whey protein concentrate (WPC), we’re able to pack 24
                                                grams of protein into every serving to support your
                                                muscle building needs after training. ON’attention to
                                                detail also extends to mixability. This superior quality
                                                powder has been instantized to mix easliy using a shaker
                                                cup or just a glass and spoon. There’s no doubt that
                                                this is the standard by which all other whey proteins
                                                are measured.
                                            </p>
                                            <h4 className="title">Suxnix the basics :</h4>
                                            <ul>
                                                <li>
                                                    82% Protein by Weight (24g of Protein Per 31.5g
                                                    Serving Size).
                                                </li>
                                                <li>Whey Protein Isolates (WPI) Main Ingredient.</li>
                                                <li>
                                                    Whey Protein Micro-functions from Whey Protein Isolate
                                                    and Ultra-Filtered Whey Protein Concentrate.
                                                </li>
                                                <li>
                                                    Over 4g of Naturally Occurring Glutamine & Glutamic
                                                    Acid in Each Serving.
                                                </li>
                                                <li>
                                                    More than 5g of the Naturally Occurring Branched Chain
                                                    Amino Acids (BCAAs) Leucine, Isoleucine, and Valine in
                                                    Each Serving.
                                                </li>
                                                <li>The “Gold Standard” for Protein Quality.</li>
                                                <li>Banned Substance Tested Protein</li>
                                                <li>
                                                    French Vanilla Creme Flavored Whey Protein Powder
                                                </li>
                                            </ul>
                                        </>
                                    )}

                                    {descriptionChange === "additional information" && (
                                        <>
                                            <h4 className="title_two">Additional Information</h4>
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th>Calories</th>
                                                        <td>110</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Total Fat</th>
                                                        <td>1 kg</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Saturated Fat</th>
                                                        <td>0.5 g</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cholesterol</th>
                                                        <td>40 mg</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Total Carbohydrate</th>
                                                        <td>2 g</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Protein</th>
                                                        <td>24 g</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Total Sugars</th>
                                                        <td>2 g</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Sodium</th>
                                                        <td>100 mg</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Calcium</th>
                                                        <td>140 mg</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Potassiun</th>
                                                        <td>160 mg</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="related_products_area">
                <div className="container">
                    <div className="related_product_wrap">
                        <h2 className="title">Related Products</h2>
                        <div className="row position-relative">
                            <button className="arrow_button_product slide_prev_product">
                                <img
                                    className="rotate_180_degree"
                                    alt="right arrow image"
                                    src="/assets/images/right-arrow-black.png"
                                />
                            </button>

                            <div className="slick_list custome_width_shopDetail">
                                <div className="slick_track" ref={trackRef}>
                                    {sliderProducts.map((card, i) => (
                                        <div
                                            className="col-lg-4 col-md-6 col-12"
                                            key={i}
                                            ref={i === 0 ? slideRef : null}
                                        >
                                            <ShopAreaCard {...card} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button class="arrow_button_product slide_next_product">
                                <img
                                    alt="right arrow image"
                                    src="/assets/images/right-arrow-black.png"
                                />
                            </button>

                            <div className="list_roller">
                                <div className="dot_roller" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ShopDetailPage;
