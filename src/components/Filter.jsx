import React from "react";

function Filter() {
  return (
    <div className="flex flex-col justify-center  border-t-2 pt-5 pl-4 ">
      <h3 className="font-semibold">Filter by Discount</h3>
      <form className="flex flex-col  pl-0  justify-center pt-5 gap-y-2 shadow-none">
        <div className="flex  space-x-2">
          <input type="checkbox" id="10-percent" value="10" name="10-percent" />
          <label for="10-percent" className=" text-[17px] font-medium">
            10% off or more
          </label>
        </div>
        <div className="flex space-x-2">
          <input type="checkbox" id="20-percent" value="20" name="20-percent" />
          <label for="20-percent" className=" text-[17px] font-medium">
            20% off or more
          </label>
        </div>
        <div className="flex space-x-2">
          <input type="checkbox" id="30-percent" value="30" name="30-percent" />
          <label for="30-percent" className=" text-[17px] font-medium">
            30% off or more
          </label>
        </div>
        <div className="flex space-x-2">
          <input type="checkbox" id="40-percent" value="40" name="40-percent" />
          <label for="40-percent" className=" text-[17px] font-medium">
            40% off or more
          </label>
        </div>
        <div className="flex space-x-2">
          <input type="checkbox" id="50-percent" value="50" name="50-percent" />
          <label for="50-percent" className=" text-[17px] font-medium">
            50% off or more
          </label>
        </div>
      </form>
    </div>
  );
}

export default Filter;
