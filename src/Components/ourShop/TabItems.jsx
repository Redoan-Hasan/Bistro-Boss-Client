    import React from "react";
    import useMenu from "../../hooks/useMenu";
    import ShopMenuItems from "./ShopMenuItems";

    const TabItems = ({ categoryName }) => {
    const items = useMenu(categoryName);
    console.log(categoryName);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
            <ShopMenuItems
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            recipe={item.recipe}
            price={item.price}
            />
        ))}
        </div>
    );
    };

    export default TabItems;
