import React from 'react';

const ShopMenuItems = ({id, image, name,recipe, price}) => {
    return (
        <div>
            <div key={id} className="bg-white border border-gray-100 shadow-sm rounded-lg overflow-hidden flex flex-col">
                        <div className="relative h-64 overflow-hidden">
                            <img 
                                src={image} 
                                alt={name} 
                                className="w-full h-full object-cover"
                            />
                            <div className='absolute font-inter text-base top-2 right-2 bg-black text-white px-2 py-1 rounded'>
                                <p>${price}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center p-6 text-center font-inter">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                                <p className="text-gray-600 mb-6 line-clamp-2">{recipe}</p>
                            </div>
                            <button 
                                className="inline-block px-6 py-2 rounded-lg uppercase font-medium border-b-4 border-[#1F2937] text-[#1F2937] hover:bg-[#1F2937] hover:text-[#BB8506] hover:border-b-4 hover:border-[#BB8506] transition-all duration-300"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
        </div>
    );
};

export default ShopMenuItems;