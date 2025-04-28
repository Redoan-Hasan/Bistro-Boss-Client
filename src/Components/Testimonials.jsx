import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import OrderOnline from "./OrderOnline";
import { useEffect, useState } from "react";
import Loader from "../shared/Loader";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await fetch("http://localhost:5000/testimonials")
        .then((res) => res.json())
        .then((data) => setTestimonials(data));
    };
    getData();
  }, [testimonials]);
  return (
    <div className="py-8 md:py-12 lg:py-16 bg-white">
      <div>
        <OrderOnline
          textOne={"What Our Clients Say"}
          textTwo={"TESTIMONIALS"}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          loop={testimonials?.length > 1}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-16 lg:px-32 text-center">
                {/* Rating Stars */}
                <div className="flex mb-3 sm:mb-6">
                  {/* can use react rating for dynamic cases (give it a try if you want)  */}
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-xl sm:text-2xl ${
                        i < testimonial.rating
                          ? "text-[#CD9003]"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <FaQuoteLeft className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-6 text-gray-800" />

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-3xl">
                  {testimonial.details}
                </p>

                {/* Name */}
                <h3 className="text-[#CD9003] text-lg sm:text-xl font-medium">
                  {testimonial.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
