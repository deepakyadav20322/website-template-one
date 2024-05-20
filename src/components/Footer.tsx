import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="min-h-32 h-full p-2">
      <div className=" max-w-7xl w-full m-auto">
        <div>
          <div className="ml-6 sm:ml-0 right">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="py-3 smplus:py-0">
                <h1 className="text-3xl font-bold text-start">Vega</h1>
                <h1>&copy;Copyrights, All rights reserved</h1>
                <div className="social-connects flex flex-row justify-start items-center gap-x-4 py-2">
                  {/* {Array.from({length:4}).map((_, i) => ( */}

                  <div className="rounded-full text-black bg-white inline-block p-2 hover:bg-black hover:text-white border-2 border-transparent hover:border-gray-200 transition-colors duration-200 ease-in-out cursor-pointer">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full text-black bg-white inline-block p-2 hover:bg-black hover:text-white border-2 border-transparent hover:border-gray-200 transition-colors duration-200 ease-in-out cursor-pointer">
                    <TfiFacebook />
                  </div>
                  <div className="rounded-full text-black bg-white inline-block p-2 hover:bg-black hover:text-white border-2 border-transparent hover:border-gray-200 transition-colors duration-200 ease-in-out cursor-pointer">
                    <FaInstagram />
                  </div>
                  <div className="rounded-full text-black bg-white inline-block p-2 hover:bg-black hover:text-white border-2 border-transparent hover:border-gray-200 transition-colors duration-200 ease-in-out cursor-pointer">
                    <BsTwitterX />
                  </div>

                  {/* ))} */}
                </div>
              </div>
              <div className="grid grid-cols-1 smMinus:grid-cols-3">
                <div>
                  <h1 className="font-semibold">Company</h1>
                  <ul className="text-slate-400">
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Blog</li>
                  </ul>
                </div>
                <div>
                  <h1 className="font-semibold">Support</h1>
                  <ul className="text-slate-400">
                    <li>Help Center</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                  </ul>
                </div>
                <div>
                  <h1 className="font-semibold">Contact</h1>
                  <ul className="text-slate-400">
                    <li>
                      <p>123 Street Name</p>
                      <p>Road Name</p>
                      <p>London</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
