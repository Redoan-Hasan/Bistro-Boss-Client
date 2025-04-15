import AboutUs from "../Components/AboutUs";
import CallUs from "../Components/CallUs";
import ItemsSlider from "../Components/ItemsSlider";
import Menu from "../Components/Menu";
import OrderOnline from "../Components/OrderOnline";
import Slider from "../Components/Slider";

const Home = () => {
    return (
        <div>
            <Slider />
            <OrderOnline textOne={"From 11:00am to 10:00pm"} textTwo={"ORDER ONLINE"}/>
            <ItemsSlider />
            <AboutUs />
            <OrderOnline textOne={"Check it out"} textTwo={"FROM OUR MENU"}/>
            <Menu />
            <CallUs />
            <OrderOnline textOne={"Should Try"} textTwo={"CHEF RECOMMENDS"}/>
        </div>
    );
};

export default Home;