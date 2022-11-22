import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

SwiperCore.use([Autoplay, Navigation]);
const ClientSlider = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
      setData([
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
    ])}, [])

    return (


        <section className="section-box overflow-visible">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto">
                        <div className="position-relative">
                            <div className="slider-news">
                                <div className="swiper-container">
                                    <Swiper
                                        breakpoints={{
                                            120: {
                                                slidesPerView: 2,
                                            },
                                            768: {
                                                slidesPerView: 3,
                                            },
                                            1200: {
                                                slidesPerView: 5,
                                            }
                                        }}
                                        speed={3000}
                                        loop={true}
                                        autoplay={{
                                            delay: 1,
                                            disableOnInteraction: false
                                        }}
                                        freeMode={true}
                                        spaceBetween={30}
                                        className="row"
                                    >
                                        {data.map((item) => (
                                            <div  key={(Math.random() * 100)} className="swiper-wrapper">

                                                <SwiperSlide key={item.id} className="col-lg-6 col-md-6 col-12 ">
                                                    <img className="img-responsive" src={item.src} alt="Agon" />
                                                </SwiperSlide>
                                            </div>
                                        ))}

                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientSlider