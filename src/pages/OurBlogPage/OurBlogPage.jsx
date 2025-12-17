import HeroWithHeading from '../../Components/HeroWithHeading/HeroWithHeading';
import './OurBlogPage.css';
import { Link } from 'react-router-dom';

const cardData = [
    { blogImage: "/assets/images/inner_blog_thumb03.webp", tag: "Business", heading: "Laboris nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor." },
    { blogImage: "/assets/images/inner_blog_thumb02.webp", tag: "Business", heading: "Adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore." },
    { blogImage: "/assets/images/inner_blog_thumb01.webp", tag: "Design", heading: "Lorem ipsum dolor sit amet consecte cing elit sed do eiusmod tempor." }
];


function OurBlogPage() {
    return <>
        <HeroWithHeading title={"Blog"}></HeroWithHeading>
        <div id='blog_area_main'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className='blog_post_wrapper'>
                            {cardData.map((item, index) => (
                                <BlogPostItems {...item}></BlogPostItems>
                            ))}
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-7'>
                        <BlogSideBarMain typeOfParent={"OurBlog"}></BlogSideBarMain>
                    </div>
                </div>
            </div>
        </div>
    </>
}



function BlogSideBarMain({typeOfParent}) {

    return <aside className='blog_area_main_side_wrapper'>
        <div className='widget'>
            <div className='widget_title'>
                <h3 className='title'>
                    About Me
                </h3>
            </div>
            <div className='blog_about_me_details text-center'>
                <div className='b_about_img'>
                    <img src="/assets/images/me.webp" alt="about me image" />
                </div>
                <div className='b_about_content'>
                    <h4>Rosalina D. Willaimson</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <div className='b_about_social'>
                    <a href="#" onClick={(e) => { e.preventDefault() }}><i className='fab fa-facebook-f'></i></a>
                    <a href="#" onClick={(e) => { e.preventDefault() }}><i className='fab fa-twitter'></i></a>
                    <a href="#" onClick={(e) => { e.preventDefault() }}><i className='fab fa-pinterest'></i></a>
                    <a href="#" onClick={(e) => { e.preventDefault() }}><i className='fab fa-behance'></i></a>
                    <a href="#" onClick={(e) => { e.preventDefault() }}><i className='fab fa-youtube'></i></a>
                </div>
            </div>
        </div>


        <div className='widget'>
            <div className='widget_title'>
                <h3 className='title'>
                    Search Objects
                </h3>
            </div>
            <div className='b_side_search_form position-relative'>
                <form action="/">
                    <input type="text" placeholder='Search your keyword...' />
                    <button><i className='fas fa-search'></i></button>
                </form>
            </div>
        </div>

        <div className='widget'>
            <div className='widget_title'>
                <h3 className='title'>
                    Popular Feeds
                </h3>
            </div>

            <div className='rc_post'>
                <div className='rc_post_thumb'>
                    <a href="/">
                        <img src="/assets/images/inner_blog_thumb03.webp" alt="inner blog image" />
                    </a>
                </div>
                <div className='rc_post_content'>
                    <h5>
                        <a href="/">Laboris nisi ut aliquip ex ea...</a>
                    </h5>
                    <div className='rc_post_date'>
                        <span><i className='far fa-calendar-alt'></i> 16 January 2025</span>
                    </div>
                </div>
            </div>

            <div className='rc_post'>
                <div className='rc_post_thumb'>
                    <a href="/">
                        <img src="/assets/images/inner_blog_thumb02.webp" alt="inner blog image" />
                    </a>
                </div>
                <div className='rc_post_content'>
                    <h5>
                        <a href="/">Adipisicing elit sed do eiusmod tempor...</a>
                    </h5>
                    <div className='rc_post_date'>
                        <span><i className='far fa-calendar-alt'></i> 16 January 2025</span>
                    </div>
                </div>
            </div>

            <div className='rc_post'>
                <div className='rc_post_thumb'>
                    <a href="/">
                        <img src="/assets/images/inner_blog_thumb01.webp" alt="inner blog image" />
                    </a>
                </div>
                <div className='rc_post_content'>
                    <h5>
                        <a href="/">Lorem ipsum dolor sit amet consecte...</a>
                    </h5>
                    <div className='rc_post_date'>
                        <span><i className='far fa-calendar-alt'></i> 16 January 2025</span>
                    </div>
                </div>
            </div>
        </div>


        <div className='widget'>
            <div className='widget_title'>
                <h3 className='title'>
                    Categories
                </h3>
            </div>
            <div className='side_bar_cat'>
                <ul>
                    <li>
                        <a href="/">Burners <span>0</span></a>
                    </li>
                    <li>
                        <a href="/">Fat Burners <span>0</span></a>
                    </li>
                    <li>
                        <a href="/">Medicine <span>0</span></a>
                    </li>
                    <li>
                        <a href="/">Nutrition <span>0</span></a>
                    </li>
                    <li>
                        <a href="/">Protein <span>0</span></a>
                    </li>
                </ul>
            </div>
        </div>

        <div className='widget'>
            <div className='widget_title'>
                <h3 className='title'>
                    Never Miss News
                </h3>
            </div>

            <div className='side_bar_news_social'>
                <a href="/"><i className='fab fa-facebook-f'></i></a>
                <a href="/"><i className='fab fa-twitter'></i></a>
                <a href="/"><i className='fab fa-behance'></i></a>
                <a href="/"><i className='fab fa-youtube'></i></a>
                <a href="/"><i className='fab fa-pinterest-p'></i></a>
            </div>
        </div>


        <div className='widget'>
            <div className='widget_title'>
                <h3 className='title'>
                    Twitter Feeds
                </h3>
            </div>
            <div className='twitter_post'>
                <ul>
                    <li>
                        <div className='twitter_icon'>
                            <i className='fab fa-twitter'></i>
                        </div>
                        <div className='twitter_content'>
                            <p>
                                Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest
                                <a href="https://t.co/2r1POjOjgV">https://t.co/2r1POjOjgV</a>
                            </p>
                            <div className='twitter_post_date'>
                                <span>November 29, 2024</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='twitter_icon'>
                            <i className='fab fa-twitter'></i>
                        </div>
                        <div className='twitter_content'>
                            <p>
                                Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest
                                <a href="https://t.co/2r1POjOjgV">https://t.co/2r1POjOjgV</a>
                            </p>
                            <div className='twitter_post_date'>
                                <span>November 29, 2024</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='twitter_icon'>
                            <i className='fab fa-twitter'></i>
                        </div>
                        <div className='twitter_content'>
                            <p>
                                Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest
                                <a href="https://t.co/2r1POjOjgV">https://t.co/2r1POjOjgV</a>
                            </p>
                            <div className='twitter_post_date'>
                                <span>November 29, 2024</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>


        <div className='widget'>
            <div className='widget_title'>
                <h3 className='title'>
                    Instagram Feeds
                </h3>
            </div>

            <div className='side_bar_insta_post'>
                <ul>
                    <li>
                        <a href="/"><img src="/assets/images/insta_post01.avif" alt="insta post 1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src="/assets/images/insta_post02.avif" alt="insta post 1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src="/assets/images/insta_post03.avif" alt="insta post 1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src="/assets/images/insta_post04.avif" alt="insta post 1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src="/assets/images/insta_post05.webp" alt="insta post 1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src="/assets/images/insta_post06.avif" alt="insta post 1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src="/assets/images/insta_post07.avif" alt="insta post 1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src="/assets/images/insta_post08.avif" alt="insta post 1" /></a>
                    </li>
                    <li>
                        <a href="/"><img src="/assets/images/insta_post09.avif" alt="insta post 1" /></a>
                    </li>
                </ul>
            </div>
        </div>


        {typeOfParent==="OurBlog"&&(<div className='widget'>
            <div className='widget_title'>
                <h3 className='title'>
                    Popular Tag
                </h3>
            </div>
            <div className='widget_tag'>
                <ul>
                    <li><a href="/">Business</a></li>
                    <li><a href="/">Consult</a></li>
                    <li><a href="/">Design</a></li>
                    <li><a href="/">Develop</a></li>
                    <li><a href="/">Icon</a></li>
                    <li><a href="/">Keybord</a></li>
                    <li><a href="/">Popular</a></li>
                    <li><a href="/">Usability</a></li>
                    <li><a href="/">Ux</a></li>
                </ul>
            </div>
        </div>)}
        
    </aside>;
}



