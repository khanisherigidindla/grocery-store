import React from 'react'
import GetProducts from './components/GetProducts'
import AddProduct from './admin/AddProduct'
import LandingPage from './pages/LandingPage'
import AdminDashboard from './pages/AdminDashboard'
import { Route, Routes } from 'react-router-dom'
import DetailComponent from './components/DetailComponent'
import Navbar from './components/Navbar'
import SendOtp from './user_email/SendOtp'
import OtpVerify from './user_email/OtpVerify'
import ShowCart from './components/ShowCart'
import Invoice from './components/Invoice'
import FruitProducts from './products/FruitProducts'
import SearchComp from './components/SearchComp'
import AllProducts from './products/AllProducts'
import VegetableProducts from './products/VegetableProducts'
import FoodGrains from './products/FoodGrains'
import ElectronicsProducts from './products/ElectronicsProducts'
import Settings from './components/Settings'
import FashionProducts from './products/FashionProducts'
import AIHubProducts from './products/AIHubProducts'


const App = () => {
  return (
    <div>
      <Navbar />
      <SearchComp />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/single/:id' element={<DetailComponent />} />
        <Route path='/send-otp' element={<SendOtp />} />
        <Route path='/verify-otp' element={<OtpVerify />} />
        <Route path='/cart' element={<ShowCart />} />
        <Route path='/invoice' element={<Invoice />} />
<Route path='/add-product' element={<AddProduct />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path='/fruit-products' element={<FruitProducts />} />
        <Route path='/vegetables' element={<VegetableProducts />} />
        <Route path='/food-grains' element={<FoodGrains />} />
        <Route path='/electronics' element={<ElectronicsProducts />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/fashion' element={<FashionProducts />} />
        <Route path='/ai-hub' element={<AIHubProducts />} />
      </Routes>
    </div>
  )
}

export default App