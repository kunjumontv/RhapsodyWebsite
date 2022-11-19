import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

const ClientSlider = () => {
  return (
    <section className="section-box overflow-visible mb-100">
      <div className="container">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="row justify-content-md-center">
          <SwiperSlide className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"> <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-1.svg" /></Link></SwiperSlide>
          <SwiperSlide className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
            <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-2.svg" /></Link>
          </SwiperSlide>
          <SwiperSlide className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
            <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></Link>
          </SwiperSlide>
          <SwiperSlide className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
            <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-4.svg" /></Link>
          </SwiperSlide>
          <SwiperSlide className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
            <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-5.svg" /></Link>
          </SwiperSlide>
          <SwiperSlide className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">            <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-6.svg" /></Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section >
  )
}

export default ClientSlider