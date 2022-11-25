import React, { useRef } from "react";
import Blog from "../components/Blog";
import Link from "next/link";
import CounterUp from "../components/CounterUp";
import { FaClock } from "react-icons/fa";
import ClientSlider from "../components/ClientSlider";
import { FaArrowDown } from "react-icons/fa";
import WorkSlider from "../components/WorkSlider";


const portfolio = () => {

  const portfolioSection = useRef(null)

  const gotoportfolioSection = ()=>{
    window.scrollTo({
      top:portfolioSection.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* banner  */}
      <section className="section-box mb-145">
        <div className="container mt-120">
          <div className="row portfolio-cap-align">
            <div className="col-lg-6 col-sm-12 text-center text-lg-start ">
              <div>
                <p className="text-body-tiny-2">
                  Working alongside great brands
                </p>
                <h3 className="text-heading-1 text-lg-start ">
                  We’re committed to doing something{" "}
                  <span className="color-green-900">extraordinary</span> every
                </h3>
              </div>
              <p className="text-body-tiny-3">
                Designed by marketers. Untitled gives you the guidance,<br></br>
                innovation you need to become a better marketer.
              </p>
            </div>

            <div className="col-lg-6 col-sm-12 d-none d-lg-block text-end">
              <img
                id="logo"
                className="bdrd-rb-300 img-responsive-about "
                src="assets/imgs/page/portfolio/img-1.png"
                alt="Agon"
              />
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 text-body-tiny-4 mt-80">
            <p className="">Scroll for more</p>
            <FaArrowDown className="color-green-900" onClick={gotoportfolioSection}/>            
          </div>
        </div>
      </section>

      <main className="section-big gray-dark-background bdrd-40 pb-100 pt-50 mb-20 portfolio-main">
        <section className="bdrd-40 mb-20 portfolio-sec-width" ref={portfolioSection}>
          <div
            className="pt-50 pb-80 pl-50 pr-50 mt-100"
          >
            <div className="row" >
              <div className="col-lg-12 col-sm-12">
                <h3 className="text-heading-1" >Our Portfolio</h3>
                <p className="text-body-lead color-gray-600 mt-35 mb-35">
                  Relentless improvmement of the product and upgrading of
                  consumer tastes
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-5 pr-40">
                <img
                  className="img-responsive bdrd-rb-140"
                  src="assets/imgs/page/portfolio/img-before.png"
                  alt="Agon"
                />
              </div>

              <div className="col-lg-6 col-md-5 pl-40 ">
                <img
                  className="img-responsive bdrd-lb-140"
                  src="assets/imgs/page/portfolio/img-after.png"
                  alt="Agon"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Experience */}
        <section className="white-background bdrd-40 mb-20 portfolio-sec-width">
          <div className="pt-50 pb-80 mt-50">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
              <div className="col-lg-10 col-sm-10 block-we-do">
                <p className="text-body-lead color-gray-600 mt-80">
                  Experienced team to effectively envision and maintain
                  planograms to help our clients gain that competitive edge.{" "}
                </p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            </div>
            <div className="row mt-50 block-we-do">
              <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
              <div className="col-lg-5 col-md-5 pr-40">
                <img
                  className="img-responsive bdrd-rb-140"
                  src="assets/imgs/page/portfolio/img-before.png"
                  alt="Agon"
                />
              </div>

              <div className="col-lg-5 col-md-5 pl-40 ">
                <img
                  className="img-responsive bdrd-lb-140"
                  src="assets/imgs/page/portfolio/img-after.png"
                  alt="Agon"
                />
              </div>
              <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            </div>
          </div>
        </section>

        <section className="bdrd-40 mb-20 portfolio-sec-width">
          <div className="pt-50 pb-80 ">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
              <div className="col-lg-10 col-sm-10 block-we-do">
                <p className="text-body-lead color-gray-600 mt-80">
                  Relentless improvmement of the product and upgrading of
                  consumer tastes.{" "}
                </p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            </div>
            <div className="row mt-50 block-we-do">
              <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
              <div className="col-lg-5 col-md-5 pr-40">
                <img
                  className="img-responsive bdrd-rb-140"
                  src="assets/imgs/page/portfolio/img-before.png"
                  alt="Agon"
                />
              </div>

              <div className="col-lg-5 col-md-5 pl-40 ">
                <img
                  className="img-responsive bdrd-lb-140"
                  src="assets/imgs/page/portfolio/img-after.png"
                  alt="Agon"
                />
              </div>
              <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            </div>
          </div>
        </section>

        <section className="white-background bdrd-40 mb-20 portfolio-sec-width">
          <div className="pt-50 pb-80 ">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
              <div className="col-lg-10 col-sm-10 block-we-do">
                <p className="text-body-lead color-gray-600 mt-80">
                  Experienced team to effectively envision and maintain
                  planograms to help our clients gain that competitive edge.
                </p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            </div>
            <div className="row mt-50 block-we-do">
              <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
              <div className="col-lg-5 col-md-5 pr-40">
                <img
                  className="img-responsive bdrd-rb-140"
                  src="assets/imgs/page/portfolio/img-before.png"
                  alt="Agon"
                />
              </div>

              <div className="col-lg-5 col-md-5 pl-40 ">
                <img
                  className="img-responsive bdrd-lb-140"
                  src="assets/imgs/page/portfolio/img-after.png"
                  alt="Agon"
                />
              </div>
              <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            </div>
          </div>
        </section>
      </main>

      {/* <section className="section-box">
        <div className="container gray-light-background pt-100 pb-80 ">
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
              <img className="img-responsive bdrd-rb-140" src="assets/imgs/page/portfolio/img-before.png" alt="Agon" />
            </div>

            <div className="col-lg-5 col-md-5 pl-40 ">
              <img className="img-responsive bdrd-lb-140" src="assets/imgs/page/portfolio/img-after.png" alt="Agon" />
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />

          </div>
        </div>
      </section> */}
    </>
  );
};

export default portfolio;
