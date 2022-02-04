import React from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const NewsCarousel = () => {
  return (
    <div className="bg-dark">

      <h2 className="text-center" style={{ fontSize: "3.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
        Recent Posts
      </h2>

      <Swiper className="container" style={{ padding: "1rem 0 2.5rem 0" }}
        // id="swiper-color"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}

        autoplay
        updateOnWindowResize
        effect="coverflow"
        spaceBetween={5}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop="true"
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        <div>
          <SwiperSlide><img src="images/_post_1.jpg" alt="recentPostCarousel" /></SwiperSlide>
          <SwiperSlide><img src="images/_post_1.jpg" alt="recentPostCarousel" /></SwiperSlide>
          <SwiperSlide><img src="images/_post_1.jpg" alt="recentPostCarousel" /></SwiperSlide>
          <SwiperSlide><img src="images/_post_1.jpg" alt="recentPostCarousel" /></SwiperSlide>
          <SwiperSlide><img src="images/_post_1.jpg" alt="recentPostCarousel" /></SwiperSlide>
          <SwiperSlide><img src="images/_post_1.jpg" alt="recentPostCarousel" /></SwiperSlide>
          <SwiperSlide><img src="images/_post_1.jpg" alt="recentPostCarousel" /></SwiperSlide>
        </div>

      </Swiper>

    </div>
  );
};

export default NewsCarousel;
