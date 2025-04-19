const Cover = ({coverTitle, coverSubTitle , textBg, textColor}) => {
    return (
        <div className="relative max-w-7xl mx-auto py-8 md:py-16 lg:py-24 px-4 md:px-8 my-24">
            {/* Image as a regular img tag with relative positioning */}
            <img 
                src="/assets/home/chef-service.jpg" 
                alt="Chef Service" 
                className="absolute inset-0 w-full h-full object-cover rounded-none"
                style={{ borderRadius: 0 }}
            />
            
            {/* Content box positioned on top of the image */}
            <div className={`${textColor} relative z-10 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 ${textBg} text-center`}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-semibold mb-3 md:mb-6">{coverTitle}</h2>
                <p className="text-sm sm:text-base font-inter leading-relaxed max-w-3xl mx-auto">
                    {coverSubTitle}
                </p>
            </div>
        </div>
    );
};

export default Cover;