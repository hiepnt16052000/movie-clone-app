import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-color-black">
      <div className="container">
        <div className="grid grid-cols-3 py-5 footer-wrapper gap-x-2">
          <div className="flex items-center copy-right">
            <span className="text-base font-medium text-color-gray-light">
              © 2023. All rights reserved by Animeloop.
            </span>
          </div>
          <div className="flex items-center justify-center footer-social gap-x-4">
            <i className="text-2xl fa-brands fa-facebook text-color-primary"></i>
            <i className="text-2xl fa-brands fa-instagram text-color-primary"></i>
            <i className="text-2xl fa-brands fa-discord text-color-primary"></i>
          </div>
          <div className="flex items-center justify-end footer-policy gap-x-2">
            <Link
              to=""
              className="text-base font-medium text-color-gray-light hover:text-color-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to=""
              className="text-base font-medium text-color-gray-light hover:text-color-primary"
            >
              Comments Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
