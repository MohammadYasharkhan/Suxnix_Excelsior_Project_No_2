import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import OurShopPage from './pages/OurShopPage/OurShopPage';
import ShopDetailPage from './pages/ShopDetailPage/ShopDetailPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/ourshop' element={<OurShopPage></OurShopPage>}></Route>
        <Route path='/shopDetails' element={<ShopDetailPage></ShopDetailPage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/signup' element={<SignUpPage></SignUpPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
