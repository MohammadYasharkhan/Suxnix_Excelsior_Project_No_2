import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import OurShopPage from './pages/OurShopPage/OurShopPage';
import ShopDetailPage from './pages/ShopDetailPage/ShopDetailPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import { ProductSepratorContextProvider } from './context/StoreContext';
import CartPage from './pages/CartPage/CartPage';
import OurBlogPage from './pages/OurBlogPage/OurBlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage/BlogDetailsPage';
import ContactUs from './pages/ContactUsPage/ContactUs';

function App() {
  return (
    <ProductSepratorContextProvider>
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/ourshop' element={<OurShopPage></OurShopPage>}></Route>
        <Route path='/shopDetails' element={<ShopDetailPage></ShopDetailPage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/signup' element={<SignUpPage></SignUpPage>}></Route>
        <Route path='/cart' element={<CartPage></CartPage>}></Route>
        <Route path='/blogPost' element={<OurBlogPage></OurBlogPage>}></Route>
        <Route path='/blogDetails' element={<BlogDetailsPage></BlogDetailsPage>}></Route>
        <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
    </ProductSepratorContextProvider>
  );
}

export default App;
