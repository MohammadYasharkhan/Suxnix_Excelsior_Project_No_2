import { useState } from 'react';
import HeroWithHeading from '../../Components/HeroWithHeading/HeroWithHeading';
import { BlogSideBarMain } from '../OurBlogPage/OurBlogPage';
import './BlogDetailsPage.css';

function BlogDetailsPage() {
    return <>
        <HeroWithHeading title={"Blog Article"}></HeroWithHeading>
        <section id='blog_details_area_main'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className='col-lg-8'>
                        <BlogDetailsPageBlogConatiner></BlogDetailsPageBlogConatiner>
                    </div>
                    <div className='col-lg-4'>
                        <BlogSideBarMain typeOfParent={"BlogDetails"}></BlogSideBarMain>
                    </div>
                </div>
            </div>
        </section>
    </>;
}



function BlogDetailsPageBlogConatiner() {

    const [blogState, setBlogState] = useState("one");

    const changeNextBlog=()=>{
        // blogState==="one"?setBlogState("two"):blogState==="two"?setBlogState("three"):null;
        if(blogState==="one")
        {
            setBlogState("two");
        }
        else if(blogState==="two")
        {
            setBlogState("three");
        }
        // console.log(blogState);
    };


    const changePrevBlog=()=>{
        // blogState==="two"?setBlogState("one"):blogState==="three"?setBlogState("two"):null;

        if(blogState==="two")
        {
            setBlogState("one");
        }
        else if(blogState==="three")
        {
            setBlogState("two");
        }

        // console.log(blogState);
    };

    return <div className='real_blog_post'>
        <div className='blog_post_main_thumb'>
            <img src={blogState === "one" ? "/assets/images/inner_blog_thumb01.webp" : (blogState === "two" ? "/assets/images/inner_blog_thumb02.webp" : "/assets/images/inner_blog_thumb03.webp")} alt="blog image" />
        </div>
        <div className='blog_post_main_content real_blog_post_content'>
            <div className='blog_tag'>
                <a href="/blogDetails">Business</a>
                <a href="/blogDetails">Consult</a>
                <a href="/blogDetails">Develop</a>
            </div>
            <h2 className='blog_post_title'>
                {blogState === "one" ? "Lorem ipsum dolor sit amet consecte cing elit sed do eiusmod tempor." : (blogState === "two" ? "Adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore." : "Laboris nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor.")}
            </h2>
            <div class="blog_post_meta">
                <ul>
                    <li><span><i class="far fa-eye"></i> 232 Views</span></li>
                    <li><a href="#"><i class="far fa-comments"></i>0 Comments</a></li>
                    <li><span><i class="far fa-calendar-alt"></i>16 Jan, 2025</span></li>
                </ul>
            </div>
            <div className='blog_post_text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora et dolore magnam aliquam quaerat voluptatem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                <div className='real_blog_post_content_thumb'>
                    <img src="/assets/images/inner_blog_thumb03.webp" alt="thumb image" />
                </div>
                <div className='real_blog_post_content_wrap'>
                    <h3 className='title'>A cleansing hot shower or bath</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                </div>
                <div className='real_blog_post_content_wrap'>
                    <h3 className='title'>Setting the mood with incense</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                </div>

                <div className='real_blog_post_content_wrap border_none'>
                    <h3 className='title'>Setting the mood with incense</h3>
                    <div className='rb_details_list'>
                        <ul>
                            <li><i class="fas fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                            <li><i class="fas fa-check"></i>Dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</li>
                            <li><i class="fas fa-check"></i>Tion ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><i class="fas fa-check"></i>Eprehenderit in voluptate velit esse cillum dolore eu fugiat.</li>
                            <li><i class="fas fa-check"></i>Ccaecat cupidatat non proident, sunt in culpa qui officia.</li>
                        </ul>
                    </div>
                </div>

                <blockquote>
                    <span>By Hetmayar</span>
                    Viral dreamcatcher keytar typewriter aest hetic offal umami. Aesthetic polaroid pug pitchfork post-ironic.
                </blockquote>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>


            </div>

            <div className='row'>
                <div className='col-xl-6 col-md-7'>
                    <div className='rb_post_tag'>
                        <h5>Related tags</h5>
                        <ul>
                            <li><a href="/">business</a></li>
                            <li><a href="/">consult</a></li>
                            <li><a href="/">develop</a></li>
                            <li><a href="/">icon</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-xl-6 col-md-7'>
                    <div className='post_share text-md-end'>
                        <h5>Share post</h5>
                        <ul>
                            <li><a href="/"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="/"><i class="fab fa-pinterest-p"></i></a></li>
                            <li><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="/"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='real_blog_post_navigation'>
                <div className='row align-items-center'>

                    {(blogState === "two" || blogState === "three") && (<div className='col-md-5'>
                        <div className='nav_link_blog'>
                            <span>Previous</span>
                            <h4>
                                <a href="#" onClick={(e)=>{ e.preventDefault(); changePrevBlog();}}>
                                    {blogState === "three" ? "Adipisicing elit sed do eiusmod tempor..." : (blogState === "two" ? "Lorem ipsum dolor sit amet consecte..." : "")}
                                </a>
                            </h4>
                        </div>
                    </div>)}


                    <div className='col-2'></div>

                    {(blogState === "one" || blogState === "two") && (<div className='col-md-5'>
                        <div className='nav_link_blog text-start text-md-end'>
                            <span>Next</span>
                            <h4>
                                <a href="#" onClick={(e)=>{ e.preventDefault(); changeNextBlog();}}>
                                    {blogState === "one" ? "Adipisicing elit sed do eiusmod tempor..." : (blogState === "two" ? "Laboris nisi ut aliquip ex ea..." : "")}
                                </a>
                            </h4>
                        </div>
                    </div>)}
                </div>
            </div>

            <div className='real_realated_post'>
                <h3>Related posts</h3>
            </div>

            <div className='related_post_writter'>
                <div className='related_post_writter_info'>
                    <span>Written By</span>
                    <h4>Web Developer</h4>
                </div>
            </div>

            <div className='real_comment_wrapper'>
                <div className='real_title_wrap'>
                    <h5>0 Comments</h5>
                </div>
                <div className='real_post_comment_form'>
                    <div className='real_title_wrap'>
                        <h5>Comments</h5>
                    </div>
                    <form action="/">
                        <div className='real_comment_box'>
                            <div className='real_comment_box_field text_area'>
                                <i class="fas fa-pencil-alt"></i>
                                <textarea name="" id="" placeholder='Message'></textarea>
                            </div>

                            <div className='real_comment_box_field'>
                                <i class="far fa-user"></i>
                                <input type="text" placeholder='Name' />
                            </div>

                            <div className='real_comment_box_field'>
                                <i class="far fa-envelope"></i>
                                <input type="text" placeholder='Email' />
                            </div>

                            <button className='real_comment_box_button'>
                                <i class="far fa-comments"></i>
                                Post Comment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>;
}

export default BlogDetailsPage;