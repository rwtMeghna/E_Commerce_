import React from 'react'
import Img1 from "../../assets/women.png";
import Img2 from "../../assets/women2.jpg";
import Img3 from "../../assets/women3.jpg";
import Img4 from "../../assets/women4.jpg";
import {FaStar} from "react-icons/fa";
// import Aos from "aos";

const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Women Ethnic",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Women western",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Goggles",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Img2,
      title: "Fashin T-Shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
  ];
  


function Product() {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600] mx-auto'>
                <p  data-aos="fade-up" className='text-lg text-primary font-bold'>
                Products selling
                </p>
                <h1 data-aos="fade-up" className='text-3xl font-bold text-tertiary'>Prodcut</h1>
                <p  data-aos="fade-up" className='text-xs text-black font-serif'>Find grooming solution</p>
            </div>
            <div>
             <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>


{
    ProductsData.map((data)=>(
        <div key={data.id} 
        data-aos="fade-up"
        data-aos-delay={data.delay}
        className='space-y-3'>
            <img src={data.img} alt=""
            className='h-[220px] w-[150px]  object-cover rounded-md  border-spacing-1 bg-tertiary'  />
            <div>
              <h3 className='font-semibold'>{data.title}</h3>
              <p className='text-sm text-black'>{data.color}</p>
              <div className='text-md text-black flex items-center gap-1'>
           
           <div className='flex justify-center'><FaStar className="text-yellow-500"/>
           <span>{data.rating}</span></div>
              </div>
            </div>
              </div>
    ))}
             </div>
            </div>
        </div>
    </div>
  )
}

export default Product