function BlogPostItems({ blogImage, heading, tag }) {
    return <div className='blog_post_item_main'>
        <div className='blog_post_main_thumb'>
            <Link to='/blogPost'>
                <img src={blogImage} alt="blog_image" />
            </Link>
        </div>
        <div className='blog_post_main_content'>
            <div className='blog_tag'>
                <a href="/blogPost">
                    {tag}
                </a>
            </div>
            <h2 className='blog_post_title'>
                <a href="/">
                    {heading}
                </a>
            </h2>
            <div className='blog_post_meta'>
                <ul>
                    <li><span><i className='far fa-eye'></i> 232 Views</span></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault() }}><i className='far fa-comments'></i>35 Comments</a></li>
                    <li><span><i className='far fa-calendar-alt'></i>16 Jan, 2025</span></li>
                </ul>
            </div>

            <div className='blog_post_text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat[…]</p>
            </div>

            <div className='blog_post_bottom'>
                <div className='blog_post_avatar'>
                    <div className='blog_post_avatar_img'>
                        <img src="/assets/images/blog-avatar.avif" alt="blog image" />
                    </div>
                    <div className='blog_avatar_info'>
                        <p>by <a href="/">Web Developer</a></p>
                    </div>
                </div>
                <div className='blog_post_read_more'>
                    <a href="/">
                        <i className='fas fa-arrow-right'></i>
                        Read More
                    </a>
                </div>
            </div>
        </div>
    </div>
}
export { BlogPostItems,BlogSideBarMain };
export default OurBlogPage;