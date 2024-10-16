import "./Footer.css";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact" className="h-10">
      <div className="bg-[#100a2e] z-40 text-white py-4 sm:py-6 px-4 sm:px-8 lg:px-12 footer">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          {/* Left Section - Logo and Address */}
          <div className="text-center lg:text-left mb-4 lg:mb-8">
            <img
              src="/assets/images/logo-5.png"
              alt="Logo"
              className="mx-auto lg:mx-0 mb-2 w-[4rem] sm:w-16 lg:w-20"
            />
            <address className="not-italic leading-6 mb-4 text-sm lg:text-lg font-semibold">
              Silicon University, <br />
              Silicon Hills, Patia, <br />
              Bhubaneswar- 751024 <br />
              Odisha, India.
            </address>
          </div>

          {/* Center Section - Contact Details and Social Media */}
          <div className="text-center mb-4 lg:mb-0">
            <p className="mb-4 text-2xl lg:text-3xl font-bold">Follow Us</p>
            <div className="flex justify-center space-x-8 text-2xl lg:text-2xl">
              <a
                href="https://www.facebook.com/edcell.silicon?mibextid=qi2Omg&rdid=KykV0M2JNhYzdfjM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fm1xFfobBGSQdj7z1%2F%3Fmibextid%3Dqi2Omg"
                className="hover:text-gray-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/entrepreneurshipdevelopmentcellsitbbsr/"
                className="hover:text-gray-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/sit.edcell?igsh=cmpzcWdnOWc5ZWYz"
                className="hover:text-gray-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Section - Copyright and Additional Info */}
          <div className="text-center lg:text-left mt-8">
            <p className="mb-2 text-2xl lg:text-3xl font-bold">Contact Us</p>
            <p className="mb-2 text-sm lg:text-lg font-semibold">
              Phone: +91 9861140921 | +91 9826745888
            </p>
            <p className="mb-4 text-sm lg:text-lg font-semibold">
              Email: edcell@silicon.ac.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
