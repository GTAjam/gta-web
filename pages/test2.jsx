import React from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import InstagramEmbed from 'react-instagram-embed';



// const data = [
//     {
//         id: 1,
//         username: "heck",
//         testiminial: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, corrupti!"
//     },
//     {
//         id: 2,
//         username: "heck",
//         testiminial: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, corrupti!"
//     },
//     {
//         id: 3,
//         username: "heck",
//         testiminial: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, corrupti!"
//     },
//     {
//         id: 4,
//         username: "heck",
//         testiminial: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, corrupti!"
//     },
//     {
//         id: 5,
//         username: "heck",
//         testiminial: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, corrupti!"
//     },
//     {
//         id: 6,
//         username: "heck",
//         testiminial: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, corrupti!"
//     },
// ];


const test2 = () => {
    return (
        <>
            {/* <Swiper className="my-20 container"
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                autoplay
                effect="coverflow"
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                loop="true"
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            > */}
            <code className="code">
                {`
                    .swiper-button-next { color: red; }
                `}
            </code>
            <Swiper
                id="swiper-color"
                width="500"
                navigation
                spaceBetween={5}
                slidesPerView={1}
            >
                {/* <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ... */}

                {/* {data.map(user => (
                    <SwiperSlide key={user.id}>
                        <div>
                            {user.testiminial}
                        </div>
                    </SwiperSlide>
                ))} */}

                <div style={{ marginLeft: "80px" }}>

                    <SwiperSlide><img src="images/_post_1.jpg" alt="recentPostCarousel" /></SwiperSlide>
                    <SwiperSlide><img src="images/_post_1.jpg" alt="recentPostCarousel" /></SwiperSlide>
                    <SwiperSlide><img src="images/_post_1.jpg" alt="recentPostCarousel" /></SwiperSlide>
                    <SwiperSlide><img src="images/_post_1.jpg" alt="recentPostCarousel" /></SwiperSlide>
                    <SwiperSlide><img src="images/_post_1.jpg" alt="recentPostCarousel" /></SwiperSlide>
                    <SwiperSlide><img src="images/_post_1.jpg" alt="recentPostCarousel" /></SwiperSlide>
                    <SwiperSlide><img src="images/_post_1.jpg" alt="recentPostCarousel" /></SwiperSlide>

                </div>

            </Swiper>

        </>
    );
};

export default test2;
