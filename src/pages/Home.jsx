import ItemsSlider from "../Components/ItemsSlider";
import OrderOnline from "../Components/OrderOnline";
import Recommends from "../Components/Recommends";
import Slider from "../Components/slider";
import AboutUs from "../Components/AboutUs";
import Menu from "../Components/Menu";
import CallUs from "../Components/CallUs";
import FromOurMenu from "../Components/FromOurMenu";
import Testimonials from "../Components/Testimonials";
// import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
const Home = () => {
    return (
        <div>
                <title>Bistro Boss | Home</title>
            
            <Slider />
            <OrderOnline textOne={"From 11:00am to 10:00pm"} textTwo={"ORDER ONLINE"}/>
            <ItemsSlider />
            <Cover coverTitle={"About Us"} coverSubTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."}  textBg={"bg-white"} textColor={"text-black"}/>
            <OrderOnline textOne={"Check it out"} textTwo={"FROM OUR MENU"}/>
            <Menu />
            <CallUs />
            <OrderOnline textOne={"Should Try"} textTwo={"CHEF RECOMMENDS"}/>
            <Recommends />
            <FromOurMenu />
            <Testimonials />
        </div>
    );
};

export default Home;