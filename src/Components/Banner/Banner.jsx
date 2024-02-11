import React from 'react'
import Bannerimg from "../../assets/meg.jpg";
import { TbHeartDiscount } from "react-icons/tb";
import {GrSecure} from "react-icons/gr";
import {IoFastFoodOutline} from "react-icons/io5"
import { RiMoneyDollarCircleLine } from "react-icons/ri";

function Banner() {
  return (
        <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0 my-10'>
           <div className='container'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap:6 items-center'>
     <div data-aos="zoom-in"> 
        <img className="max-w-[350px] h-[480px] w-full rounded-md m-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover" src={Bannerimg} alt="" />
     </div> 

     <div className='flex flex-col justify-center gap-6 sm:pt-0'>
        <h1 className='text-3xl sm:text-6xl font-bold'> Latest Summer Collection</h1>
        <p className=' text-6xl text-tertiary font-serif items-center pl-45 gap-7'>......Upto 50% Off</p>
        <p className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rem exercitationem praesentium sed error quas a possimus fuga odio ullam laudantium soluta dicta nobis animi, vel tenetur explicabo eaque excepturi!</p>
        <div className='flex flex-col gap-4'>  
            <div className='flex items-center gap-5'>
                <GrSecure className=' cursor-pointer text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-pink-300 dark:bg-violet-500'/>
                <h1 >
                    Qualified Products
                </h1>
                </div>
                <div data-aos="fade-up" className='flex items-center gap-5'>
                    <IoFastFoodOutline  className=' cursor-pointer text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-300 dark:bg-orange-500'/>
                    <p>Fast Delivery</p>
                </div>


                <div data-aos="fade-up" className='flex items-center gap-5'>
                <RiMoneyDollarCircleLine  className='cursor-pointer text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-300 dark:bg-green-500'/>
                <h1>Easy Payment</h1>
                </div>
                </div>   
     </div>
      </div>
        </div>
    </div>
  )
}

export default Banner 