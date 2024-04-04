import React from "react";
import { logo } from "../assets";
import { BsBag, BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const userData = useSelector((store) => {
    return store.userAuthReducer.user;
  });

  const cartItem = useSelector((store) => {
    return store.cartReducer.cart;
  });

  let value = 0;
  let offerValue = 0;
  cartItem.map((el) => {
    offerValue += Number(el.price);
    return (value = value + Number(el.price2));
  });
  const finalAmount = offerValue;
  offerValue = value - offerValue;

  // console.log(cartItem,"dd");

  const id = userData?.uid;

  return (
    <>
      <div className="bg-[#450072] py-4 px-8 flex flex-row space-x-8 w-full items-center justify-between ">
        <div className="flex w-full sm:w-auto  flex-row space-x-2  items-center ">
          <Link to="/">
            <img src={logo} alt="logo" className="" />
          </Link>
          <div className="h-[30px] w-[3px] bg-[#c6c6c6b8] rounded-xl "></div>
          <h2 className="text-white font-semibold text-[13px] md:text-[16px] lg:text-[20px] ml-4">
            Location
          </h2>
        </div>
        <div className="hidden sm:block sm:w-[384px] lg:w-[576px]">
          <input
            type="text"
            className="hidden outline-none md:flex w-full h-[42px] rounded-lg px-8"
            placeholder="Search for over 5000+ products"
          />
        </div>
        {/* <BsSearch className="hidden sm:flex md:hidden text-white text-[20px]" /> */}
        <div className="flex   space-x-4 items-center">
          <div className="">
            {!id ? (
              <Link
                to="/login"
                className="text-white font-semibold hidden sm:flex"
              >
                Login
              </Link>
            ) : (
              <Link
                to="/account"
                className="text-white font-semibold hidden sm:flex"
              >
                My Account
              </Link>
            )}
          </div>
          {/* //! BUG for add to card Button not working */}

          {/* <Link to="/cart"> */}
          <Link className="hidden sm:flex sm:w-full ">
            <div className="flex flex-row text-white w-full h-full bg-[#FF3269] items-center rounded-lg px-8 py-4 space-x-4">
              <BsBag className="" />
              <div>
                {cartItem.length == 0 ? (
                  <div className="text-lg ">My Cart</div>
                ) : (
                  <div className=" flex items-center space-x-2">
                    <div className="text-lg flex space-x-2 ">
                      <div>{cartItem.length}</div>
                      <div>Items</div>
                    </div>
                    <div>₹{finalAmount}</div>
                  </div>
                )}
              </div>
            </div>
          </Link>
          <BiUser className="flex sm:hidden text-white text-[20px] font-semibold cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
