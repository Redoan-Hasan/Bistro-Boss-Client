import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ItemsSlider = () => {
  const items = [
    {
      itemPhoto: "/assets/home/slide1.jpg",
      itemsTitle: "PIZZAS",
    },
    {
      itemPhoto: "/assets/home/slide2.jpg",
      itemsTitle: "SOUPS",
    },
    {
      itemPhoto: "/assets/home/slide3.jpg",
      itemsTitle: "DESSERTS",
    },
    {
      itemPhoto: "/assets/home/slide4.jpg",
      itemsTitle: "SALADS",
    },
    {
      itemPhoto: "/assets/home/slide5.jpg",
      itemsTitle: "DRINKS",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper my-4"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <article className="relative overflow-hidden rounded-lg  transition hover:shadow-lg ">
              <img
                alt=""
                src={item.itemPhoto}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  

                  <h1 className="mt-2 text-center text-3xl font-medium font-cinzel text-[#FFF]">
                    {item.itemsTitle}
                  </h1>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ItemsSlider;
