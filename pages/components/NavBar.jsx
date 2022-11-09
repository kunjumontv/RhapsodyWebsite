/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
const NavBar = ({ handleOpen, headerStyle }) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return <>
        <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
            <div className="container">
                <div className="main-header">
                    <div className="header-left">
                        <div className="header-logo">
                            <Link href="/" className="d-flex">

                                {headerStyle ? <img alt="Agon" src="/assets/imgs/template/logo-white.svg" /> : <img alt="Agon" src="/assets/imgs/template/logo.svg" />}

                            </Link>
                        </div>
                        <div className="header-nav">
                            <nav className="nav-main-menu d-none d-xl-block ">
                                <ul className="main-menu">
                                    <li>
                                        <Link href="/about" className="active">About us</Link>
                                    </li>
                                    <li>
                                        <Link href="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio">Portfolio</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link href="/careers">Careers</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="block-signin">
                            <Link href="/" className="btn btn-default hover-up">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    </>;
};

export default NavBar;