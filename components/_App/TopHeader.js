import React from 'react';
import Link from 'next/link';

const TopHeader = () => {
    return (
        <header className="header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-sm-0">
                        <div className="logo">
                            <Link href="/">
                                <a>
                                    <img src="/images/logo.png" alt="logo" />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-8 col-sm-8 text-right pr-0">
                        <div className="header-content-right">
                            <ul className="header-contact">
                                <li>
                                    <a href="tel:+1123456789">
                                        <i className="bx bxs-phone-call"></i> +1 123 456 789
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:hello@zoko.com">
                                        <i className="bx bxs-envelope"></i> hello@zoko.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-4 text-right pl-0">
                        <div className="header-content-right">
                            <ul className="header-social">
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="bx bxl-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="bx bxl-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank"> 
                                        <i className="bx bxs-envelope"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank"> 
                                        <i className="bx bxl-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TopHeader;