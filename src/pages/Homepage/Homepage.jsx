import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import BrandArea from "../../Components/BrandAreaSection/BrandArea";
import Features from "../../Components/Features/Features";
import Products from "../../Components/ProductSection/Products";
import ShopArea from "../../Components/ShopAreaSection/ShopArea";
import { VideoSection,StatsBar } from "../../Components/VideoSection/VideoSection";
import Ingredient from "../../Components/IngredientSection/Ingredient";
import Formula from "../../Components/FormulaSection/Formula";
import PricingSection from "../../Components/PricingSection/PricingSection";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";
import NewsSection from "../../Components/NewsSection/NewsSection";

function HomePage()
{
    return(
        <>
            <HeroSection />
            <BrandArea/>
            <Features/>
            <Products/>
            <ShopArea/>
            <VideoSection/>
            <StatsBar/>
            <Ingredient></Ingredient>
            <Formula></Formula>
            <PricingSection></PricingSection>
            <TestimonialSection></TestimonialSection>
            <NewsSection></NewsSection>
        </> 
        );
}

export default HomePage;