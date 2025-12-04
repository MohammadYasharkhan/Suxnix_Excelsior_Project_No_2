import { useState } from 'react';
import './NewsSection.css';



const blogCardData = [
    {
        tag: "business",
        title: "Laboris nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor.",
        blogImage: "/assets/images/inner_blog_thumb03.webp",
    },
    {
        tag: "business",
        title: "Adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore.",
        blogImage: "/assets/images/inner_blog_thumb02.webp",
    },
    {
        tag: "design",
        title: "Lorem ipsum dolor sit amet consecte cing elit sed do eiusmod tempor.",
        blogImage: "/assets/images/inner_blog_thumb01.webp",
    },
];



const faqData = [
    {
        question: "Suxnix ingredients provides a searchable ?",
    },
    {
        question: "HOW TO EDIT SUXNIX THEMES ?",
        answer: ""
    },
    {
        question: "SUXNIX APP IS A POWERFUL APPLICATION ?",
    },
    {
        question: "LATEST VERSION THOROUGH SUXNIX POWERFUL ?",
    },
    {
        question: "HOW TO TRACK MY ORDER ?",
    },
];

function NewsSection() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return <div id='news_section'>
        <div className='container'>
            <div className='row justify-content-center'>

                <div className='col-lg-6 col-md-10'>
                    {/* <div className='latest_news_section'> */}
                        <div className='news_container_wrapper'>

                            <div className='news_section_heading'>
                                <p className='sub_title'>.. Suxnix News ..</p>
                                <h2 className='title'>Latest News</h2>
                            </div>

                            {blogCardData.map((cardData) => (
                                <BlogPostItem tag={cardData.tag} title={cardData.title} blogImage={cardData.blogImage}></BlogPostItem>
                            ))}

                        </div>
                    {/* </div> */}
                </div>


                <div className='col-lg-6 col-md-10'>
                    {/* <div className='faq_section'> */}
                        <div className='faq_wrapper'>
                            <div className='news_section_heading'>
                                <p className='sub_title'>.. Common Questions ..</p>
                                <h2 className='title'>Frequently Asked Questions</h2>
                            </div>

                            <div className='question_wrapper'>
                                {faqData.map((data, index) => (
                                    <div className={`single_question ${activeIndex === index ? "active-item" : ""}`}>
                                        <h2 className="single_question_header">
                                            <button className='single_question_button' onClick={() => toggleAccordion(index)}>
                                                <span className='count'>{String(index + 1).padStart(2, "0")}.</span>
                                                {data.question}
                                                <svg
                                                    className={`qa_arrow ${activeIndex === index ? "arroweffect" : ""}`}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div className={`answer_of_question ${activeIndex === index ? "open" : "closed"}`}>
                                            There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages.
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    </div>
}




function BlogPostItem({ tag, title, blogImage }) {
    return <div className='blog_post_item'>
        <a href="/">
            <div className='blog_post_thumb' style={{ backgroundImage: `url(${blogImage})` }}>
            </div>
        </a>

        <div className='blog_post_content'>
            <div className='content_top'>
                <div className='tag'>
                    <a href="/">{tag}</a>
                </div>
                <span className='date'>
                    <img src="/assets/images/clock.png" alt="clock image" />
                    <time datetime="2025-01-16T08:16:19Z">January 16, 2025</time>
                </span>
            </div>
            <h3 className='title'>
                <a href="/">{title}</a>
            </h3>

            <div className='content_bottom'>
                <p className='posted_by'>Posted by - <a href="/">Web Developer</a></p>
                <div>
                    <div className='comments'>
                        <img src="/assets/images/mailbox.png" alt="mail box" />
                        0
                    </div>

                    <div className='viewers'>
                        <img src="/assets/images/viewers.png" alt="eye image" />
                        0
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default NewsSection;