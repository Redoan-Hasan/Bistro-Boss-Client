    import React, { useEffect, useState } from "react";
    import useMenu from "../../hooks/useMenu";
    import ShopMenuItems from "./ShopMenuItems";
// import { useParams } from "react-router";

    const TabItems = ({categoryName}) => {
    // const {categoryName} = useParams();
    // console.log(categoryName);
    const itemsPerPage = 6;
    const [count,setCount] = useState(0);
    useEffect(()=>{
        const getData = async () => {
        await fetch(`http://localhost:5000/allMenus`)
        .then(res => res.json())
        .then(data => setCount(data.length));
        }
        getData();
    },[])
    const totalNumberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(totalNumberOfPages).keys()].map((num) => num + 1);
    const items = useMenu(categoryName);
    // console.log(categoryName);
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
