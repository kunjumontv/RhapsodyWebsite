import React from 'react'
import Blog from '../components/Blog'
import Link from "next/link";
import CounterUp from '../components/CounterUp';
import { FaClock } from 'react-icons/fa';
import ClientSlider from '../components/ClientSlider';
import { FaArrowDown } from 'react-icons/fa';
import WorkSlider from '../components/WorkSlider';

const services = () => {
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

      {/* Our Experience */}
      <section className="section-box">
        <div className="container gray-light-background pt-100 pb-80 ">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-10 block-we-do">
              <h3 className="text-heading-1 mt-10">Merchandising <br></br>Services</h3>
              <p className="text-body-lead color-gray-600 mt-80">
                Our merchandising team provides customized merchandising services for retail execution solutions. We are the providers of superior merchandising services that are unparalleled resulting in a rewarding experience for the customers. Our clients rely on our highly experienced and efficient team to successfully implement and maintain their display in order to help them gain a competitive edge.
              </p>
              <p className="text-body-lead-large color-gray-600 mt-80">Our services enable our
                clients to achieve higher returns by ensuring that new and fresh products are available
                on shelves at all times, which in turn leads to optimized customer experiences.
              </p>

            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>
        </div>
      </section>

      <section className="section-box ">
        <div className="container gray-dark-background pt-100 pb-100">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-12 col-12 block-we-do">
              <h2 className="text-heading-1 color-gray-900 mb-50">Retail Services</h2>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>


          <div className="row pt-50">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-5 col-md-6 col-sm-6 col-12 block-we-do">
              <div className="">
                <div className="">
                  <div>
                    <img src="/assets/imgs/1.png" alt="Agon" className="service-icon" />
                    <span className="text-heading-6">Support Engineer</span>
                  </div>
                  <div>
                    <p className="text-body-text color-gray-600 mt-15">We commit to original work of the highest standard and giving credit where it's due.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 col-12 block-we-do">
              <div className="">
                <div className="">
                  <div>
                    <img src="/assets/imgs/1.png" alt="Agon" className="service-icon" />
                    <span className="text-heading-6">Support Engineer</span>
                  </div>
                  <div>
                    <p className="text-body-text color-gray-600 mt-15">We commit to original work of the highest standard and giving credit where it's due.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>

          <div className="row pt-50">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-5 col-md-6 col-sm-6 col-12 block-we-do">
              <div className="">
                <div className="">
                  <div>
                    <img src="/assets/imgs/1.png" alt="Agon" className="service-icon" />
                    <span className="text-heading-6">Support Engineer</span>
                  </div>
                  <div>
                    <p className="text-body-text color-gray-600 mt-15">We commit to original work of the highest standard and giving credit where it's due.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 col-12 block-we-do">
              <div className="">
                <div className="">
                  <div>
                    <img src="/assets/imgs/1.png" alt="Agon" className="service-icon" />
                    <span className="text-heading-6">Support Engineer</span>
                  </div>
                  <div>
                    <p className="text-body-text color-gray-600 mt-15">We commit to original work of the highest standard and giving credit where it's due.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>

          <div className="row pt-50">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-5 col-md-6 col-sm-6 col-12 block-we-do">
              <div className="">
                <div className="">
                  <div>
                    <img src="/assets/imgs/1.png" alt="Agon" className="service-icon" />
                    <span className="text-heading-6">Support Engineer</span>
                  </div>
                  <div>
                    <p className="text-body-text color-gray-600 mt-15">We commit to original work of the highest standard and giving credit where it's due.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 col-12 block-we-do">
              <div className="">
                <div className="">
                  <div>
                    <img src="/assets/imgs/1.png" alt="Agon" className="service-icon" />
                    <span className="text-heading-6">Support Engineer</span>
                  </div>
                  <div>
                    <p className="text-body-text color-gray-600 mt-15">We commit to original work of the highest standard and giving credit where it's due.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>

          <div className="row pt-50">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-5 col-md-6 col-sm-6 col-12 block-we-do">
              <div className="">
                <div className="">
                  <div>
                    <img src="/assets/imgs/1.png" alt="Agon" className="service-icon" />
                    <span className="text-heading-6">Support Engineer</span>
                  </div>
                  <div>
                    <p className="text-body-text color-gray-600 mt-15">We commit to original work of the highest standard and giving credit where it's due.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 col-12 block-we-do">
              <div className="">
                <div className="">
                  <div>
                    <img src="/assets/imgs/1.png" alt="Agon" className="service-icon" />
                    <span className="text-heading-6">Support Engineer</span>
                  </div>
                  <div>
                    <p className="text-body-text color-gray-600 mt-15">We commit to original work of the highest standard and giving credit where it's due.</p>
                  </div>
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
              <div className="row">
                {/* <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" /> */}
                <div className="col-lg-10 col-sm-12 col-12 block-we-do">
                  <h2 className="text-heading-1 color-gray-900 mb-50">Why RMS?</h2>
                  <p className="text-heading-6">We possess expertise in the following areas:</p>
                </div>
                <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
              </div>


              <div className="row pt-30">
                {/* <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" /> */}
                <div className="col-lg-5 col-md-6 col-sm-6 col-12 block-we-do">
                  <div className="">
                    <div className="">
                      <div>
                        <span className="square" />
                        <span className="text-body-tiny-5">Support Engineer</span>
                      </div>
                      <div>
                        <span className="square" />
                        <span className="text-body-tiny-5">Support Engineer</span>
                      </div>
                      <div>
                        <span className="square" />
                        <span className="text-body-tiny-5">Support Engineer</span>
                      </div>
                      <div>
                        <span className="square" />
                        <span className="text-body-tiny-5">Support Engineer</span>
                      </div>
                      <div>
                        <span className="square" />
                        <span className="text-body-tiny-5">Support Engineer</span>
                      </div>
                      <div>
                        <span className="square" />
                        <span className="text-body-tiny-5">Support Engineer</span>
                      </div>
                      <div>
                        <span className="square" />
                        <span className="text-body-tiny-5">Support Engineer</span>
                      </div>
                      <div>
                        <span className="square" />
                        <span className="text-body-tiny-5">Support Engineer</span>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 block-we-do  pt-80">
                  <img id="logo" className="bdrd-lb-300 img-responsive" src="assets/imgs/page/homepage3/img-2.png" alt="Agon" />
                </div>
                <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
              </div>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />


          </div>
        </div>
      </section >

      {/* What Makes Us Different */}
      <section className="section-box">
        <div className="container gray-light-background pt-100 pb-80">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-10 block-we-do">
              <h3 className="text-heading-1 mt-10">What Makes Us <br></br> Different</h3>
              <p className="text-body-lead color-gray-600 mt-80">For merchandising to be successful it must have the element of effectiveness and to provide a finished products appearance which boosts the store presentation. Our team members are considered as leaders when it comes to expertise in stores and merchandising.</p>
              <p className="text-body-lead-large color-gray-600 mt-80">We provide support to our clients by ensuring product placement, positioning and store support services</p>
              <p className="text-body-lead-large color-gray-600 mt-80">We provide support to our clients by ensuring product placement, positioning and store support services</p>

            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>
        </div>
      </section>



      {/* image*/}
      < section className="section-box" >
        <div className="container gray-dark-background pb-80">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-10 block-we-do">
              <img id="logo" className="bdrd-40 img-responsive" src="assets/imgs/page/homepage3/img-2.png" alt="Agon" />
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>
        </div>
      </section >

      {/* What Makes Us Different */}
      {/* reach here */}
      <section className="section-box">
        <div className="container gray-light-background pt-100 pb-80 bdrd-bottom-40">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-10 block-we-do">
              <h3 className="text-heading-1 mt-10">What Makes Us <br></br> Different</h3>
              <p className="text-body-lead color-gray-600 mt-80">For merchandising to be successful it must have the element of effectiveness and to provide a finished products appearance which boosts the store presentation. Our team members are considered as leaders when it comes to expertise in stores and merchandising.</p>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>
          <div className="row pt-50">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-md-10 col-sm-10 col-10 block-we-do">
              <div className="">
                <div className="">
                  <div>
                    <span className="square" />
                    <span className="text-body-tiny-5">Support Engineer</span>
                  </div>
                  <div>
                    <span className="square" />
                    <span className="text-body-tiny-5">Support Engineer</span>
                  </div>
                  <div>
                    <span className="square" />
                    <span className="text-body-tiny-5">Support Engineer</span>
                  </div>
                  <div>
                    <span className="square" />
                    <span className="text-body-tiny-5">Support Engineer</span>
                  </div>
                  <div>
                    <span className="square" />
                    <span className="text-body-tiny-5">Support Engineer</span>
                  </div>
                  <div>
                    <span className="square" />
                    <span className="text-body-tiny-5">Support Engineer</span>
                  </div>
                  <div>
                    <span className="square" />
                    <span className="text-body-tiny-5">Support Engineer</span>
                  </div>
                  <div>
                    <span className="square" />
                    <span className="text-body-tiny-5">Support Engineer</span>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>
        </div>
      </section>

      {/* Specialist in Retail */}
      < section className="section-box" >
        <div className="container  pb-80 pt-100">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-10 block-we-do">
              <h3 className="text-heading-1 mt-10 mb-20">Specialist in Retail<br></br> Merchandising</h3>
              <p className="text-body-lead color-gray-600 ">
                Around 70% of purchase decisions are impulsive and are made in-store.
                In-store retail merchandising is the best way to create the environment which is suitable to
                engage customers in order to maximize sales.
                Therefore, we are merchandising service providers at the forefront,
                ensure that are our clients’ products are available at key selling areas at all times,
                fully stocked up, accurately priced and have precise inventory counts for refills.
                Our expert merchandisers also participate in brand engagement through display pallet set-ups
                and by labelling promotional stickers on products.
              </p>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>

          <div className="row pt-50">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-10 block-we-do">
              <h3 className="text-heading-1 mt-10 mb-20">Specialist in Retail<br></br> Merchandising</h3>
              <p className="text-body-lead color-gray-600 ">
                Around 70% of purchase decisions are impulsive and are made in-store.
                In-store retail merchandising is the best way to create the environment which is suitable to
                engage customers in order to maximize sales.
                Therefore, we are merchandising service providers at the forefront,
                ensure that are our clients’ products are available at key selling areas at all times,
                fully stocked up, accurately priced and have precise inventory counts for refills.
                Our expert merchandisers also participate in brand engagement through display pallet set-ups
                and by labelling promotional stickers on products.
              </p>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>

          <div className="row pt-50">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-10 block-we-do">
              <h3 className="text-heading-1 mt-10 mb-20">Specialist in Retail<br></br> Merchandising</h3>
              <p className="text-body-lead color-gray-600 ">
                Around 70% of purchase decisions are impulsive and are made in-store.
                In-store retail merchandising is the best way to create the environment which is suitable to
                engage customers in order to maximize sales.
                Therefore, we are merchandising service providers at the forefront,
                ensure that are our clients’ products are available at key selling areas at all times,
                fully stocked up, accurately priced and have precise inventory counts for refills.
                Our expert merchandisers also participate in brand engagement through display pallet set-ups
                and by labelling promotional stickers on products.
              </p>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>
        </div>
      </section >

    </>
  )
}

export default services