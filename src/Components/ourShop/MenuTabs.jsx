import { NavLink, Outlet } from "react-router";

const MenuTabs = () => {
    return (
        <div className="flex flex-col ">
            <div className="max-w-7xl mx-auto px-4 my-8">
                <div className="flex justify-center gap-4 md:gap-8 my-5">
                    <NavLink 
                        to="salad"
                        end
                        className={({ isActive }) => `text-lg font-medium pb-2 px-2 transition-all duration-200 
                            ${isActive ? 'text-[#BB8506] border-b-4 border-[#BB8506]' : 'text-black hover:text-[#BB8506]'}`}
                    >
                        SALAD
                    </NavLink>
                    
                    <NavLink 
                        to="pizza"
                        className={({ isActive }) => `text-lg font-medium pb-2 px-2 transition-all duration-200 
                            ${isActive ? 'text-[#BB8506] border-b-4 border-[#BB8506]' : 'text-black hover:text-[#BB8506]'}`}
                    >
                        PIZZA
                    </NavLink>
                    <NavLink 
                        to="soups"
                        className={({ isActive }) => `text-lg font-medium pb-2 px-2 transition-all duration-200 
                            ${isActive ? 'text-[#BB8506] border-b-4 border-[#BB8506]' : 'text-black hover:text-[#BB8506]'}`}
                    >
                        SOUPS
                    </NavLink>
                    <NavLink 
                        to="desserts"
                        className={({ isActive }) => `text-lg font-medium pb-2 px-2 transition-all duration-200 
                            ${isActive ? 'text-[#BB8506] border-b-4 border-[#BB8506]' : 'text-black hover:text-[#BB8506]'}`}
                    >
                        DESSERTS
                    </NavLink>
                    <NavLink 
                        to="drinks"
                        className={({ isActive }) => `text-lg font-medium pb-2 px-2 transition-all duration-200 
                            ${isActive ? 'text-[#BB8506] border-b-4 border-[#BB8506]' : 'text-black hover:text-[#BB8506]'}`}
                    >
                        DRINKS
                    </NavLink>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default MenuTabs;