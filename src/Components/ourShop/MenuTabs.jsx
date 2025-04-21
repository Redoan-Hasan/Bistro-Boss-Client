import { Link, Outlet } from "react-router";
import { useState, useEffect } from "react";

const MenuTabs = ({category}) => {
    const [activeTab, setActiveTab] = useState("salad");
    
    // Set initial active tab based on category prop
    useEffect(() => {
        if (category) {
            setActiveTab(category);
        }
    }, [category]);

    // Tab data
    const tabs = [
        { id: "salad", label: "SALAD", path: "salad" },
        { id: "pizza", label: "PIZZA", path: "pizza" },
        { id: "soup", label: "SOUPS", path: "soups" },
        { id: "dessert", label: "DESSERTS", path: "desserts" },
        { id: "drinks", label: "DRINKS", path: "drinks" }
    ];

    // Handle tab click
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="flex flex-col">
            <div className="max-w-7xl mx-auto px-4 my-4 sm:my-6 md:my-8">
                <div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 my-3 sm:my-4 md:my-5">
                    {tabs.map((tab) => (
                        <Link 
                            key={tab.id}
                            to={tab.path}
                            onClick={() => handleTabClick(tab.id)}
                            className={`text-xs sm:text-sm md:text-base lg:text-lg font-medium pb-1 sm:pb-2 px-1 sm:px-2 transition-all duration-200 
                                ${activeTab === tab.id ? 'text-[#BB8506] border-b-2 sm:border-b-4 border-[#BB8506]' : 'text-black hover:text-[#BB8506]'}`}
                        >
                            {tab.label}
                        </Link>
                    ))}
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default MenuTabs;