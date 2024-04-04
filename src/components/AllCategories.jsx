import React from "react";
import { Link, useLocation } from "react-router-dom";

function AllCategories() {
  const router = useLocation();
  console.log(router.pathname);

  const data = [
    {
      href: "/allproducts/Fruits",
      img: "https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-webp,q-80/inventory/subcategory/6a18617b-93ce-429d-af41-f516d56142dc-image_file.png",
      name: "Fruits",
    },
    {
      href: "/allproducts/Vegetables",
      img: "https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-webp,q-80/inventory/subcategory/14ce93e3-cfe8-47b1-a76a-0f54cee99389-image_file.png",
      name: "Vegetables",
    },
    {
      href: "/allproducts/Baths",
      img: "https://cdn.zeptonow.com/production///tr:w-90,ar-200-200,pr-true,f-webp,q-80/inventory/subcategory/4988bfb8-6dc8-4445-bfb6-ae3cd5fc6f36-Untitled_design_-_2022-08-17T063858.846-removebg-preview.png",
      name: "Baths",
    },
    {
      href: "/allproducts/Makeup",
      img: "https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-webp,q-80/inventory/subcategory/229fbf50-33b0-49d3-ab8a-9b4941e932e4-Makeup___More-removebg-preview_(1).png",
      name: "Makeup",
    },
    {
      href: "/allproducts/Grocery",
      img: "https://cdn.zeptonow.com/production///tr:w-90,ar-280-224,pr-true,f-webp,q-80/inventory/subcategory/68d13476-6218-4b28-a97a-117da5094c8c-5143add5-a250-48dc-82ce-eb26716a6d65-Cooking_Essentials-removebg-preview-min.png",
      name: "Grocery",
    },
    {
      href: "/allproducts/Drinks",
      img: "https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-webp,q-80/inventory/subcategory/04b49ab1-4cec-4a0f-a788-263091a93e8d-image_file.png",
      name: "Drinks",
    },
  ];
  return (
    <div className="flex  flex-row flex-wrap md:flex-col w-full  bg-white">
      {data.map((item) => (
        <Link to={item.href}>
          <li
            className={`px-3 py-1 hover:bg-[#F7E4FF] border-l-4 border-[#Fff]  hover:border-[#450072]  flex flex-row justify-start items-center gap-3 ${
              router.pathname == item.href && "bg-[#F7E4FF] border-[#450072] "
            }`}
          >
            <img src={item.img} className="h-[50px]" />
            {item.name}
          </li>
        </Link>
      ))}
    </div>
  );
}

export default AllCategories;
