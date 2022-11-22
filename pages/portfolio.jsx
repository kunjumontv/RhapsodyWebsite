import React from 'react'
import Blog from '../components/Blog'
import Link from "next/link";
import CounterUp from '../components/CounterUp';
import { FaClock } from 'react-icons/fa';
import ClientSlider from '../components/ClientSlider';
import { FaArrowDown } from 'react-icons/fa';
import WorkSlider from '../components/WorkSlider';
const portfolio = () => {
  return (
    <>
      {/* banner  */}
      <section className="section-box">
        <div className="container mt-120">
          <div className="row">

            <div className="col-lg-6 col-sm-12 block-we-do text-center text-lg-start">
              <p className="text-body-tiny-2">Working alongside great brands</p>
              <h3 className="text-heading-1 text-center text-lg-start">
                We’re committed to doing something <span className="color-green-900">extraordinary</span> every
              </h3>
              <p className="text-body-tiny-3">Designed by marketers. Untitled gives you the guidance,<br></br>innovation you need to become a better marketer.</p>
            </div>

            <div className="col-lg-6 d-none d-lg-block text-end">
              <img id="logo" className="bdrd-rb-300 img-responsive-about" src="assets/imgs/page/homepage3/img-2.png" alt="Agon" />
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 text-body-tiny-4">
            <p className="">Scroll for more</p>
            <FaArrowDown className="color-green-900" />
          </div>
        </div>
      </section>


      {/* Our Experience */}
      <section className="section-box">
        <div className="container gray-light-background pt-100 pb-80 mt-100 ">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-10 block-we-do">
              <h3 className="text-heading-1 mt-10">Merchandising <br></br>Services</h3>
              <p className="text-body-lead color-gray-600 mt-80">
                Our merchandising team provides customized merchandising services for retail execution solutions. </p>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>
          <div className="row mt-50 block-we-do">

            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-5 col-md-5 pr-40">
              <img className="img-responsive bdrd-rb-140" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
            </div>

            <div className="col-lg-5 col-md-5 pl-40 ">
              <img className="img-responsive bdrd-lb-140" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />

          </div>
        </div>
      </section>


      <section className="section-box ">
        <div className="container gray-dark-background pt-100 pb-100">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-12 col-12 block-we-do  white-background bdrd-40 pt-100 pb-100">
              <div className="row mt-50 block-we-do">

            
            <div className="col-lg-6 col-md-6 pr-40">
              <img className="img-responsive bdrd-rb-140" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
            </div>

            <div className="col-lg-6 col-md-6 pl-40 ">
              <img className="img-responsive bdrd-lb-140" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
            </div>
           

          </div>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />


          </div>
        </div>
      </section >

      <section className="section-box">
        <div className="container gray-light-background pt-100 pb-80 mt-100 ">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-10 block-we-do">
              <h3 className="text-heading-1 mt-10">Merchandising <br></br>Services</h3>
              <p className="text-body-lead color-gray-600 mt-80">
                Our merchandising team provides customized merchandising services for retail execution solutions. </p>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>
          <div className="row mt-50 block-we-do">

            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-5 col-md-5 pr-40">
              <img className="img-responsive bdrd-rb-140" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
            </div>

            <div className="col-lg-5 col-md-5 pl-40 ">
              <img className="img-responsive bdrd-lb-140" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />

          </div>
        </div>
      </section>
      <section className="section-box">
        <div className="container pt-100 pb-80 mt-100 ">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-10 block-we-do">

              <p className="text-body-lead color-gray-600 mt-80">
                Our merchandising team provides customized merchandising services for retail execution solutions. </p>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>
          <div className="row mt-50 block-we-do">

            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-5 col-md-5 pr-40">
              <img className="img-responsive bdrd-rb-140" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
            </div>

            <div className="col-lg-5 col-md-5 pl-40 ">
              <img className="img-responsive bdrd-lb-140" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />

          </div>
        </div>
      </section>

      <section className="section-box ">
        <div className="container gray-dark-background pt-100 pb-100">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-12 col-12 block-we-do  white-background bdrd-40 pt-100 pb-100">
              <div className="row mt-50 block-we-do">

            
            <div className="col-lg-6 col-md-6 pr-40">
              <img className="img-responsive bdrd-rb-140" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
            </div>

            <div className="col-lg-6 col-md-6 pl-40 ">
              <img className="img-responsive bdrd-lb-140" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
            </div>
           

          </div>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />


          </div>
        </div>
      </section >

      <section className="section-box ">
        <div className="container gray-dark-background pt-100 pb-100">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-12 col-12 block-we-do  white-background bdrd-40 pt-100 pb-100">
              <div className="row mt-50 block-we-do">

            
            <div className="col-lg-6 col-md-6 pr-40">
              <img className="img-responsive bdrd-rb-140" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
            </div>

            <div className="col-lg-6 col-md-6 pl-40 ">
              <img className="img-responsive bdrd-lb-140" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
            </div>
           

          </div>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />


          </div>
        </div>
      </section >





    </>
  )
}

export default portfolio