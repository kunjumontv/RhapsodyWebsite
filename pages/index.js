import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import BlogSlider from '../components/Blog';
import CounterUp from '../components/CounterUp';
import Test from '../components/Test';
import { useEffect } from 'react';
import { gsap } from 'gsap'


export default function Home() {
  useEffect(() => {
    gsap.to("#logo", { rotation: 360, x: 10, yPercent: 50 });
    
  }, [])
  
  return (
    <>
      {/* banner  */}
      <section className="section-box">
        <div className="container mt-120">
          <div className="row">
            <div className="col-lg-6 col-sm-12 block-img-we-do">
              <img id="logo" className="bdrd-rb-300 img-responsive" src="assets/imgs/page/homepage3/img-2.png" alt="Agon" />
            </div>
            <div className="col-lg-6 col-sm-12 block-we-do">
              <h3 className="text-heading-1 mt-30">
                <span className="color-green-900">
                  Working alongside&nbsp;
                </span>
                great brands we’re committed to doing something extraordinary
              </h3>
              <div className="container mt-40">
                <div className="row">
                  <div className="col-lg-5 col-sm-12 block-img-we-do">
                    <Link href="#" className="btn btn-black">Get Start</Link>
                  </div>
                  <div className="col-lg-5 col-sm-12 block-we-do">
                    <Link href="#" className="btn btn-link color-gray-900 text-heading-6">Learn More</Link>
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
            <div className="col-lg-12 pl-0 pr-0">
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
            <div className="col-lg-1 col-sm-1 col-12" />
            <div className="col-lg-10 col-sm-10 block-we-do">
              <h3 className="text-heading-1 mt-10">What Makes Us <br></br> Different</h3>
              <p className="text-body-lead color-gray-600 mt-80">For merchandising to be successful it must have the element of effectiveness and to provide a finished products appearance which boosts the store presentation. Our team members are considered as leaders when it comes to expertise in stores and merchandising.</p>
              <p className="text-body-lead-large color-gray-600 mt-80">We provide support to our clients by ensuring product placement, positioning and store support services</p>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 " />
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

      <Test/>
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
                    <p className="text-body-text color-gray-500 pl-40t">Project Success</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3">+<CounterUp count={235} time={3} /><span className="color-green-900 text-display-5">k</span></span>
                    <p className="text-body-text color-gray-500 pl-40">Satisfied Clients</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3">+<CounterUp count={148} time={3} /><span className="color-green-900 text-display-5">+</span></span>
                    <p className="text-body-text color-gray-500 pl-40">Experts</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3">+<CounterUp count={44} time={3} /><span className="color-green-900 text-display-5">+</span></span>
                    <p className="text-body-text color-gray-500 pl-40">Years of Experience</p>
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
        <div className="container mt-100 black-light-background pt-75 pb-75 pr-75 pl-75 bdrd-40">
          <div className="row">
            <div className="col-lg-11 mx-auto">
              <div className=" box-newsletter position-relative">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <p className="text-heading-quoto">
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                    </p>

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
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
              <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-1.svg" /></Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
              <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-2.svg" /></Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
              <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
              <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-4.svg" /></Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
              <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-5.svg" /></Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
              <Link href="#" className="item-logo"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-6.svg" /></Link>
            </div>
          </div>
        </div>
      </section >

      {/* Blogs  */}
      <section className="section-box gray-light-background bdrd-top-40 ">
        <div className="container mt-30">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-12 text-center">
              <h2 className="text-heading-1 color-gray-900 mb-10">Recent Blogs</h2>
            </div>
          </div>
        </div>
        <div className="container mt-90">
          <div className="row">
            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
              <div className="card-grid-style-4"><span className="tag-dot">Company</span>
                <Link href="#" className="text-heading-4">We can blend colors multiple ways, the most common</Link>

                <div className="grid-4-img">
                  <Link href="#"><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" /></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
              <div className="card-grid-style-4"><span className="tag-dot">Marketing Event</span>
                <Link href="#" className="text-heading-4">How To Blow Through Capital At An Incredible Rate
                </Link>

                <div className="grid-4-img">
                  <Link href="#"><img src="/assets/imgs/page/homepage1/img-news-2.png" alt="Agon" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
              <div className="card-grid-style-4"><span className="tag-dot">Customer Services</span>
                <Link href="#" className="text-heading-4">Design Studios That Everyone Should Know About?
                </Link>

                <div className="grid-4-img color-bg-4">

                  <Link href="#"><img src="/assets/imgs/page/homepage1/img-news-3.png" alt="Agon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
