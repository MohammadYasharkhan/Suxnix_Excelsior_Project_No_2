import { useState, useEffect, useRef, useContext} from 'react';
import HeroWithHeading from '../../Components/HeroWithHeading/HeroWithHeading';
import { ShopAreaCard } from '../../Components/ShopAreaSection/ShopArea';
import './OurShopPage.css';
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import { ProductSepratorContext } from '../../context/StoreContext';


// const shopItemsData = [
//     { productImage: "/assets/images/home_shop_thumb02.avif", title: "Amino Energy Health 2kg", price: "Tk 59.99", productType: "Fat Burners", cardType: "two" },
//     { productImage: "/assets/images/home_shop_thumb01.avif", title: "Antiaging and Longevity", price: "Tk 49.99", productType: "Nutrition", cardType: "two" },
//     { productImage: "/assets/images/home_shop_thumb03.avif", title: "Box Full Of Muscels", price: "Tk 85.99", productType: "Burners", cardType: "two" },
//     { productImage: "/assets/images/home_shop_thumb04.avif", title: "Protein Powder 2kg", price: "Tk 85.99", productType: "Medicine", cardType: "two" },
//     { productImage: "/assets/images/home_shop_thumb05.avif", title: "Seriour Mass 2kg", price: "Tk 49.99", productType: "Fat Burners", cardType: "two" },
//     { productImage: "/assets/images/home_shop_thumb06_6a015f7a-5653-479c-9439-825779ead9e7.avif", title: "Seriour Mass 2kg", price: "Tk 49.99", productType: "Nurtition", cardType: "two" },
//     { productImage: "/assets/images/home_shop_thumb03.avif", title: "Suxnix Natural Vitamin Supplement", price: "Tk 29.99", productType: "Protein", cardType: "two" },
//     { productImage: "/assets/images/home_shop_thumb02.avif", title: "Whey Protein Powder", price: "Tk 49.99", productType: "Nutrition", cardType: "two" }
// ];

