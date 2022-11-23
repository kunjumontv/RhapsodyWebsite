import Link from 'next/link'
import React from 'react'
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


SwiperCore.use([Autoplay, Navigation]);
const WorkSlider = () => {

    const data = [
        {
            id: 11,
            img: "9.jpg",
            avatar: "1.jpg",
            title: "Training",
            author: "Sound Box"
        },
        {
            id: 22,
            img: "10.jpg",
            avatar: "2.jpg",
            title: "Delivery",
            author: "Sound Box"
        },
    ];

    return (


        <section className="section-box ">
            <div className="container pb-100 mb-100">
                <div className="row">
                    <div className="col-lg-12">
                        <div className=" position-relative">
                            <div className="slider-news">
                                <div className="swiper-container swiper-group-2">
                                    <Swiper
                                        slidesPerView={2}
                                        slidesPerGroup={2}
                                        speed={1000}
                                        loop={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false
                                        }}
                                        navigation={{
                                            prevEl: ".swiper-button-prev-5",
                                            nextEl: ".swiper-button-next-5",
                                        }}
                                        className="row"
                                    >
                                        {data.map((item) => (
                                            <div key={item.id}>
                                                {/* <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" /> */}
                                                <SwiperSlide key={item.id + 10} className="col-lg-6 col-md-6 pr-40">
                                                    <img className="img-responsive bdrd-rb-140" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                                                </SwiperSlide>

                                                <SwiperSlide key={item.id + 15} className="col-lg-6 col-md-6 pl-40">
                                                    <img className="img-responsive bdrd-lb-140" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                                                </SwiperSlide>
                                                {/* <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" /> */}
                                            </div>
                                        ))}

                                    </Swiper>
                                </div>
                            </div>
                            <div className="swiper-button-prev swiper-button-prev-5 mt-20" />

                            <div className="swiper-button-next swiper-button-next-5 mt-20" />

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default WorkSlider