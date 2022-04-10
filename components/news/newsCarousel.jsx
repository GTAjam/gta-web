import React from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow, EffectCube } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Cube } from 'heroicons-react';


const NewsCarousel = () => {
  return (
    <div className="bg-dark" style={{ padding: "0 1.8rem" }}>

      <h2 className="text-center" style={{ fontSize: "3.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
        Recent Posts
      </h2>

      <Swiper className="container" style={{ padding: "1rem 0 2.5rem 0", marginRight: "auto" }}
        // id="swiper-color"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow, EffectCube]}

        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
            // width: 320
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          }
        }}

        autoplay
        updateOnWindowResize
        effect="coverflow"
        // spaceBetween={5}
        // slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop="true"
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        <div>
          <SwiperSlide className="carouselImage"><img src="Post Images/post_1.jpg" alt="recentPostCarousel" /></SwiperSlide>
          <SwiperSlide className="carouselImage"><img src="Post Images/post_5.jpg" alt="recentPostCarousel" /></SwiperSlide>
          <SwiperSlide className="carouselImage"><img src="Post Images/post_2.jpg" alt="recentPostCarousel" /></SwiperSlide>
          <SwiperSlide className="carouselImage"><img src="Post Images/post_6.jpg" alt="recentPostCarousel" /></SwiperSlide>
          <SwiperSlide className="carouselImage"><img src="Post Images/post_3.jpg" alt="recentPostCarousel" /></SwiperSlide>
          <SwiperSlide className="carouselImage"><img src="Post Images/post_7.jpg" alt="recentPostCarousel" /></SwiperSlide>
          <SwiperSlide className="carouselImage"><img src="Post Images/post_4.jpg" alt="recentPostCarousel" /></SwiperSlide>
          <SwiperSlide className="carouselImage"><img src="Post Images/post_8.jpg" alt="recentPostCarousel" /></SwiperSlide>
        </div>

      </Swiper>

    </div>
  );
};

export default NewsCarousel;
