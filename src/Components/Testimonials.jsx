import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import OrderOnline from "./OrderOnline";
import { FaStar } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
        "_id": "643010e0f5a7e52ce1e8fa65",
        "name": "Jane Doe",
        "details": "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "rating": 3
    },
    {
        "_id": "643010f9f5a7e52ce1e8fa66",
        "name": "John Doe",
        "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
        "rating": 2
    },
    {
        "_id": "6430110af5a7e52ce1e8fa67",
        "name": "MJ Doe",
        "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
        "rating": 5
    },
    {
        "_id": "64301123f5a7e52ce1e8fa68",
        "name": "Sarah Smith",
        "details": "I found the product to be incredibly useful and easy to use. The interface is intuitive, and it has all the features I need. Highly recommend it!",
        "rating": 4
    },
    {
        "_id": "6430113af5a7e52ce1e8fa69",
        "name": "Robert Johnson",
        "details": "This is by far the best service I have ever used. The customer support is outstanding, and the product itself is top-notch. I couldn't be happier!",
        "rating": 5
    }
]
  return (
    <div className="py-8 md:py-12 lg:py-16 bg-white">
      <div>
        <OrderOnline
          textOne={"What Our Clients Say"}
          textTwo={"TESTIMONIALS"}
        />
      </div>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        <Swiper 
          navigation={true} 
          modules={[Navigation]} 
          className="mySwiper"
          loop={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 1,
              spaceBetween: 20
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-16 lg:px-32 text-center">
                {/* Rating Stars */}
                <div className="flex mb-3 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`text-xl sm:text-2xl ${i < testimonial.rating ? 'text-[#CD9003]' : 'text-gray-300'}`}
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
