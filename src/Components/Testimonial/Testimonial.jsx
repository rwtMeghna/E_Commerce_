import React from "react";
import Slider from "react-slick";
const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

function Testimonial() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto px-1 py-2">
          <p data-aos="fade-up " className="text-3xl text-primary">
            Customer Reviews
          </p>
          <h1
            data-aos="fade-up "
            className="text-3xl font-bold text-tertiary py-2"
          >
            Testimonial
          </h1>
          <p data-aos="fade-up" className="text-sm  py-2">
            loreum scjbxcssakxnmxmx,xssknsknxnslk
          </p>
        </div>
        {/* cards */}
        <div data-aos="fade-up">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl hover:scale-105 hover:bg-black/40 dark:bg-pink-800 bg-black/30 relative w-60 h-80"
                >
                  <div className="mb-4">
                    <img
                      className="rounded-full w-30 h-30"
                      src={data.img}
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                        <p className="text-xs text-gray-500">
                            {data.text}
                        </p>
                        <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
