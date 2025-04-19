import { Helmet } from "react-helmet-async";
import OurMenuBannerOne from "../Components/OurMenuPage/OurMenuBannerOne";
import OrderOnline from "../Components/OrderOnline";
import MenuPageItems from "../Components/OurMenuPage/MenuPageItems";

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <OurMenuBannerOne bgImgUrl={'/assets/menu/banner3.jpg'} title={'Our Menu'} subtitle={'Would you like to try a dish?'}/>
            <OrderOnline textOne={"Don't miss"} textTwo={"TODAY'S OFFER"}/>
            <MenuPageItems />
        </div>
    );
};

export default OurMenu;