import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { explorenewcategory } from "../constant/data";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import CuratedForYou from "./CuratedForYou";

const ExploreNewCategories = () => {
  const sliderLeft = () => {
    const slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const sliderRight = () => {
    const slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="w-full flex flex-col items-center px-8">
      <div className="flex w-full flex-row justify-between py-4 ">
        <h2 className="text-md sm:text-xl font-semibold">
          Explore By Categories
        </h2>
        <a
          href="/"
          className="flex flex-row justify-center items-center gap-2 font-semibold text-[#FF3269]"
        >
          See All
          <BsChevronRight />
        </a>
      </div>
      <div className="w-full items-center flex flex-row">
        <MdChevronLeft
          onClick={sliderLeft}
          className="text-[40px] text-black  cursor-pointer opacity-50 hover:opacity-100  "
        />
        <div className=" ml-1  overflow-x-hidden scroll-smooth" id={"slider2"}>
          <div className=" flex-row cursor-pointer relative flex items-center w-[1550px] h-full whitespace-nowrap">
            {explorenewcategory.map((item, id) => (
              <div key={id}>
                <img src={item.img} alt="img" className="h-[220px] w-full " />
              </div>
            ))}
          </div>
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className="text-[40px] text-black  cursor-pointer opacity-50 hover:opacity-100 "
        />
      </div>
      <CuratedForYou />
      <div className=" flex justify-center pt-8">
        <img
          src="https://cdn.zeptonow.com/production///tr:w-981,ar-981-342,pr-true,f-webp,q-80/inventory/banner/ba092e9b-6ee7-4f65-aff0-db7c1bf109ad-Late-Night-Cravings-Sorted_Premium-Promo_(1).jpg"
          alt="bannerimg"
          className=""
        />
      </div>
    </div>
  );
};

export default ExploreNewCategories;
