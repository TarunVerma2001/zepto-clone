import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  ebgrocery,
  ebcfruitsandvege,
  ebcpackagedfood,
  ebcfrozenfood,
  ebcmasala,
  ebcsweet,
  ebcpaan,
  ebcbath,
  ebcbiscuits,
  ebcbreakfast,
  ebccleaning,
  ebccolddrink,
  ebcdairy,
  ebcelectricals,
  ebchealth,
  ebchomegrown,
  ebchomeneeds,
  ebchygiene,
  ebcmakeup,
  ebcmeat,
  ebcmuni,
  ebctea,
} from "../assets";

const ExploreByCategories = () => {
  return (
    <div className="flex w-full flex-col space-y-8 p-8 items-center">
      <div className="flex w-full flex-row justify-between ">
        <h2 className="text-md sm:text-xl font-semibold">
          Explore By Categories
        </h2>
        <Link
          to="/allproducts/Fruits"
          className="flex flex-row justify-center items-center gap-2 font-semibold text-[#FF3269]"
        >
          See All
          <BsChevronRight />
        </Link>
      </div>
      <div className="w-full  grid sm:grid-cols-4 xs:grid-cols-2 grid-cols-2 md:gridcols-5  lg:grid-cols-6  gap-8">
        <a className="flex justify-center" href="/allproducts/Fruits">
          <img src={ebccolddrink} alt="img" className="" />
        </a>
        <a className="flex justify-center" href="/allproducts/Fruits">
          <img src={ebcmuni} alt="img" className="" />
        </a>
        <a className="flex justify-center" href="/allproducts/Fruits">
          <img src={ebcmeat} alt="img" className="" />
        </a>
        <a className="flex justify-center" href="/allproducts/Fruits">
          <img src={ebcbreakfast} alt="img" className="" />
        </a>
        <a className="flex justify-center" href="/allproducts/Fruits">
          <img src={ebctea} alt="img" className="" />
        </a>
        <a className="flex justify-center" href="/allproducts/Fruits">
          <img src={ebcbiscuits} alt="img" className="" />
        </a>
        <a className="flex justify-center" href="/allproducts/Fruits">
          <img src={ebcmakeup} alt="img" className="" />
        </a>
        <a className="flex justify-center" href="/allproducts/Fruits">
          <img src={ebcbath} alt="img" className="" />
        </a>
        <a className="flex justify-center" href="/allproducts/Fruits">
          <img src={ebccleaning} alt="img" className="" />
        </a>
        <a className="flex justify-center" href="/allproducts/Fruits">
          <img src={ebchomeneeds} alt="img" className="" />
        </a>
        <a className="flex justify-center" href="/allproducts/Fruits">
          <img src={ebcelectricals} alt="img" className="" />
        </a>
        <a className="flex justify-center" href="/allproducts/Fruits">
          <img src={ebchygiene} alt="img" className="" />
        </a>
        <a className="flex justify-center" href="/allproducts/Fruits">
          <img src={ebchealth} alt="img" className="" />
        </a>
        <a className="flex justify-center" href="/allproducts/Fruits">
          <img src={ebchomegrown} alt="img" className="" />
        </a>
        <a className="flex justify-center" href="/allproducts/Fruits">
          <img src={ebcpaan} alt="img" className="" />
        </a>
      </div>
    </div>
  );
};

export default ExploreByCategories;
