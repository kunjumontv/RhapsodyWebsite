/* eslint-disable @next/next/no-img-element */
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

import Link from "next/link";
const Footer = () => {
    return (
        <>

            <footer className="footer black-light-background bdrd-top-40 pt-100">

                <div className="container">

                    <div className="row">
                        <div className="col-lg-3 col-12  ">
                            <img alt="Agon" src="/assets/imgs/Logo.png" />
                            <div className="mt-20 text-body-text-5 0 mb-20 mr-50">
                                For merchandising to be successful it must have the element of
                                effectiveness and to provide a finished products
                                appearance which boosts the store presentation.
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 mt-40 ">
                            <h4 className="text-heading-3-footer mb-60">Say Hello!</h4>
                            <div className="mt-20 text-body-text-6 mb-40 mr-50">411, The Onyx - Tower 1, The Greens</div>
                            <div className="mt-20 text-body-text-7">+971 4 294 1932</div>

                        </div>
                        <div className="col-lg-2 col-12 mt-40">
                            <h4 className="text-heading-5-footer">Useful Links</h4>
                            <ul className="menu-footer mt-30">
                                <li className="mb-40">
                                    <Link href="#">
                                        Home
                                    </Link>
                                </li>
                                <li className="mb-40">
                                    <Link href="#">
                                        About us
                                    </Link>
                                </li>
                                <li className="mb-40">
                                    <Link href="#">
                                        Services
                                    </Link>
                                </li>
                                <li className="mb-40">
                                    <Link href="#">
                                        Work
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-12 special-margin">

                            <ul className="menu-footer mb-30">
                                <li className="mb-40">
                                    <Link href="#">
                                        Clients
                                    </Link>
                                </li>
                                <li className="mb-40">
                                    <Link href="#">
                                        Careers
                                    </Link>
                                </li>
                                <li className="mb-40">
                                    <Link href="#">
                                        Testimonials
                                    </Link>
                                </li>
                                <li className="mb-40">
                                    <Link href="#">
                                        Coverage
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg-2 col-12 mt-30">
                            <h4 className="text-heading-6-footer">Join Newsletter</h4>
                            <div className="box-form-newsletter mt-30">
                                <form className="form-newsletter">
                                    <input className="input-sub mb-30" placeholder="Your email id .." />
                                    <div className="block-signin">
                                        <Link href="/page-signup" className="btn-1 btn-default hover-up">Subscribe</Link>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="footer-bottom mt-20">
                        <div className="row">
                            <div className="col-md-12 text-center text-lg-start pb-50">
                                <div className="footer-social">
                                    <Link href="" className="icon-shape">
                                        <FaInstagram className="inner-icon" />
                                    </Link>
                                    <Link href="" className="icon-shape">
                                        <FaFacebookF className="inner-icon" />
                                    </Link>
                                    <Link href="" className="icon-shape">
                                        <FaTwitter className="inner-icon" />
                                    </Link>
                                    <Link href="" className="icon-shape">
                                        <FaLinkedinIn className="inner-icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <span className="color-gray-400 text-body-tiny-1">Copyright @ 2022 Rhapsody Merchandising Services . All rights reserved</span>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;