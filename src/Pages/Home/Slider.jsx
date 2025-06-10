import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image1 from "../../assets/slider-1.jpg";
import Image2 from "../../assets/slider-2.jpeg";
import Image3 from "../../assets/slider-3.jpeg";

const Slider = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="relative h-80 md:h-[420px] flex items-center justify-center rounded-2xl overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${Image1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-center px-6">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Share Your Skills, Empower Your Community
              </h2>
              <p className="text-white text-lg mb-6">
                Offer your unique services and help others grow. Skillora connects you with those who need your expertise.
              </p>
              <a href="/addService" className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow cursor-pointer">
                Start Sharing
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-80 md:h-[420px] flex items-center justify-center rounded-2xl overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${Image2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-center px-6">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Discover & Book Trusted Services
              </h2>
              <p className="text-white text-lg mb-6">
                Find the right service for your needs, from experts in your community. Booking is fast, easy, and secure.
              </p>
              <a href="/services" className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow cursor-pointer">
                Explore Services
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-80 md:h-[420px] flex items-center justify-center rounded-2xl overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${Image3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-center px-6">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Manage Your Bookings With Ease
              </h2>
              <p className="text-white text-lg mb-6">
                Keep track of your services, bookings, and updates all in one place. Skillora makes service management simple.
              </p>
              <a href="" className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow cursor-pointer">
                Go to Dashboard
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;