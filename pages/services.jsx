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

      <section className="section-big gray-dark-background bdrd-top-40">
        <div className="box-image">
          <img className="img-responsive bdrd-top-40" src="assets/imgs/page/about/3/img.png" alt="Agon" />
        </div>
      </section>

      <section className="section-big gray-light-background pb-100">
        <div className="container pt-100 pb-80 ">
          <div className="row">
            <div className="col-lg-12 col-sm-12 ">
              <h3 className="text-heading-1 mt-10">Merchandising <br></br>Services</h3>
              <p className="text-body-lead color-gray-600 mt-80">
                Our merchandising team provides customized merchandising services for retail execution solutions. We are the providers of superior merchandising services that are unparalleled resulting in a rewarding experience for the customers. Our clients rely on our highly experienced and efficient team to successfully implement and maintain their display in order to help them gain a competitive edge.
              </p>
              <p className="text-body-lead-large color-gray-600 mt-80">Our services enable our
                clients to achieve higher returns by ensuring that new and fresh products are available
                on shelves at all times, which in turn leads to optimized customer experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-big gray-dark-background pb-100">
        <div className="container pt-100 pb-80 ">
          <div className="row">

            <div className="col-lg-12 col-sm-12 col-12">
              <h2 className="text-heading-1 color-gray-900 mb-100">Retail Services</h2>
            </div>
          </div>


          <div className="row">

            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="">
                <div className="">
                  <div>
                    <img src="/assets/imgs/1.png" alt="Agon" className="service-icon" />
                    <span className="text-heading-6">Planogram Maintenance Category re-sets</span>
                  </div>
                  <div>
                    <p className="text-body-text-2 color-gray-600 mt-50">
                    In publishing and graphic design, Lorem ipsum at placeholder commonly to demonstrate. In publishing and graphic design.
                                        </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="">
                <div className="">
                  <div>
                    <img src="/assets/imgs/2.png" alt="Agon" className="service-icon" />
                    <span className="text-heading-6">Custom Continuity Merchandising Programs</span>
                  </div>
                  <div>
                    <p className="text-body-text-2 color-gray-600 mt-50">
                    In publishing and graphic design, Lorem ipsum at placeholder commonly to demonstrate. In publishing and graphic design.
                                        </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-150">

            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="">
                <div className="">
                  <div>
                    <img src="/assets/imgs/3.png" alt="Agon" className="service-icon" />
                    <span className="text-heading-6">Planogram Maintenance Category re-sets</span>
                  </div>
                  <div>
                    <p className="text-body-text-2 color-gray-600 mt-50">
                      In publishing and graphic design, Lorem ipsum at placeholder commonly to demonstrate. In publishing and graphic design.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="">
                <div className="">
                  <div>
                    <img src="/assets/imgs/4.png" alt="Agon" className="service-icon" />
                    <span className="text-heading-6">Planogram Maintenance Category re-sets</span>
                  </div>
                  <div>
                    <p className="text-body-text-2 color-gray-600 mt-50">
                      In publishing and graphic design, Lorem ipsum at placeholder commonly to demonstrate. In publishing and graphic design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-150">

            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="">
                <div className="">
                  <div>
                    <img src="/assets/imgs/5.png" alt="Agon" className="service-icon" />
                    <span className="text-heading-6">Planogram Maintenance Category re-sets</span>
                  </div>
                  <div>
                    <p className="text-body-text-2 color-gray-600 mt-50">
                      In publishing and graphic design, Lorem ipsum at placeholder commonly to demonstrate. In publishing and graphic design.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="">
                <div className="">
                  <div>
                    <img src="/assets/imgs/6.png" alt="Agon" className="service-icon" />
                    <span className="text-heading-6">Planogram Maintenance Category re-sets</span>
                  </div>
                  <div>
                    <p className="text-body-text-2 color-gray-600 mt-50">
                      In publishing and graphic design, Lorem ipsum at placeholder commonly to demonstrate. In publishing and graphic design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-150">

            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="">
                <div className="">
                  <div>
                    <img src="/assets/imgs/8.png" alt="Agon" className="service-icon" />
                    <span className="text-heading-6">Planogram Maintenance Category re-sets</span>
                  </div>
                  <div>
                    <p className="text-body-text-2 color-gray-600 mt-50">
                      In publishing and graphic design, Lorem ipsum at placeholder commonly to demonstrate. In publishing and graphic design.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="">
                <div className="">
                  <div>
                    <img src="/assets/imgs/7.png" alt="Agon" className="service-icon" />
                    <span className="text-heading-6">Planogram Maintenance Category re-sets</span>
                  </div>
                  <div>
                    <p className="text-body-text-2 color-gray-600 mt-50">
                      In publishing and graphic design, Lorem ipsum at placeholder commonly to demonstrate. In publishing and graphic design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      <section className="section-big gray-dark-background pb-100">
        <div className="container pt-100 pb-80 ">

          <div className="row">

            <div className="col-lg-12 col-sm-12 col-12  white-background bdrd-40 pt-100 pb-100">
              <div className="row">
                <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
                <div className="col-lg-10 col-sm-12 col-12">
                  <h2 className="text-heading-1 color-gray-900 mb-50">Why RMS?</h2>
                  <p className="text-heading-6">We possess expertise in the following areas:</p>
                </div>
                <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
              </div>


              <div className="row pt-30">
                <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
                <div className="col-lg-5 col-md-6 col-sm-6 col-12">
                  <div className="">
                    <div className="">
                      <div>
                        <span className="square" />
                        <span className="text-body-tiny-5">Perfect Store compliance.</span>
                      </div>
                      <div>
                        <span className="square" />
                        <span className="text-body-tiny-5">Right Execution Daily.
                        </span>
                      </div>
                      <div>
                        <span className="square" />
                        <span className="text-body-tiny-5">Share of visibility expert.
                        </span>
                      </div>
                      <div>
                        <span className="square" />
                        <span className="text-body-tiny-5">Technology.
                        </span>
                      </div>
                      <div>
                        <span className="square" />
                        <span className="text-body-tiny-5">Training.
                        </span>
                      </div>
                      <div>
                        <span className="square" />
                        <span className="text-body-tiny-5">Reporting.
                        </span>
                      </div>
                      <div>
                        <span className="square" />
                        <span className="text-body-tiny-5">Execution.
                        </span>
                      </div>
                      <div>
                        <span className="square" />
                        <span className="text-body-tiny-5">Quality Merchandisers</span>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-6 col-12  pt-80">
                  <img id="logo" className="bdrd-lb-300 img-responsive" src="assets/imgs/page/homepage3/img-2.png" alt="Agon" />
                </div>
                <div className="col-lg-1 col-sm-1 col-12 d-none d-lg-block" />
              </div>
            </div>



          </div>

        </div>
      </section>

      <section className="section-big gray-dark-background pb-100">
        <div className="container pb-80 ">
          <div className="row">
            <div className="col-lg-12 col-sm-12 ">
              <h3 className="text-heading-1">Our Approach</h3>
              <p className="text-body-lead color-gray-600 mt-80">
                Our approach is proactive – we believe we have a responsibility to drive the strategic thought process, effective on-ground planning and to ensure proper collaboration for a seamless execution.
              </p>
              <p className="text-body-lead-large color-gray-600 mt-80">
                Our back-end support team comprises of industry experts with years of experience, possessing relevant knowledge to ensure mutual growth and success.
              </p>
              <p className="text-body-lead-large color-gray-600 mt-80">
                In terms of understanding our clients’ needs, we encourage our clients to involve us in the planning phase to chalk out a thorough plan. We like to give inputs during the planning phase of the requirement to propose more flexible solutions and to ensure maximum results.
              </p>

            </div>
          </div>
          <div className="row mt-100">
            <img className="img-responsive bdrd-40" src="assets/imgs/page/about/3/img.png" alt="Agon" />
          </div>
        </div>
      </section>

      <section className="section-big gray-dark-background pb-100 bdrd-bottom-40">
        <div className="container pb-80 ">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <h3 className="text-heading-1">Our Expertise</h3>
              <p className="text-body-lead color-gray-600 mt-80">We are a one-stop solution for all the documentary needs of our clients. Having more than fourteen years of experience of actively being present in the market has well-equipped us in having vast knowledge regarding all the necessary regulatory requirements that are mandatory to ensure a successful execution. We handle all types of permissions and documentations:</p>
            </div>
          </div>

          <div className="row pt-50">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="">
                <div className="">
                  <div>
                    <span className="square" />
                    <span className="text-body-tiny-5">Government Legalities Requirement: Selecting the right person for the right job.</span>
                  </div>
                  <div>
                    <span className="square" />
                    <span className="text-body-tiny-5">Documentations and Paper Work</span>
                  </div>
                  <div>
                    <span className="square" />
                    <span className="text-body-tiny-5">Regular Training Programs</span>
                  </div>
                  <div>
                    <span className="square" />
                    <span className="text-body-tiny-5">Mobility for Merchandisers.</span>
                  </div>
                  <div>
                    <span className="square" />
                    <span className="text-body-tiny-5">Reporting and Supervision.
                    </span>
                  </div>
                  <div>
                    <span className="square" />
                    <span className="text-body-tiny-5">Planning and Coordination.
                    </span>
                  </div>
                  <div>
                    <span className="square" />
                    <span className="text-body-tiny-5">Logistical Support.</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      < section className="section-box" >
        <div className="container  pb-80 pt-100">
          <div className="row">
            <div className="col-lg-12 col-sm-12 ">
              <h3 className="text-heading-1">Hiring The Right People</h3>
              <p className="text-body-lead color-gray-600 pt-60">
              RMS have mastered in the art of hiring right people for the right job. Successful businesses prevail by hiring the right fit. We look for candidates for their talent, decision making skills, time management and interpersonal skills. Assessing on these competences enable us to recruit high-performing and long-tenured merchandisers.
              </p>
            </div>
          </div>

          <div className="row pt-120">
            <div className="col-lg-12 col-sm-12">
              <h3 className="text-heading-1">Perfect Store</h3>
              <p className="text-body-lead color-gray-600 pt-60">
              A perfect store is one in which consumer can find the right product in the right place at the right time. It is also essential to place the product in the best possible way to influence buying behaviour. RMS merchandisers are assigned to stores they will regularly visit make sure all our client’s products are available and accurately placed in the right location.
              </p>
            </div>
          </div>

          <div className="row pt-120">
            <div className="col-lg-12 col-sm-12">
              <h3 className="text-heading-1">Field Management</h3>
              <p className="text-body-lead color-gray-600 pt-60">
              Our field team and managers are experts and well experienced in field management. Having such people in our team help our merchandisers to learn from the best. Our field managers continuously involved in store level inspection in order to give feedback to the merchandisers. 
              </p>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default services