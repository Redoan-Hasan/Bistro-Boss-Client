import React, { useEffect, useState } from "react";
    // import useMenu from "../../hooks/useMenu";
    import ShopMenuItems from "./ShopMenuItems";
// import { useParams } from "react-router";

    const TabItems = ({categoryName}) => {
    // const {categoryName} = useParams();
    // console.log(categoryName);
    const itemsPerPage = 6;
    const [count,setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [items,setItems] = useState([]);
    useEffect(()=>{
        const getData = async () => {
        await fetch(`http://localhost:5000/allMenus?page=${currentPage}&size=${itemsPerPage}&filter=${categoryName}`)
        .then(res => res.json())
        .then(data => setItems(data));
        }
        getData();
    },[itemsPerPage,currentPage,categoryName])

    useEffect(()=>{
        const getData = async () => {
        await fetch(`http://localhost:5000/menuCount?filter=${categoryName}`)
        .then(res => res.json())
        .then(data => setCount(data.count));
        }
        getData();
    },[categoryName])

    useEffect(()=>{
        setCurrentPage(1);
    },[categoryName])




    const totalNumberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(totalNumberOfPages).keys()].map((num) => num + 1);
    // const items = useMenu(categoryName);
    // console.log(categoryName);

    const handlePaginationButton = (value) => {
        setCurrentPage(value);
    };
    return (
        <div>
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
            
            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-10 mb-6">
                <button 
                    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    disabled={currentPage === 1}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
                
                <div className="text-lg font-medium">
                    {currentPage} / {totalNumberOfPages}
                </div>
                
                <button 
                    onClick={() => currentPage < totalNumberOfPages && setCurrentPage(currentPage + 1)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${currentPage === totalNumberOfPages ? 'bg-gray-200 text-gray-500' : 'bg-amber-400 text-black hover:bg-amber-500'}`}
                    disabled={currentPage === totalNumberOfPages}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            
            {/* Page indicators */}
            <div className="flex justify-center gap-1 mb-10">
                {pages.map(page => (
                    <div 
                        key={page} 
                        className={`w-3 h-3 rounded-full cursor-pointer ${currentPage === page ? 'bg-green-600' : 'bg-green-600 opacity-50'}`}
                        onClick={() => handlePaginationButton(page)}
                    ></div>
                ))}
            </div>
        </div>
    );
    };

    export default TabItems;
