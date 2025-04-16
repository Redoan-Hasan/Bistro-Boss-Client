import { useState, useEffect } from 'react';

const Recommends = () => {
    const [recommendedItems, setRecommendedItems] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setRecommendedItems(data));
    },[])

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedItems.filter(items =>items.category === 'popular').slice(0, 3).map(item => (
                    <div key={item.id} className="bg-white border border-gray-100 shadow-sm rounded-lg overflow-hidden flex flex-col">
                        <div className="h-64 overflow-hidden">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-between items-center p-6 text-center font-inter">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                <p className="text-gray-600 mb-6 line-clamp-2">{item.recipe}</p>
                            </div>
                            <button 
                                className="inline-block px-6 py-2 rounded-lg uppercase font-medium border-b-2 border-[#1F2937] text-[#1F2937] hover:bg-[#1F2937] hover:text-[#BB8506] transition-all duration-300"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommends;