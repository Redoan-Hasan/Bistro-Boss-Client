import ItemsSlider from "../Components/ItemsSlider";
import OrderOnline from "../Components/OrderOnline";
import Recommends from "../Components/Recommends";
import Slider from "../Components/slider";
import AboutUs from "../Components/AboutUs";
import Menu from "../Components/Menu";
import CallUs from "../Components/CallUs";
import FromOurMenu from "../Components/FromOurMenu";
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
            <Recommends />
            <FromOurMenu />
        </div>
    );
};

export default Home;