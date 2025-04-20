import { Link } from "react-router";
import useMenu from "../../hooks/useMenu";
import MenuCard from "../MenuCard";

const MenuPageItems = ({filterCategoryName}) => {
    const menuItems = useMenu(filterCategoryName);
    // console.log(filterCategoryName);
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuItems.map((item, index) => (
                    <MenuCard key={index} name={item.name} image={item.image} price={item.price} recipe={item.recipe} />
                ))}
            </div>
            <div className="flex justify-center items-center mt-8">
                <Link to="/ourShop" className=" px-6 py-2 uppercase font-medium border-b-2 border-black rounded-lg text-black hover:bg-black hover:text-white transition-all duration-300">ORDER YOUR FAVOURITE FOOD</Link>
            </div>
        </div>
    );
};

export default MenuPageItems;