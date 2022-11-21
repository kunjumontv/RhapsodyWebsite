import Link from 'next/link'
import React from 'react'
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

SwiperCore.use([Autoplay, Navigation]);
const TestSlider = () => {

    
    const data = [
        {
            id: 1,
            img: "9.jpg",
            src: "assets/imgs/slider/logo/sample-logo-1.svg"
        },
        {
            id: 2,
            img: "9.jpg",
            src: "assets/imgs/slider/logo/sample-logo-1.svg"
        },
        {
            id: 3,
            img: "9.jpg",
            src: "assets/imgs/slider/logo/sample-logo-1.svg"
        },
        {
            id: 4,
            img: "9.jpg",
            src: "assets/imgs/slider/logo/sample-logo-1.svg"
        },
        {
            id: 5,
            img: "9.jpg",
            src: "assets/imgs/slider/logo/sample-logo-1.svg"
        },
        {
            id: 6,
            img: "9.jpg",
            src: "assets/imgs/slider/logo/sample-logo-1.svg"
        },
    ];

    return (


        <section className="section-box overflow-visible">
            <div className="container  pt-100">
                <div className="row">
                    <div className="col-lg-12 mx-auto">
                        <div className="position-relative">
                            <div className="slider-news">
                                <div className="swiper-container">
                                    <Swiper
                                        slidesPerView={6}
                                        slidesPerGroup={1}
                                        speed={1000}
                                        loop={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false
                                        }}

                                        modules={[FreeMode]}
                                        spaceBetween={30}
                                        className="row"
                                    >
                                        {data.map((item) => (
                                            <div key={item.id}>
                                                {/* <SwiperSlide key={item.id+10} className="col-lg-6 col-md-7 white-background pt-lg-5 pb-lg-5 pe-lg-5 ps-lg-5 bdrd-left-40 ">
                                                    <h4 className="text-heading-2 mb-10 mt-10 mb-30">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-body-text-1 color-gray-500">
                                                        We have over 400 + trained Merchandisers across all seven Emirates, who are on top of RMS Merchandising process. Our up-to-date and efficient training programs enables our
                                                    </p>
                                                </SwiperSlide> */}

                                                <SwiperSlide key={item.id + 15} className="col-lg-6 col-md-5 bdrd-right-40 pt-lg-4 pb-lg-4 pt-sm-3 pb-sm-3 ">
                                                    <img className="img-responsive bdrd-lb-200" src={item.src} alt="Agon" />
                                                </SwiperSlide>
                                            </div>
                                        ))}

                                    </Swiper>
                                </div></div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default TestSlider