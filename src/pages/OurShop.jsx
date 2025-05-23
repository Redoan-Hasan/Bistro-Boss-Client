import React from "react";
import OurMenuBannerOne from "../Components/OurMenuPage/OurMenuBannerOne";
import MenuTabs from "../Components/ourShop/MenuTabs";
import { useParams } from "react-router";

const OurShop = () => {
  const { category } = useParams();
  // console.log(category);
  return (
    <div>
        <title>Bistro Boss | Our Shop</title>
      <OurMenuBannerOne
        bgImgUrl={"/assets/shop/banner2.jpg"}
        title={"Our Shop"}
        subtitle={"Would you like to try a dish?"}
      />
      <MenuTabs category={category} />
    </div>
  );
};

export default OurShop;
