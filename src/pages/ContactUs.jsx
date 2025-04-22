import LocationDetails from "../Components/ContactUs/LocationDetails";
import OrderOnline from "../Components/OrderOnline";
import OurMenuBannerOne from "../Components/OurMenuPage/OurMenuBannerOne";

const ContactUs = () => {
  return (
    <div>
      <OurMenuBannerOne
        bgImgUrl={"/assets/contact/banner.jpg"}
        title={"CONTACT US"}
        subtitle={"Would you like to try a dish?"}
      />
      <OrderOnline textOne={"Visit Us"} textTwo={"OUR LOCATION"} />
      <LocationDetails />
    </div>
  );
};

export default ContactUs;
