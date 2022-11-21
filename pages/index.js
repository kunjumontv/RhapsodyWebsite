import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import BlogSlider from '../components/Blog';
import CounterUp from '../components/CounterUp';
import Test from '../components/Test';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaClock } from 'react-icons/fa';

export default function Home() {


  return (
    <>
      {/* banner  */}
      <section className="section-box">
        <div className="container mt-120">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block">
              <img id="logo" className="bdrd-rb-300 img-responsive" src="assets/imgs/page/homepage3/img-2.png" alt="Agon" />
            </div>
            <div className="col-lg-6 col-sm-12 block-we-do">
              <h3 className="text-heading-1 mt-30 text-center text-lg-start">
                <span className="color-green-900 ">
                  Working alongside&nbsp;
                </span>
                great brands we’re committed to doing something extraordinary
              </h3>
              <div className="container mt-40">
                <div className="row">
                  <div className="col-6 text-end text-lg-start">
                    <Link href="#" className="btn btn-black">Get in Touch</Link>
                  </div>
                  <div className="col-6">
                    <Link href="#" className="btn btn-link color-gray-900">View Services</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image  */}
      <section className="section-box">
        <div className="container mt-100 gray-light-background  bdrd-top-40">
          <div className="row">
            <div className="col-lg-12 mx-auto pl-0 pr-0">
              <div className="box-image">
                <img className="img-responsive bdrd-top-40" src="assets/imgs/page/about/3/img.png" alt="Agon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-box ">
        <div className="container gray-light-background pt-100 pb-80">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-10 block-we-do">
              <h3 className="text-heading-1 mt-10">What Makes Us <br></br> Different</h3>
              <p className="text-body-lead color-gray-600 mt-80">For merchandising to be successful it must have the element of effectiveness and to provide a finished products appearance which boosts the store presentation. Our team members are considered as leaders when it comes to expertise in stores and merchandising.</p>
              <p className="text-body-lead-large color-gray-600 mt-80">We provide support to our clients by ensuring product placement, positioning and store support services</p>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>
        </div>
      </section>
      {/* Training Slider*/}
      {/* <section className="section-box overflow-visible">
        <div className="container gray-black-background pt-100">
          <div className="row">
            <div className="col-lg-11 mx-auto">
              <div className="box-newsletter position-relative">
                <div className="row">
                  <div className="col-lg-6 col-md-7 white-background pt-lg-5 pb-lg-5 pe-lg-5 ps-lg-5 bdrd-left-40">

                    <h4 className="text-heading-2 mb-10 mt-10 mb-30">
                      Training
                    </h4>
                    <p className="text-body-text-1 color-gray-500">
                      We have over 400 + trained Merchandisers across all seven Emirates, who are on top of RMS Merchandising process. Our up-to-date and efficient training programs enables our
                    </p> */}
      {/* <div className="">
                      <Link href="#" className="btn btn-black icon-arrow-right-white">Get Start</Link>
                      <Link href="#" className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">Learn More</Link>
                    </div> */}
      {/* </div>
                  <div className="col-lg-6 col-md-5  text-end black-light-background  bdrd-right-40 pt-lg-4 pb-lg-4 pt-sm-3 pb-sm-3">
                    <img className="img-responsive bdrd-lb-200" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                  </div>

                </div>
              </div>
            </div>
          </div>
         </div>
      </section> */}

      <Test />


      {/* best Merchandising Services Slider*/}
      <section className="section-box ">
        <div className="container gray-dark-background bdrd-bottom-40 ">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12" />
            <div className="col-lg-10 col-sm-10">
              <h4 className="text-heading-2 mb-50 pt-100">
                Vertical Slider
              </h4>
              <BlogSlider />
            </div>
            <div className="col-lg-1 col-sm-1 col-12 " />
          </div>
        </div>

      </section>

      {/* Counters */}
      <div className="section-box mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="text-mb-center">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3">+<CounterUp count={97} time={3} /><span className="color-green-900 text-display-5">%</span></span>
                    <p className="text-body-text color-gray-500 pl-40t text-center">Project Success</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3">+<CounterUp count={235} time={3} /><span className="color-green-900 text-display-5">k</span></span>
                    <p className="text-body-text color-gray-500 pl-40t text-center">Satisfied Clients</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3">+<CounterUp count={148} time={3} /><span className="color-green-900 text-display-5">+</span></span>
                    <p className="text-body-text color-gray-500 pl-40t text-center">Experts</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3">+<CounterUp count={44} time={3} /><span className="color-green-900 text-display-5">+</span></span>
                    <p className="text-body-text color-gray-500 pl-40t text-center">Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
        </div>
      </div>

      {/* Quoto */}
      <section className="section-box overflow-visible mb-100 ">
        <div className="container mt-100 black-light-background  bdrd-40">
          <div className="col-lg-12 col-md-12 col-sm-12 quoto-padding">
            <div className="card-square hover-up mb-20">
              <p className="text-heading-quoto color-white text-comment ">&quot;No matter where you go, It&apos;s is the coolest, most happening thing around! Not able to tell you how happy I am with it. &quot;</p>
              <div className="box-img-user">
                <div className="row">
                  <div className=" col-lg-1 col-3">
                    <div className="img-user img-user-round">
                      <img src="/assets/imgs/page/homepage2/user-1.png" alt="Agon" />
                    </div>
                  </div>
                  <div className=" col-lg-11 col-8">
                    <h4 className="text-body-lead color-white mb-5">Jane Cooper</h4>
                    <p className="text-body-text-md color-white">Biffco Enterprises Ltd.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Clients */}
      <section className="section-box overflow-visible mb-100">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-center">
              <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-1.svg" /></Link>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-center">
              <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-2.svg" /></Link>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-center">
              <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></Link>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-center">
              <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-4.svg" /></Link>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-center">
              <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-5.svg" /></Link>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-center">
              <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-6.svg" /></Link>
            </div>
          </div>
        </div>
      </section >

      {/* Blogs  */}
      <section className="section-box gray-light-background bdrd-top-40 pt-80 ">
        <div className="container mt-30">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-12 text-start">
              <h2 className="text-heading-1-1 color-gray-900 mb-10">Recent Blogs</h2>
            </div>
          </div>
        </div>
        <div className="container mt-90">
          <div className="row">
            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
              <div className="card-grid-style-4">
                <div className="grid-4-img">
                  <Link href="#"><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" /></Link>
                </div>
                <span className="color-green-900 fw-bold"> <FaClock /> &nbsp; Sep 27, 2022</span>
                <Link href="#" className="text-heading-4">We can blend colors multiple ways, the most common</Link>
                <p className="text-body-text color-gray-500 text-desc-fix-h pr-70">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper
                  sed pharetra senectus donec nunc. Consequat semper viverra nam libero justo
                  laoreet facilisis magna etiam.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
              <div className="card-grid-style-4">
                <div className="grid-4-img">
                  <Link href="#"><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" /></Link>
                </div>
                <span className="color-green-900 fw-bold"> <FaClock /> &nbsp; Sep 27, 2022</span>
                <Link href="#" className="text-heading-4">We can blend colors multiple ways, the most common</Link>
                <p className="text-body-text color-gray-500 text-desc-fix-h pr-70">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper
                  sed pharetra senectus donec nunc. Consequat semper viverra nam libero justo
                  laoreet facilisis magna etiam.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
              <div className="card-grid-style-4">
                <div className="grid-4-img">
                  <Link href="#"><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" /></Link>
                </div>
                <span className="color-green-900 fw-bold"> <FaClock /> &nbsp; Sep 27, 2022</span>
                <Link href="#" className="text-heading-4">We can blend colors multiple ways, the most common</Link>
                <p className="text-body-text color-gray-500 text-desc-fix-h pr-70">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper
                  sed pharetra senectus donec nunc. Consequat semper viverra nam libero justo
                  laoreet facilisis magna etiam.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
