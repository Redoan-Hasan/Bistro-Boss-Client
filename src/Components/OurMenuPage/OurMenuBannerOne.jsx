const OurMenuBannerOne = ({bgImgUrl, title, subtitle}) => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url("${bgImgUrl}")` }}>
            {/* Content container */}
            <div className="relative z-10 h-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center px-4">
                
                {/* Text content */}
                <div className="relative z-20 bg-black/50 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-16 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 font-cinzel">{title}</h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-cinzel font-semibold">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default OurMenuBannerOne;