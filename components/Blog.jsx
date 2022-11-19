import Link from 'next/link'
import React from 'react'
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


SwiperCore.use([Autoplay, Navigation]);
const Blog = () => {

    const data = [
        {
            id:11,
            img: "9.jpg",
            avatar: "1.jpg",
            title: "Training",
            author: "Sound Box"
        },
        {
            id:22,
            img: "10.jpg",
            avatar: "2.jpg",
            title: "Delivery",
            author: "Sound Box"
        },
    ];

    return (


        <section className="section-box overflow-visible">
            <div className="container gray-black-background pt-100">
                <div className="row">
                    <div className="col-lg-11 mx-auto">
                        <div className="box-newsletter position-relative">
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
                                                <SwiperSlide key={item.id+10} className="col-lg-6 col-md-7 white-background pt-lg-5 pb-lg-5 pe-lg-5 ps-lg-5 bdrd-left-40 ">
                                                    <h4 className="text-heading-2 mb-10 mt-10 mb-30">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-body-text-1 color-gray-500">
                                                        We have over 400 + trained Merchandisers across all seven Emirates, who are on top of RMS Merchandising process. Our up-to-date and efficient training programs enables our
                                                    </p>
                                                </SwiperSlide>

                                                <SwiperSlide key={item.id+15} className="col-lg-6 col-md-5  text-end black-light-background  bdrd-right-40 pt-lg-4 pb-lg-4 pt-sm-3 pb-sm-3 ">
                                                    <img className="img-responsive bdrd-lb-200" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                                                </SwiperSlide>
                                            </div>
                                        ))}

                                    </Swiper>
                                </div></div>
                            <div className="swiper-button-prev swiper-button-prev-5" />

                            <div className="swiper-button-next swiper-button-next-5" />

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Blog