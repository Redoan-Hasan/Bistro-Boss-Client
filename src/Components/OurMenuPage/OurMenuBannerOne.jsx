const OurMenuBannerOne = () => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/menu/banner3.jpg')" }}>
            {/* Content container */}
            <div className="relative z-10 h-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center px-4">
                {/* Horizontal dark overlay behind text */}
                {/* <div className="absolute bg-black/40 w-full h-40 md:h-48"></div> */}
                
                {/* Text content */}
                <div className="relative z-20 bg-black/50 py-36 px-14 md:px-0 lg:px-0 w-full">
                    <h1 className="text-7xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-cinzel ">OUR MENU</h1>
                    <p className="text-2xl md:text-xl text-white font-cinzel font-semibold">WOULD YOU LIKE TO TRY A DISH?</p>
                </div>
            </div>
        </div>
    );
};

export default OurMenuBannerOne;