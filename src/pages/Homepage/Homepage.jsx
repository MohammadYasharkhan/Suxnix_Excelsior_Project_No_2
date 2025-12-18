import HeroSection from "../../Components/HeroSection/HeroSection";
import BrandArea from "../../Components/BrandAreaSection/BrandArea";
import Features from "../../Components/Features/Features";
import Products from "../../Components/ProductSection/Products";
import ShopArea from "../../Components/ShopAreaSection/ShopArea";
import { VideoSection, StatsBar } from "../../Components/VideoSection/VideoSection";
import Ingredient from "../../Components/IngredientSection/Ingredient";
import Formula from "../../Components/FormulaSection/Formula";
import PricingSection from "../../Components/PricingSection/PricingSection";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";
import NewsSection from "../../Components/NewsSection/NewsSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function HomePage() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            if (!el) return;

            const yOffset = -100; // header height
            const y =
                el.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });

            // clear navigation state
            window.history.replaceState({}, document.title);
        }
    }, [location]);


    return (
        <>
            <HeroSection />
            <BrandArea />
            <Features />
            <Products />
            <ShopArea />
            <VideoSection />
            <StatsBar />
            <Ingredient></Ingredient>
            <Formula></Formula>
            <PricingSection></PricingSection>
            <TestimonialSection></TestimonialSection>
            <NewsSection></NewsSection>
        </>
    );
}

export default HomePage;