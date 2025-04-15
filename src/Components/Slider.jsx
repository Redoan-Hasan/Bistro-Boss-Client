import { useState, useEffect } from "react";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Sample slider images - replace with your actual images
    const sliderImages = [
        "/assets/home/01.jpg",
        "/assets/home/02.jpg",
        "/assets/home/03.png",
        "/assets/home/04.jpg",
        "/assets/home/05.png",
        "/assets/home/06.png",
        
    ];
    // Auto slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
        }, 5000);
        
        return () => clearInterval(interval);
    }, [sliderImages.length]);

    // Handle manual navigation
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full overflow-hidden">
            {/* Main Slider */}
            <div className="relative h-[calc(100vh)] w-full">
                {sliderImages.map((image, index) => (
                    <div 
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <img 
                            src={image} 
                            alt={`Slide ${index + 1}`} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                {/* Dots Indicator - Updated to blue for active dot */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {sliderImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full ${
                                index === currentSlide ? "bg-blue-500" : "bg-white bg-opacity-50"
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Thumbnail Preview Section - Updated with dark border and padding */}
            <div className="flex justify-center mt-4 mb-4 space-x-4 px-4">
                {sliderImages.map((image, index) => (
                    <div 
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`cursor-pointer p-1 ${
                            index === currentSlide 
                                ? "border-4 border-black " 
                                : ""
                        }`}
                    >
                        <img 
                            src={image} 
                            alt={`Thumbnail ${index + 1}`} 
                            className="h-16 md:h-20 w-24 md:w-32 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;