function OurShopPage() {

    const {getProductItems}=useContext(ProductSepratorContext);
    var shopItemsData=getProductItems(5,12);

    const noUIsliderRef = useRef(null);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500);
    const [tempMin, setTempMin] = useState(String(minPrice));
    const [tempMax, setTempMax] = useState(String(maxPrice));
    const [sortedAccordingToCategory, setSortedAccordingToCategory] = useState(shopItemsData);
    const [sortedItems, setSortedItems] = useState(sortedAccordingToCategory);
    const isFirstRun = useRef(true);

    const [filterAccordingToPrice, setFilterAccordingToPrice] = useState(sortedItems);

    const handleSortAccordingToCategory = (e) => {
        const value = e.target.dataset.value;
        console.log(value);
        var newFilteredArray = [];
        var lastCase = null;

        switch (value) {
            case "All":
                newFilteredArray = shopItemsData;
                lastCase = 'All';
                break;
            case "Burners":
                if (lastCase === "Burners") {
                    break;
                }
                else {
                    newFilteredArray.length = 0;
                    shopItemsData.forEach(data => {
                        if (data.productType === "Burners") {
                            newFilteredArray.push(data);
                        }
                    });
                    console.log(newFilteredArray);
                }
                lastCase = 'Burners';
                break;
            case "Fat Burners":
                if (lastCase === "Fat Burners") {
                    break;
                }
                else {
                    newFilteredArray.length = 0;
                    shopItemsData.forEach(data => {
                        if (data.productType === "Fat Burners") {
                            newFilteredArray.push(data);
                        }
                    });
                    console.log(newFilteredArray);
                }
                lastCase = 'Fat Burners';
                break;
            case "Medicine":
                if (lastCase === "Medicine") {
                    break;
                }
                else {
                    newFilteredArray.length = 0;
                    shopItemsData.forEach(data => {
                        if (data.productType === "Medicine") {
                            newFilteredArray.push(data);
                        }
                    });
                    console.log(newFilteredArray);
                }
                lastCase = 'Medicine';
                break;
            case "Nutrition":
                if (lastCase === "Nutrition") {
                    break;
                }
                else {
                    newFilteredArray.length = 0;
                    shopItemsData.forEach(data => {
                        if (data.productType === "Nutrition") {
                            newFilteredArray.push(data);
                        }
                    });
                    console.log(newFilteredArray);
                }
                lastCase = 'Nutrition';
                break;
            case "Protein":
                if (lastCase === "Protein") {
                    break;
                }
                else {
                    newFilteredArray.length = 0;
                    shopItemsData.forEach(data => {
                        if (data.productType === "Protein") {
                            newFilteredArray.push(data);
                        }
                    });
                    console.log(newFilteredArray);
                }
                lastCase = 'Protein';
                break;
            default:
                break;
        }
        setSortedAccordingToCategory(newFilteredArray);
    };

    useEffect(() => {
        setSortedItems(sortedAccordingToCategory);
    }, [sortedAccordingToCategory]);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return; // Skip first run
        }
        else {
            handelSortAccordingToMinMaxPrice();
        }
    }, [minPrice, maxPrice, sortedItems]);

    const handelSortAccordingToMinMaxPrice = () => {
        const filtered = sortedItems.filter(item => {
            const price = parseFloat(item.price.replace("Tk ", ""));
            return price >= minPrice && price <= maxPrice;
        });
        setFilterAccordingToPrice(filtered);
    };

    const handleSort = (e) => {
        const value = e.target.value;
        let sorted = [...sortedItems];

        switch (value) {

            case "best-selling":
            case "manual":
                sorted = [...sortedItems]; // default
                break;

            case "title-ascending":
                sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;

            case "title-descending":
                sorted.sort((a, b) => b.title.localeCompare(a.title));
                break;

            case "price-ascending":
                sorted.sort((a, b) =>
                    parseFloat(a.price.replace("Tk ", "")) -
                    parseFloat(b.price.replace("Tk ", ""))
                );
                break;

            case "price-descending":
                sorted.sort((a, b) =>
                    parseFloat(b.price.replace("Tk ", "")) -
                    parseFloat(a.price.replace("Tk ", ""))
                );
                break;

            case "created-ascending":
                // You can add date in objects later
                break;

            case "created-descending":
                // You can add date in objects later
                break;

            default:
                break;
        }

        setSortedItems(sorted);
    };

    const handleApplyPriceFilter = () => {
        setMinPrice(tempMin);
        setMaxPrice(tempMax);

        if (noUIsliderRef.current?.noUiSlider) {
            noUIsliderRef.current.noUiSlider.set([tempMin, tempMax]);
        }
    };


    useEffect(() => {
        if (!noUIsliderRef.current) return;

        if (!noUIsliderRef.current.noUiSlider) {
            noUiSlider.create(noUIsliderRef.current, {
                start: [0, 500],
                connect: true,
                range: {
                    min: 0,
                    max: 500,
                },
            });

            noUIsliderRef.current.noUiSlider.on("update", (values) => {
                const min = Math.round(values[0]);
                const max = Math.round(values[1]);

                setMinPrice(min);
                setMaxPrice(max);
                setTempMin(min);
                setTempMax(max);
            });
        }
    }, []);
    return <>
        <HeroWithHeading title={"Our Shop"}></HeroWithHeading>


        <div className='inner_shop_section'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-9 col-lg-8 col-md-12 col-sm-8'>
                        <div className='shop_top_wrap'>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='shop_top_wrap_left' >
                                        <p>
                                            {
                                                sortedAccordingToCategory.length === 0
                                                    ? `Showing 0 of 0 results`
                                                    : sortedAccordingToCategory.length === 1 ? `Showing 1 of 1 results` : `Showing 1-${sortedAccordingToCategory.length} of ${sortedAccordingToCategory.length}`
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='shop_top_wrap_right'>
                                        <div className='shop_top_sorting_wrap'>
                                            <select name="sort_by" id="sortBy" className='select_wrap' onChange={handleSort}>
                                                <option value="manual">Featured</option>
                                                <option value="best-selling">Best selling</option>
                                                <option value="title-ascending">Alphabetically, A-Z</option>
                                                <option value="title-descending">Alphabetically, Z-A</option>
                                                <option value="price-ascending">Price, low to high</option>
                                                <option value="price-descending">Price, high to low</option>
                                                <option value="created-ascending">Date, old to new</option>
                                                <option value="created-descending">Date, new to old</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='shop_bottom_wrap'>
                            <div className="row">
                                {
                                    filterAccordingToPrice.map((itemData, index) => (
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <ShopAreaCard {...itemData}></ShopAreaCard>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-4 col-md-8 col-sm-8'>
                        <aside className='inner_shop_side_bar'>
                            <div className='widget'>
                                <h4 className='shop_side_bar_title'>
                                    Filter By Price
                                </h4>
                                <div id="shop_side_bar_price_slider" ref={noUIsliderRef}></div>
                                <div className='shop_side_bar_price_display'>
                                    <span>Price:</span>
                                    <div className='price'>
                                        {/* {minPrice} - {maxPrice} */}
                                        <input
                                            type="text"
                                            value={tempMin}
                                            onChange={(e) => {
                                                const value = e.target.value;

                                                // allow empty string
                                                if (value === "") {
                                                    setTempMin("");
                                                    return;
                                                }

                                                // allow only digits
                                                if (/^\d+$/.test(value)) {
                                                    setTempMin(value);
                                                }
                                            }}
                                            onWheel={(e) => e.target.blur()}   // disable scroll changes
                                        />
                                        <span>-</span>
                                        <input
                                            type="text"
                                            value={tempMax}
                                            onChange={(e) => {
                                                const value = e.target.value;

                                                if (value === "") {
                                                    setTempMax("");
                                                    return;
                                                }

                                                if (/^\d+$/.test(value)) {
                                                    setTempMax(value);
                                                }
                                            }}
                                            onWheel={(e) => e.target.blur()}
                                        />

                                    </div>
                                    <input type="submit" onClick={handleApplyPriceFilter} />
                                </div>
                            </div>
                            <div className='widget'>
                                <h4 className='shop_side_bar_title'>
                                    Categories
                                </h4>
                                <ul className='categories_list'>
                                    <li>
                                        <button data-value="All" onClick={handleSortAccordingToCategory}>All
                                            <i className='fas fa-angle-double-right'></i>
                                        </button>
                                    </li>
                                    <li>
                                        <button data-value="Burners" onClick={handleSortAccordingToCategory}>Burners
                                            <i className='fas fa-angle-double-right'></i>
                                        </button>
                                    </li>
                                    <li>
                                        <button data-value="Fat Burners" onClick={handleSortAccordingToCategory}>Fat Burners
                                            <i className='fas fa-angle-double-right'></i>
                                        </button>
                                    </li>
                                    <li>
                                        <button data-value="Medicine" onClick={handleSortAccordingToCategory}>Medicine
                                            <i className='fas fa-angle-double-right'></i>
                                        </button>
                                    </li>
                                    <li>
                                        <button data-value="Nutrition" onClick={handleSortAccordingToCategory}>Nutrition
                                            <i className='fas fa-angle-double-right'></i>
                                        </button>
                                    </li>
                                    <li>
                                        <button data-value="Protein" onClick={handleSortAccordingToCategory}>Protein
                                            <i className='fas fa-angle-double-right'></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className='widget'>
                                <h4 className='shop_side_bar_title'>
                                    Latest Products
                                </h4>
                                <ul className='latest_product_list'>
                                    <LPSmallCard image={"/assets/images/home_shop_thumb06_6a015f7a-5653-479c-9439-825779ead9e7.avif"}
                                        title={"Serious Mass 2kg"}
                                        price={"Tk 49.99"}
                                    ></LPSmallCard>
                                    <LPSmallCard image={"/assets/images/home_shop_thumb02.avif"} title={"why protein powder"} price={"Tk 49.99"}></LPSmallCard>
                                    <LPSmallCard image={"/assets/images/home_shop_thumb05.avif"} title={"Serious Mass 2kg"} price={"Tk 49.99"}></LPSmallCard>
                                </ul>
                            </div>
                            <div className='widget'>
                                <h4 className='shop_side_bar_title'>
                                    Filter By Price
                                </h4>
                                <ul className='product_tag_list'>
                                    <li><button data-value="Medicine" onClick={handleSortAccordingToCategory}>Medicine</button></li>
                                    <li><button data-value="Protein" onClick={handleSortAccordingToCategory}>Protein</button></li>
                                    <li><button data-value="Medicine" onClick={handleSortAccordingToCategory}>Supplement</button></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </>
}



function LPSmallCard({ image, title, price }) {
    return <li className='d-flex align-items-center small_card_item'>
        <div className='sc_thumb'>
            <a href="/">
                <img src={image} alt="post_image" />
            </a>
        </div>
        <div className='sc_content'>
            <ul className='sc_rating'>
                <li>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                </li>
            </ul>
            <h4 className='title'>{title}</h4>
            <span className='price'>{price}</span>
        </div>
    </li>;
}
export default OurShopPage;