import { useEffect } from "react";
import { useState } from "react";

const useMenu = (filterCategoryName) => {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenuItems(data.filter(item => item.category === filterCategoryName)));
    },[filterCategoryName])

    return menuItems;
};

export default useMenu;