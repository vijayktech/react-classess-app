import React from 'react'
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Carousel from './components/carousel/Carousel';
import Navbar from './components/navbar/Navbar';
import Categories from './components/categories/Categories';

export default function App() {
  return <div>    
          <Header />
          <Navbar /> 
          <Categories />
          <Carousel />
          <Main />
          <Footer />    
        </div>

}
