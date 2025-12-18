import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate, useLocation ,Link} from "react-router-dom";
import "./Header.css";
import { ProductSepratorContext } from "../../context/StoreContext";
import { productData } from "../../assets";

const subListData = {
    firstList: [
        {
            liName: "Home One",
            liLink: "/",
        },
        {
            liName: "Home Two",
            liLink: "/",
        },
        {
            liName: "Home Three",
            liLink: "/",
        },
    ],
    secondList: [
        {
            liName: "Our Shop",
            liLink: "/ourshop",
        },
        {
            liName: "Shop Detail",
            liLink: "/shopDetails",
        },
        {
            liName: "Cart Page",
            liLink: "/cart",
        },
        {
            liName: "Login Page",
            liLink: "/login",
        },
        {
            liName: "Register",
            liLink: "/signup",
        },
    ],
    thirdList: [
        {
            liName: "Our Blog",
            liLink: "/blogPost",
        },
        {
            liName: "Blog Details",
            liLink: "/blogDetails",
        },
    ]
};


function Header() {

    const { totalUniqueItems, count, subTotal } = useContext(ProductSepratorContext);

    const [activeDropdown, setActiveDropdown] = useState(null);

    const [searchBarActive, setSearchBarActive] = useState(false);

    const [sideBarOfMobile, setSideBarOfMobile] = useState(false);

    const [sideBarActive, setSideBarActive] = useState(false);

    const [isClosing, setIsClosing] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const sideBarRef = useRef(null);

    const searchOverlayRef = useRef(null);

    const sideBarMobileRef = useRef(null);


    useEffect(() => {
        function closeSearchOverlay() {
            setIsClosing(true);
            setTimeout(() => {
                setSearchBarActive(false);
                setIsClosing(false);
            }, 500);
        }

        function handleClickOutside(event) {
            if (
                searchOverlayRef.current &&
                !searchOverlayRef.current.contains(event.target)
            ) {
                closeSearchOverlay();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchBarActive]);


    useEffect(() => {
        function handleClickOutside(event) {
            if (
                sideBarRef.current &&
                !sideBarRef.current.contains(event.target)
            ) {
                closeSideBarOverlay();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [sideBarActive]);


    useEffect(() => {
        function handleClickOutside(event) {
            if (sideBarMobileRef.current && !sideBarMobileRef.current.contains(event.target)) {
                closeMobileSideBar();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [sideBarOfMobile]);

    function closeSideBarOverlay() {
        setIsClosing(true);
        setTimeout(() => {
            setSideBarActive(false);
            setIsClosing(false);
        }, 500);
    }

    function closeMobileSideBar() {
        setIsClosing(true);
        setTimeout(() => {
            setSideBarOfMobile(false);
            setIsClosing(false);
        }, 500);
    }


    const navigate = useNavigate();
    const location = useLocation();

    const scrollTo = (id) => {
        if (location.pathname === "/") {
            // already on home → just scroll
            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            // go to home and pass section id
            navigate("/", { state: { scrollTo: id } });
        }
    };

    const renderHeaderSubElements = () => {
        return <div className="container custome_container">
            <div className="row">
                <div className="col-12">

                    {sideBarOfMobile && (
                        <div className="mobile_menu_wrapper">
                            <div className={`mobile_menu ${isClosing ? "closing_animation_sideBar" : "opening_animation_sideBar"}`} ref={sideBarMobileRef} onMouseDown={(e) => e.stopPropagation()}>
                                <nav className="menu_box">
                                    <div className="menu_box_close_button" onClick={closeMobileSideBar}>
                                        ×
                                    </div>
                                    <div className="menu_box_nav_logo">
                                        <a href="/">
                                            <img src="assets/images/logo.webp" alt="logo_image" />
                                        </a>
                                    </div>

                                    <ul className="menu_box_navigation">
                                        <li className="menu_item_has_children"><a href="#" onClick={(e) => { e.preventDefault() }}>Home</a>
                                            <SubListOfMobileView listdata={subListData.firstList}></SubListOfMobileView>
                                        </li>
                                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollTo("feature_section") }}>Features</a></li>
                                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollTo("products_section") }}>Product</a></li>
                                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollTo("ingredient_section") }}>Ingredient</a></li>
                                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollTo("pricing_section") }}>Pricing</a></li>
                                        <li className="menu_item_has_children"><a href="#" onClick={(e) => { e.preventDefault() }}>Shop</a>
                                            <SubListOfMobileView listdata={subListData.secondList}></SubListOfMobileView>
                                        </li>
                                        <li className="menu_item_has_children"><a href="#" onClick={(e) => { e.preventDefault() }}>News</a>
                                            <SubListOfMobileView listdata={subListData.thirdList}></SubListOfMobileView>
                                        </li>
                                        <li><Link to="/contactUs">Contacts</Link></li>
                                    </ul>


                                    <div className="mobile_social_links">
                                        <ul className="mobile_social_links_ul">
                                            <li><a href="#"><img src="/assets/images/facebook_black.png" alt="facebook icon" /></a></li>
                                            <li><a href="#"><img src="/assets/images/twitter_black.png" alt="twitter icon" /></a></li>
                                            <li><a href="#"><img src="/assets/images/instagram_black.png" alt="instagram icon" /></a></li>
                                            <li><a href="#"><img src="/assets/images/youtube_black.png" alt="youtube icon" /></a></li>
                                            <li><a href="#"><img src="/assets/images/vimeo_black.png" alt="vimeo icon" /></a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    )
                    }




                    <div className="menu_wrapper">
                        <div className="logo_container">
                            <img src="assets/images/logo.webp" alt="logo-img" />
                        </div>
                        <nav className="navbar_wrapper">
                            <ul>
                                <li
                                    className="has-dropdown"
                                    onMouseEnter={() => setActiveDropdown("Home")}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    Home
                                    <ul
                                        className={`dropdown ${activeDropdown === "Home" ? "open" : ""
                                            }`}
                                    >
                                        <li><Link to="/">Home One</Link></li>
                                        <li><Link to="/">Home Two</Link></li>
                                        <li><Link to="/">Home Three</Link></li>
                                    </ul>
                                </li>
                                <li onClick={() => scrollTo("feature_section")}>Features</li>
                                <li onClick={() => scrollTo("products_section")}>Product</li>
                                <li onClick={() => scrollTo("ingredient_section")}>Ingredient</li>
                                <li onClick={() => scrollTo("pricing_section")}>Pricing</li>
                                <li
                                    className="has-dropdown"
                                    onMouseEnter={() => setActiveDropdown("Shop")}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    Shop
                                    <ul
                                        className={`dropdown ${activeDropdown === "Shop" ? "open" : ""}`}
                                    >
                                        <li><Link to="/ourshop">Our Shop</Link></li>
                                        <li><Link to="/shopDetails">Shop Detail</Link></li>
                                        <li><Link to="/cart">Cart Page</Link></li>
                                        <li><Link to="/login">Login Page</Link></li>
                                        <li><Link to="/signup">Register</Link></li>
                                    </ul>
                                </li>
                                <li
                                    className="has-dropdown"
                                    onMouseEnter={() => setActiveDropdown("News")}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    News
                                    <ul
                                        className={`dropdown ${activeDropdown === "News" ? "open" : ""
                                            }`}
                                    >
                                        <li><Link to="/blogPost">Our Blog</Link></li>
                                        <li><Link to="/blogDetails">Blog Details</Link></li>
                                    </ul>
                                </li>
                                <li><Link to='/contactUs'>Contacts</Link></li>
                            </ul>
                        </nav>
                        <div className="header_buttons">
                            <div className="cart_container">
                                <a href="#" onClick={(e) => { e.preventDefault() }}>
                                    <img src="assets/images/shopping-cart.png" alt="cart-image" />
                                </a>
                                <span className="cart_count">{totalUniqueItems}</span>
                                <div className="header_cart_navigator">
                                    <ul>
                                        {Object.keys(count).length === 0 ? (
                                            <li>Your cart is empty</li>
                                        ) : (
                                            Object.keys(count).map((id) => {
                                                const product = productData.find(
                                                    (item) => item.id === Number(id)
                                                );

                                                if (!product) return null;

                                                return (
                                                    <NavLinkSmallCard
                                                        key={id}
                                                        selectedData={product}
                                                        quantity={count[id]}
                                                    />
                                                );
                                            })
                                        )}
                                    </ul>
                                    <div className="nav_sub_total_div">
                                        <strong>Subtotal</strong>
                                        {Object.keys(count).length === 0 ? <span>0.00</span> : <span>{subTotal}</span>}
                                    </div>
                                    <div className="nav_check_out_link">
                                        <p>
                                            <Link to='/cart'>View Cart</Link>
                                            <a href="#" className="check_out_anchor">CheckOut</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="search_icon">
                                <a onClick={() => setSearchBarActive(true)}>
                                    {/* <i className="fi-rr-search"></i> */}
                                    <img
                                        className="search_image_div"
                                        src="assets/images/search.png"
                                        alt="search image"
                                    />
                                </a>
                            </div>

                            <div className="side_bar_opening_button" onClick={() => window.innerWidth <= 1200 ? setSideBarOfMobile(true) : setSideBarActive(true)}>
                                <img src="assets/images/menu.png" alt="menu image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <>
            <div id="header">
                {renderHeaderSubElements()}
            </div>



            <div id="header" className={scrolled ? "sticky" : "sticky_header_display"}>
                {renderHeaderSubElements()}
            </div>

            {/* <div class="header-spacer"></div> */}


            {sideBarActive && (
                <div className="side_bar_container">
                    <div className={`side_bar_wrapper ${isClosing ? "closing_animation_sideBar" : "opening_animation_sideBar"}`} ref={sideBarRef}>
                        <div className="side_bar_toggler" onClick={closeSideBarOverlay}>
                            <img src="/assets/images/close.webp" alt="close button" />
                        </div>
                        <div className="side_bar_body">
                            <div className="side_bar_content">
                                <h3 className="title">
                                    Getting all of the <span>Nutrients</span>  you need simply cannot be done without supplements.
                                </h3>
                                <p>Nam libero tempore, cum soluta nobis eligendi cumque quod placeat facere possimus assumenda omnis dolor repellendu sautem temporibus officiis</p>
                            </div>
                        </div>

                        <div className="side_bar_contact">
                            <h4 className="number">+1 599 162 4545</h4>
                            <h4 className="email">info@example.com</h4>
                            <p>5689 Lotaso Terrace, Culver City, CA, United States</p>

                            <ul className="side_bar_social">
                                <li>
                                    <a href="/">
                                        <img src="/assets/images/facebook_black.png" alt="facebook icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="/assets/images/twitter_black.png" alt="twitter icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="/assets/images/instagram_black.png" alt="instagram icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="/assets/images/youtube_black.png" alt="youtube icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="/assets/images/vimeo_black.png" alt="vimeo icon" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {searchBarActive && (
                <div className="search-container-dark-overlay">
                    <div className={`search-overlay ${isClosing ? "closing_animation_searchBar" : "opening_animation_searchBar"}`} ref={searchOverlayRef}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <form action="/search" className="search_form">
                                        <input
                                            type="text"
                                            placeholder="Enter Your Keyword"
                                            autoFocus
                                            className="search-input"
                                        />
                                        <button className="search-button">
                                            <img
                                                src="assets/images/search_green_color.png"
                                                alt="search_icon_green"
                                            />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default Header;



function SubListOfMobileView({ listdata }) {
    const [isMobileDropDownActive, setMobileDropDownActive] = useState(false);
    const handleToggleMobile = () => setMobileDropDownActive((prev) => !prev);
    return <>
        <div className="drop_down_design" onClick={handleToggleMobile}>
            <img src="/assets/images/arrow-down-sign-to-navigate.png" alt="arrow image" style={{
                transform: isMobileDropDownActive ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
            }} />
        </div>
        <ul className="sub_list_mobile" style={{
            maxHeight: isMobileDropDownActive ? '300px' : '0px',
            overflow: 'hidden',
            transition: 'max-height 1s ease',
            margin: 0,
            padding: 0,
            listStyleType: 'none'
        }}>
            {listdata.map((item, index) => (
                <li><Link to={item.liLink}>{item.liName}</Link></li>
            ))}
        </ul>
    </>
}

function NavLinkSmallCard({ selectedData, quantity }) {
    const { removeItem } = useContext(ProductSepratorContext);
    return <li className="d-flex align-items-center">
        <div className="nav_mini_card_image">
            <img
                src={selectedData.productImage}
                alt="card image"
                style={{ maxWidth: "80px", maxHeight: "80px" }}
            />
        </div>
        <div className="nav_mini_card_content">
            <h4 className="title"><a href="#">{selectedData.title}</a></h4>
            <div className="nav_price">
                {quantity} ×{" "}
                <span>
                    Tk {(
                        quantity * parseFloat(selectedData.price.replace("Tk", ""))
                    ).toFixed(2)}
                </span>
            </div>
        </div>
        <a href="#" onClick={(e) => { e.preventDefault(); removeItem(selectedData.id) }}>×</a>
    </li>
}