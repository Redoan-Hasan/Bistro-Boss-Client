import { Helmet } from "react-helmet-async";
import OurMenuBannerOne from "../Components/OurMenuPage/OurMenuBannerOne";
import OrderOnline from "../Components/OrderOnline";
import MenuPageItems from "../Components/OurMenuPage/MenuPageItems";
import Cover from "../shared/Cover";

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <OurMenuBannerOne bgImgUrl={'/assets/menu/banner3.jpg'} title={'Our Menu'} subtitle={'Would you like to try a dish?'}/>
            <OrderOnline textOne={"Don't miss"} textTwo={"TODAY'S OFFER"}/>
            <MenuPageItems />
            <Cover coverTitle={"DESSERTS"} coverSubTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} textBg={"bg-black/50"} textColor={"text-white"} />
        </div>
    );
};

export default OurMenu;