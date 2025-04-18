import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

const Menu = () => {
    const [menu, setMenu]= useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenu(data));
    },[])
    
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menu.map((item, index) => (
                    <MenuCard key={index} name={item.name} image={item.image} price={item.price} recipe={item.recipe} />
                ))}
            </div>
            <div className="flex justify-center items-center mt-8">
                <button className=" px-6 py-2 uppercase font-medium border-b-2 border-black rounded-lg text-black hover:bg-black hover:text-white transition-all duration-300">View Full Menu</button>
            </div>
        </div>
    );
};

export default Menu;