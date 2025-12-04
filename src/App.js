import './App.css';
import BrandArea from './Components/BrandAreaSection/BrandArea';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import Formula from './Components/FormulaSection/Formula';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import Ingredient from './Components/IngredientSection/Ingredient';
import NewsSection from './Components/NewsSection/NewsSection';
import PricingSection from './Components/PricingSection/PricingSection';
import Products from './Components/ProductSection/Products';
import ShopArea from './Components/ShopAreaSection/ShopArea';
import TestimonialSection from './Components/TestimonialSection/TestimonialSection';
import {VideoSection,StatsBar} from './Components/VideoSection/VideoSection';

function App() {

  return (
    <div className="app">
      <Header />
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
      <Footer></Footer>
    </div>
  );
}

export default App;
