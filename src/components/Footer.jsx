import React from "react";
import { logo } from "../assets";
import { category, socialmedia } from "../constant/data";
import { AiFillApple } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full ">
      <div className="w-full  flex flex-col px-8">
        <h2 className="text-[18px] md:text-[24px] font-medium ">Categories</h2>
        <div className="   w-full">
          <ul className="grid py-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:grid-cols-5 text-[12px] md:text-[14px] text-[#575757]">
            {category.map((item, id) => (
              <li
                key={id}
                className="py-2 cursor-pointer"
                onClick={() => window.open(item.link)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[2px] bg-[#97969690] w-full rounded-lg"></div>
      </div>
      <div className="p-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className=" flex flex-col items-start space-y-4">
          <img src={logo} className="h-10" alt="logo" />
          <div className="flex flex-row gap-4 ">
            {socialmedia.map((socialmed, id) => (
              <div
                className="text-[20px] text-slate-600"
                key={id}
                onClick={() => window.open(socialmed.link)}
              >
                {socialmed.icon}
              </div>
            ))}
          </div>
          <p className="">&#169;KiranaKart Technologies Private Limited</p>
        </div>

        <div className="">
          <ul className="gap-4">
            <li className="mb-2">Home</li>
            <li className="mb-2">Delivery Areas</li>
            <li className="mb-2">Careers</li>
            <li className="mb-2">Customer Support</li>
            <li className="mb-2">Press</li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Terms of Use</li>
            <li className="mb-2">Responsible Disclosure Policy</li>
          </ul>
        </div>

        <div className="">
          <div>
            <p className="mb-2">Download App</p>
            <div className="flex flex-col gap-4 w-full md:w-full ">
              <button
                className=" border-2 px-0 md:px-10 py-3 rounded-lg flex flex-row justify-center items-center gap-4"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.zeptoconsumerapp&pli=1"
                  )
                }
              >
                <BsGooglePlay className="text-[20px]" />
                Get it on Playstore
              </button>
              <button
                className="mb-2 border-2 px-4 md:px-10 py-3 rounded-lg flex flex-row justify-center items-center gap-4"
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/in/app/zepto-grocery-delivery/id1575323645"
                  )
                }
              >
                <AiFillApple className="text-[24px]" />
                Get it on Apple Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
