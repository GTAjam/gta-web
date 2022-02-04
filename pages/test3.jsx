import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
// import "swiper/components/effect-coverflow/effect-coverflow.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import "./styles.css";
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function App() {
    return (
        // <body>

        <div className="containers">
            <div className="title_wrapper">
                <div className="reactLogo">
                    <img src="images/react.png" />
                </div>
                <div className="title_">
                    <span>React</span>Swiper Slider
                </div>
            </div>
            <Swiper
                modules={[Navigation, Pagination, EffectCoverflow]}

                navigation={true}
                effect={"coverflow"}
                centeredSlides={true}
                // slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                // slidesPerView={typeof window !== "undefined" ? (() => { window.innerWidth < 768 ? 1 : "auto" })() : "Error"}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                pagination={{
                    clickable: true
                }}
                className="mySwiper"
            >
                <SwiperSlide className="swiper-slide">
                    <img src="images/mihir.png" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="images/megha.png" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="images/mihir.png" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="images/megha.png" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="images/mihir.png" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src="images/megha.png" />
                </SwiperSlide>
            </Swiper>
        </div>

        // </body>
    );
}