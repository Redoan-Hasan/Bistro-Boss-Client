import React from "react";

const MenuCard = ({name, image, price, recipe}) => {
  return (
    <div>
      <div className="flex space-x-4">
        {/* Left image with custom border radius */}
        <div className="w-[118px] h-[104px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            style={{ borderRadius: "0px 200px 200px 200px" }}
          />
        </div>

        {/* Content section */}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="text-xl uppercase font-cinzel">{name}</h3>
            <p className="text-yellow-500 font-bold">${price}</p>
          </div>
          <div className="border-b border-dashed border-gray-300 my-2"></div>
          <p className="text-gray-500">{recipe}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
