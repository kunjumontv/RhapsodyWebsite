// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Link from "next/link";
import CounterUp from '../components/CounterUp';
import { FaClock } from 'react-icons/fa';
import Blog from '../components/Blog';
import ClientSlider from '../components/ClientSlider';
import { gsap } from 'gsap/dist/gsap';
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const root = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const element = root.current;
    
      gsap.fromTo(
        element.querySelector(".text-heading-1"),
        {
          opacity: 0,
          x: 80,
        },
        {
          opacity: 1,
          x: 0,
          duration:2,
          immediateRender: false,
        }
      );
      [1,2].forEach(item => {
        gsap.fromTo(
          element.querySelector(`#text${item}`),
          {
            opacity: 0,
            y:-100,
            duration:3
          },
          {
            opacity: 1,
            y: 0,
            duration:1,
            scrollTrigger: {
              trigger: element.querySelector(`#text${item}`),
              start: "top bottom ",
              end: "bottom center",
              scrub: true,
            },
          }
        );
      });
      
      gsap.fromTo(
        element.querySelectorAll(".scale"),
        {
          opacity: 1,
          scale: 1,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1.11,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: element.querySelector(".box-image"),
            start: "top bottom  ",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
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
      <section  className="scale section-box">
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
      <section className="scale section-box">
        <div className="container gray-light-background pt-100 pb-80">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-10 block-we-do">
              <h3 id="text1" className="fade text-heading-1 mt-10">What Makes Us <br></br> Different</h3>
              <p className="text-body-lead color-gray-600 mt-80">For merchandising to be successful it must have the element of effectiveness and to provide a finished products appearance which boosts the store presentation. Our team members are considered as leaders when it comes to expertise in stores and merchandising.</p>
              <p id="text2"className="fade text-body-lead-large color-gray-600 mt-80">We provide support to our clients by ensuring product placement, positioning and store support services</p>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>
        </div>
      </section>




      <section className="scale section-box overflow-visible">
            <div className="container gray-black-background pt-100">
                <div className="row">
                  <Blog />
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


      
      <section className="section-box overflow-visible mb-100">
        <div className="container">
          <div className="row justify-content-md-center">
            <ClientSlider />
          </div>
        </div>
      </section >

      {/* <TestSlider/> */}

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
    </div>
  )
}
