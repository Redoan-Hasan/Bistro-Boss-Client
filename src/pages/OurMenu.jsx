import { Helmet } from "react-helmet-async";
import OurMenuBannerOne from "../Components/OurMenuPage/OurMenuBannerOne";

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <OurMenuBannerOne />
        </div>
    );
};

export default OurMenu;