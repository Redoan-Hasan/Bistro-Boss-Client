import React from "react";
import OurMenuBannerOne from "../Components/OurMenuPage/OurMenuBannerOne";
import MenuTabs from "../Components/ourShop/MenuTabs";

const OurShop = () => {
  return (
    <div>
      <OurMenuBannerOne
        bgImgUrl={"/assets/shop/banner2.jpg"}
        title={"Our Shop"}
        subtitle={"Would you like to try a dish?"}
      />
      <MenuTabs />
    </div>
  );
};

export default OurShop;
