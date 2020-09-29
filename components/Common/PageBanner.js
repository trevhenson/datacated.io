import React from 'react';
import Link from 'next/link';

const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText}) => {
    return (
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <h2>{pageTitle}</h2>
                    <ul>
                        <li>
                            <Link href={homePageUrl}>
                                <a>{homePageText}</a>
                            </Link>
                        </li>
                        <li className="active">{activePageText}</li>
                    </ul>
                </div>
            </div>

            <div className="page-shape">
                <div className="shape1">
                    <img src="/images/shape/shape1.png" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape/shape3.png" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape/shape4.png" alt="shape" />
                </div>
                <div className="shape5">
                    <img src="/images/shape/shape5.png" alt="shape" />
                </div>
                <div className="shape6">
                    <img src="/images/shape/shape6.png" alt="shape" />
                </div>
            </div>
        </div>
    );
}

export default PageBanner;