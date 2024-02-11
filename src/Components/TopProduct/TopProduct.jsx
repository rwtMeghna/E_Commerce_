import React from "react";
import Img1 from "../../assets/shirt.png";
import Img2 from "../../assets/shirt2.png";
import Img3 from "../../assets/shirt3.png";
import Img4 from "../../assets/product_22.png";
// import Img5 from "../../assets/product_10.png"
// import Img6 from "../../assets/product_4.png";
// import Img7 from "../../assets/product_5.png";
// import Img8 from "../../assets/product_6.png";
// import Img9 from "../../assets/product_11.png"
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    img: Img4,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  //   {
  //     id: 5,
  //     img: Img5,
  //     title: "Women shirt",
  //     description:
  //       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
  //   {
  //     id: 6,
  //     img: Img6,
  //     title: "Women shirt",
  //     description:
  //       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
  //   {
  //     id: 7,
  //     img: Img7,
  //     title: "Women shirt",
  //     description:
  //       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
  //   {
  //     id: 8,
  //     img: Img8,
  //     title: "Women shirt",
  //     description:
  //       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
];

function TopProduct({handleOrderPopup}) {
  return (
    <div>
      <div className="container">
        {/* header */}

        <div className="text-center mb-40 mt-11 max-w-[600px]  mx-auto  ">
          <p data-aos="fade-up" className="text-lg font-bold text-primary">
            Top Rated Product
          </p>
          <h1 data-aos="fade-up" className="text-3xl text-tertiary font-bold">
            Best Product
          </h1>
          <p data-aos="fade-up" className="text-xs text-black font-serif">
            LOreum scbskcjnkjcsnskskls xmsxsoicsicslcs
          </p>
        </div>

        {/* Body */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md rounded-md bg-gray-400    "
                />
              </div>

              {/* detail */}

              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1 cursor-pointer">
                  <FaStar className="text-yellow-500 hover:text-yellow-600" />
                  <FaStar className="text-yellow-500  hover:text-yellow-600" />
                  <FaStar className="text-yellow-500  hover:text-yellow-600" />
                  <FaStar className="text-yellow-500  hover:text-yellow-600" />
                  <FaStar className="text-yellow-500  hover:text-yellow-600" />
                      </div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProduct;
