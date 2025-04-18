const FromOurMenu = () => {
    return (
        <div className="relative py-16 md:py-24">
            {/* Main container with image */}
            <div className="relative">
                {/* Featured image as regular img tag */}
                <img 
                    src="/assets/home/featured.jpg" 
                    alt="Featured background" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
                
                {/* Content container */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
                    {/* Featured menu section */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left image */}
                        <div className="w-full px-4 md:px-8">
                            <img 
                                src="/assets/home/featured.jpg" 
                                alt="Featured dish" 
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        
                        {/* Right content */}
                        <div className="text-white px-4 md:px-0">
                            <h3 className="text-xl md:text-2xl mb-2">March 20, 2023</h3>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">WHERE CAN I GET SOME?</h2>
                            <p className="mb-6 text-gray-300">
                                Our signature dish is available at any of our Bistro Boss locations. Featuring locally sourced ingredients, our chef's special duck confit is served with roasted seasonal vegetables and a rich port wine reduction. This exquisite dish has been featured in Culinary Magazine and remains our most requested menu item since our establishment in 2010.
                            </p>
                            <button className="px-6 py-2 uppercase font-medium border-b-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromOurMenu;
