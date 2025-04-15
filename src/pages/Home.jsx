import ItemsSlider from "../Components/ItemsSlider";
import OrderOnline from "../Components/OrderOnline";
import Slider from "../Components/Slider";

const Home = () => {
    return (
        <div>
            <Slider />
            <OrderOnline textOne={"From 11:00am to 10:00pm"} textTwo={"ORDER ONLINE"}/>
            <ItemsSlider />
        </div>
    );
};

export default Home;