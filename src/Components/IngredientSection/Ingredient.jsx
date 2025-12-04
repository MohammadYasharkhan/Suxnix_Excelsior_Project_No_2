import { useState , useEffect } from 'react';

import './Ingredient.css';



const cardAssets = [
    {
        cardWidth: "342.5px",
        cardImage: "/assets/images/ingredients_item01_e2ff04ee-49fd-4493-8a4a-3c4ab47d124f.webp",
        cardTitle: "Helps You Stick To Your Diet",
        cardClass: "ingredient_card_one_aligment",
    },
    {
        cardWidth: "292.5px",
        cardImage: "/assets/images/ingredients_item02.webp",
        cardTitle: "Only 3g Net Carbs In Every Jar",
        cardClass: "ingredient_card_two_aligment",
    },
    {
        cardWidth: "342.5px",
        cardImage: "/assets/images/ingredients_item03.webp",
        cardTitle: "Ingredients To Fuel Your Body",
        cardClass: "ingredient_card_three_aligment",
    },
    {
        cardWidth: "292.5px",
        cardImage: "/assets/images/ingredients_item04.webp",
        cardTitle: "Clean Ingredients Only",
        cardClass: "ingredient_card_four_aligment",
    }
]


function Ingredient() {
    return <div id='ingredient_section'>
        <div className='container'>
            <div className='row align-items-center justify-content-center'>
                <div className='col-xl-5 col-lg-6 col-md-7'>
                    <div className='ingredient_main_image_contianer'>
                        <img src="/assets/images/ingredients_img_935aff4a-681c-4796-b32f-2c04b1334309.webp" alt="protin_image" />
                        <img className='ingredient_shape' src="/assets/images/ingredients_shape_3fd21533-6d88-4ac8-af2f-415082b53a2c.avif" alt="side image" />
                    </div>
                </div>
                <div className='col-xl-7 col-lg-9'>
                    <div className='ingredient_section_content'>
                        <div className='ingredient_title'>
                            <p className='sub_title'>.. Increased Energy With Suxnix ..</p>
                            <h2 className='title'>Suxnix Ingredients</h2>
                        </div>


                        <div className='row justify-content-center justify-content-lg-start'>
                            <div className='col-md-6 col-sm-8'>
                                <IngredientSmallCard cardDetailObject={cardAssets[0]} />
                            </div>

                            <div className='col-md-6 col-sm-8'>
                                <IngredientSmallCard cardDetailObject={cardAssets[1]} />
                            </div>

                            <div className='col-md-6 col-sm-8'>
                                <IngredientSmallCard cardDetailObject={cardAssets[2]} />
                            </div>

                            <div className='col-md-6 col-sm-8'>
                                <IngredientSmallCard cardDetailObject={cardAssets[3]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}




function IngredientSmallCard({ cardDetailObject }) {


    // const [width, setWidth] = useState(window.innerWidth);
    // useEffect(() => { 
    //     const handleResize = () => setWidth(window.innerWidth); 
    //     window.addEventListener("resize", handleResize); 
    //     return () => window.removeEventListener("resize", handleResize); 
    // }, []);

    // style={{ width: width < 1200 ? "330px" : cardDetailObject.cardWidth }}

    return <div className={cardDetailObject.cardClass} >
        <div className='ingredient_card_image'>
            <img src={cardDetailObject.cardImage} alt="ingredient image one" />
        </div>
        <div className='ingredient_card_content'>
            <h5 className='card_heading'>{cardDetailObject.cardTitle}</h5>
            <p>A thing added to something else in order to complete or enhance it.</p>
        </div>
    </div>;
}

export default Ingredient;