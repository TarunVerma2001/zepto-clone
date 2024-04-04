import React from "react";
import { howitworks } from "../constant/data";

const HowItWorks = () => {
  return (
    <div className="w-full px-8 mb-4">
      <div className="p-8  w-full h-auto">
        <div className="flex flex-col space-y-4 justify-center items-center ">
          <div>
            <h2 className="text-2xl font-semibold  ">How it Works</h2>
          </div>
          <div className=" flex  justify-center items-center  box-border">
            {/* //! BUG on grid implementation */}
            <div className="grid md:grid-cols-3 grid-cols-1  gap-8">
              {howitworks.map((item, id) => (
                <div
                  key={id}
                  className=" px-8 py-12 flex flex-col justify-center items-center shadow-xl rounded-xl border-[1px] border-[#c9c8c83c]"
                >
                  <img src={item.img} alt="" />
                  <h2 className="text-xl font-semibold pt-4">{item.title}</h2>
                  <p className="w-[240px] text-center text-sm pt-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2px] bg-[#97969690] w-full rounded-lg"></div>
    </div>
  );
};

export default HowItWorks;
