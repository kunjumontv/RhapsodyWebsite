import React from 'react'
import Blog from '../components/Blog'
import Link from "next/link";
import CounterUp from '../components/CounterUp';
import { FaClock } from 'react-icons/fa';
import ClientSlider from '../components/ClientSlider';
import { FaArrowDown } from 'react-icons/fa';
import WorkSlider from '../components/WorkSlider';

const about = () => {
  return (
    <>
      {/* banner  */}
      <section className="section-box mb-145">
        <div className="container mt-120">
          <div className="row">

            <div className="col-lg-6 col-sm-12 text-center text-lg-start pt-80">
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
          <div className="col-12 text-body-tiny-4 mt-80">
            <p className="">Scroll for more</p>
            <FaArrowDown className="color-green-900" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="section-big gray-dark-background bdrd-top-40 pb-100">
        <div className="container pt-100 pb-80 ">

          <div className="row">

            <div className="col-lg-12 col-sm-12 ">
              <h3 className="text-heading-1">Our Experience</h3>
              <p className="text-body-lead color-gray-600 mt-35">
                Rhapsody Merchandising Services was founded more than 14
                years ago with a vision to provide professional services
                to meet the growing need of consumers.
              </p>
            </div>


          </div>

          <div className="row mt-85">

            <div className="col-lg-12 col-sm-12">
              <img id="logo" className="bdrd-rb-300 img-responsive" src="assets/imgs/page/homepage3/img-2.png" alt="Agon" />
            </div>

          </div>

          <div className="row mt-85">

            <div className="col-lg-12 col-sm-12">
              <h3 className="text-heading-1">Specialist in Retail<br></br> Merchandising</h3>
              <p className="text-body-lead color-gray-600 mt-35 ">
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
          </div>
        </div>
      </section>

      {/* Third Section  */}
      <section className="section-big gray-light-background pb-100 bdrd-bottom-40">
        <div className="container pt-100 pb-80 ">
          <div className="row">

            <div className="col-lg-12 col-sm">
              <h3 className="text-heading-1">Benefits</h3>
              <p className="text-body-lead color-gray-600 mt-35">
                Increased Sales: Ensuring fully stocked shelves is a driving point for increased sales. Inventory Accuracy: Helps in avoiding poor replenishments in order to minimize the loss.
              </p>
              <p className="text-body-lead-large color-gray-600 mt-35">Customer Engagement: Clean and tidy shelves, facing in the correct direction helps products to stand out from its competitors and helps the customer to make informed purchases.
              </p>
            </div>
          </div>

          <div className="row mt-85">

            <div className="col-lg-6">
              <img id="logo" className="bdrd-rb-300 img-responsive" src="assets/imgs/page/homepage3/img-2.png" alt="Agon" />
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-5 col-sm-12">
              <h3 className="text-heading-1">Our <br></br>Mission</h3>
              <p className="text-body-lead color-gray-600 ">
                To provide unmatched in-store retail services with a client centric approach in order to help them enhance brand value, boost sales and inventory accuracy that ensures a boost in customer engagement.
              </p>
            </div>

          </div>

          <div className="row mt-85">


            <div className="col-lg-5 col-sm-12">
              <h3 className="text-heading-1">Our <br></br>Mission</h3>
              <p className="text-body-lead color-gray-600 ">
                To provide unmatched in-store retail services with a client centric approach in order to help them enhance brand value, boost sales and inventory accuracy that ensures a boost in customer engagement.
              </p>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-6">
              <img id="logo" className="bdrd-lb-300 img-responsive" src="assets/imgs/page/homepage3/img-2.png" alt="Agon" />
            </div>
          </div>
        </div>
      </section>

      {/* Forth Section */}
      <section className="section-box">
        <div className="container  pt-100 pb-80">
          <div className="row">

            <div className="col-lg-12 col-sm-12">
              <h3 className="text-heading-1">Our Works</h3>
              <p className="text-body-lead color-gray-600 mt-35">
                Increased Sales: Ensuring fully stocked shelves is a driving point for increased sales. Inventory Accuracy: Helps in avoiding poor replenishments in order to minimize the loss.
              </p>

            </div>

          </div>
        </div>
      </section>

      <WorkSlider />
    </>
  )
}

export default about