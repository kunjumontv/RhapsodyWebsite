import React from 'react'
import Blog from '../components/Blog'
import Link from "next/link";
import CounterUp from '../components/CounterUp';
import { FaClock } from 'react-icons/fa';
import ClientSlider from '../components/ClientSlider';
import { FaArrowDown } from 'react-icons/fa';
import WorkSlider from '../components/WorkSlider';
const contact = () => {
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

      <section className="section-box ">
        <div className="container gray-light-background pt-100 pb-100 bdrd-40 mb-50">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-12 col-12 block-we-do">
              <h2 className="text-heading-1 color-gray-900 mb-50">Our team of experts are ready to answer your questions.</h2>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>


          <div className="row pt-50">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-5 col-md-6 col-sm-6 col-12 block-we-do">
              <div className="">
                <div className="">
                  <div className="pb-20">
                    <h2 className="text-heading-form color-gray-900">Address</h2>
                    <p className="text-body-form color-gray-600 mt-15">411, The Onyx - Tower 1, The Greens</p>
                  </div>
                  <div className="pb-20">
                    <h2 className="text-heading-form color-gray-900 mt-30">Email</h2>
                    <p className="text-body-form color-gray-600 mt-15">info@rhapsody.ae</p>
                  </div>
                  <div className="pb-20">
                    <h2 className="text-heading-form color-gray-900 mt-30">Phone</h2>
                    <p className="text-body-form color-gray-600 mt-15">+971 4 294 1932</p>
                  </div>
                  <div className="pb-20">
                    <h2 className="text-heading-form color-gray-900 mt-30">Working Hours</h2>
                    <p className="text-body-form color-gray-600 mt-15">
                      Mon-Fri: 08:30AM - 05:30PM <br />
                      Sat: 08:30AM - 01:30PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 col-12 block-we-do">
              <form>
                <div className="col-lg-12 ">
                  <div className="form-group"><input className="form-control" placeholder="Enter your name" /></div>
                </div>
                <div className="col-lg-12 mt-60">
                  <div className="form-group"><input className="form-control" placeholder="Comapy (optioanl)" /></div>
                </div>
                <div className="col-lg-12 mt-60">
                  <div className="form-group"><input className="form-control" placeholder="Your email" /></div>
                </div>
                <div className="col-lg-12 mt-60">
                  <div className="form-group"><input className="form-control" placeholder="Phone number" /></div>
                </div>
                <div className="col-lg-12 mt-60">
                  <div className="form-group"><input className="form-control" placeholder="Message" /></div>
                </div>
                <div className="col-lg-4 mt-60">
                  <button className="btn btn-black mr-40 mb-20" type="submit">
                    Submit</button>
                </div>
              </form>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>

          <div className="row pt-50">
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
            <div className="col-lg-10 col-sm-12 col-12 block-we-do">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1413976843196!2d55.166019114812464!3d25.097074483942844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b6fa1e692b7%3A0xd36d15785b1bd3df!2sThe%20Onyx%20Tower%201!5e0!3m2!1sen!2sae!4v1669104080664!5m2!1sen!2sae" width="100%" height="800"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
          </div>
        </div>
      </section >



    </>
  )
}

export default contact