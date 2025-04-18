import { Helmet } from "react-helmet-async";
import OurMenuBannerOne from "../Components/OurMenuPage/OurMenuBannerOne";

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <OurMenuBannerOne bgImgUrl={'/assets/menu/banner3.jpg'} title={'Our Menu'} subtitle={'Would you like to try a dish?'}/>
        </div>
    );
};

export default OurMenu;