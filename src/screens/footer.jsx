import React, { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <div className="footer-container inline-block">
                <div className="footer-copyright inline-block">
                    &copy; NguWallet
                </div>
                <a href="/privacy" className="inline-block footer-link">Privacy policy</a>
                <a href="/about" className="inline-block footer-link">About</a>
            </div>
        </Fragment>
    );
};

export default Footer;