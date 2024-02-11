import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Product from './Components/Product/Product';
import AOS from "aos";
import "aos/dist/aos.css";
import TopProduct from './Components/TopProduct/TopProduct';
import Banner from "./Components/Banner/Banner.jsx";
import Testimonial from "./Components/Testimonial/Testimonial.jsx"
import Footer from './Components/Footer/Footer.jsx';

const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup}/>
    <Hero handleOrderPopup={handleOrderPopup}/> 
    <Product/>  
    <TopProduct/> 
    <Banner/> 
  <Testimonial/>  
  <Footer/> 
    </div>
  )
}

export default App