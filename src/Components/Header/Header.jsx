// import {Link} from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import "./Header.css";

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
            liLink: "/",
        },
        {
            liName: "Shop Detail",
            liLink: "/",
        },
        {
            liName: "Cart Page",
            liLink: "/",
        },
        {
            liName: "Login Page",
            liLink: "/",
        },
        {
            liName: "Register",
            liLink: "/",
        },
    ],
    thirdList: [
        {
            liName: "Our Blog",
            liLink: "/",
        },
        {
            liName: "Blog Details",
            liLink: "/",
        },
    ]
};


function Header() {
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

    const sideBarMobileRef=useRef(null);


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


    useEffect(()=>{
        function handleClickOutside(event){
            if(sideBarMobileRef.current && !sideBarMobileRef.current.contains(event.target))
            {
                closeMobileSideBar();
            }
        }

        document.addEventListener("mousedown",handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown",handleClickOutside);
        }
    },[sideBarOfMobile]);

    function closeSideBarOverlay() {
            setIsClosing(true);
            setTimeout(() => {
                setSideBarActive(false);
                setIsClosing(false);
            }, 500);
    }

    function closeMobileSideBar()
    {
        setIsClosing(true);
        setTimeout(()=>{
            setSideBarOfMobile(false);
            setIsClosing(false);
        },500);
    }

    return (
        <>
            <div id="header">
                <div className="container custome_container">
                    <div className="row">
                        <div className="col-12">

                            {sideBarOfMobile && (
                                <div className="mobile_menu_wrapper">
                                    <div className={`mobile_menu ${isClosing ? "closing_animation_sideBar" : "opening_animation_sideBar"}`} ref={sideBarMobileRef} >
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
                                                <li className="menu_item_has_children"><a href="/">Home</a>
                                                    <SubListOfMobileView listdata={subListData.firstList}></SubListOfMobileView>
                                                </li>
                                                <li><a href="/">Features</a></li>
                                                <li><a href="/">Product</a></li>
                                                <li><a href="/">Ingredient</a></li>
                                                <li><a href="/">Pricing</a></li>
                                                <li className="menu_item_has_children"><a href="/">Shop</a>
                                                    <SubListOfMobileView listdata={subListData.secondList}></SubListOfMobileView>
                                                </li>
                                                <li className="menu_item_has_children"><a href="/">News</a>
                                                    <SubListOfMobileView listdata={subListData.thirdList}></SubListOfMobileView>
                                                </li>
                                                <li><a href="/">Contacts</a></li>
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
                                                <li><a href="/">Home One</a></li>
                                                <li><a href="/">Home Two</a></li>
                                                <li><a href="/">Home Three</a></li>
                                            </ul>
                                        </li>
                                        <li>Features</li>
                                        <li>Product</li>
                                        <li>Ingredient</li>
                                        <li>Pricing</li>
                                        <li
                                            className="has-dropdown"
                                            onMouseEnter={() => setActiveDropdown("Shop")}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            Shop
                                            <ul
                                                className={`dropdown ${activeDropdown === "Shop" ? "open" : ""}`}
                                            >
                                                <li><a href="/ourshop">Our Shop</a></li>
                                                <li><a href="/">Shop Detail</a></li>
                                                <li><a href="/">Cart Page</a></li>
                                                <li><a href="/">Login Page</a></li>
                                                <li><a href="/">Register</a></li>
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
                                                <li><a href="/">Our Blog</a></li>
                                                <li><a href="/">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li>Contacts</li>
                                    </ul>
                                </nav>
                                <div className="header_buttons">
                                    <div className="cart_container">
                                        <a href="/">
                                            <img src="assets/images/shopping-cart.png" alt="cart-image" />
                                        </a>
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
            </div>



            <div id="header" className={scrolled?"sticky":"sticky_header_display"}>
                <div className="container custome_container">
                    <div className="row">
                        <div className="col-12">

                            {sideBarOfMobile && (
                                <div className="mobile_menu_wrapper">
                                    <div className={`mobile_menu ${isClosing ? "closing_animation_sideBar" : "opening_animation_sideBar"}`} ref={sideBarMobileRef} >
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
                                                <li className="menu_item_has_children"><a href="/">Home</a>
                                                    <SubListOfMobileView listdata={subListData.firstList}></SubListOfMobileView>
                                                </li>
                                                <li><a href="/">Features</a></li>
                                                <li><a href="/">Product</a></li>
                                                <li><a href="/">Ingredient</a></li>
                                                <li><a href="/">Pricing</a></li>
                                                <li className="menu_item_has_children"><a href="/">Shop</a>
                                                    <SubListOfMobileView listdata={subListData.secondList}></SubListOfMobileView>
                                                </li>
                                                <li className="menu_item_has_children"><a href="/">News</a>
                                                    <SubListOfMobileView listdata={subListData.thirdList}></SubListOfMobileView>
                                                </li>
                                                <li><a href="/">Contacts</a></li>
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
                                                <li><a href="/">Home One</a></li>
                                                <li><a href="/">Home Two</a></li>
                                                <li><a href="/">Home Three</a></li>
                                            </ul>
                                        </li>
                                        <li>Features</li>
                                        <li>Product</li>
                                        <li>Ingredient</li>
                                        <li>Pricing</li>
                                        <li
                                            className="has-dropdown"
                                            onMouseEnter={() => setActiveDropdown("Shop")}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            Shop
                                            <ul
                                                className={`dropdown ${activeDropdown === "Shop" ? "open" : ""}`}
                                            >
                                                <li><a href="/ourshop">Our Shop</a></li>
                                                <li><a href="/">Shop Detail</a></li>
                                                <li><a href="/">Cart Page</a></li>
                                                <li><a href="/">Login Page</a></li>
                                                <li><a href="/">Register</a></li>
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
                                                <li><a href="/">Our Blog</a></li>
                                                <li><a href="/">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li>Contacts</li>
                                    </ul>
                                </nav>
                                <div className="header_buttons">
                                    <div className="cart_container">
                                        <a href="/">
                                            <img src="assets/images/shopping-cart.png" alt="cart-image" />
                                        </a>
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
                <li><a href={item.liLink}>{item.liName}</a> </li>
            ))}
        </ul>
    </>
}