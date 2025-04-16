import OrderOnline from "./OrderOnline";

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
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-24">
          <div>
            <div className="my-12 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto text-center">
              <p className="text-[#D99904] italic font-inter text-base md:text-lg mb-2">
                ---Check it out---
              </p>
              <hr className="border-[#E8E8E8] border-2 w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto my-4" />
              <h2 className="font-inter text-white uppercase text-2xl md:text-3xl lg:text-4xl font-semibold my-2">
                FROM OUR MENU
              </h2>
              <hr className="border-[#E8E8E8] border-2 w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto my-4" />
            </div>
          </div>
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                WHERE CAN I GET SOME?
              </h2>
              <p className="mb-6 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate recte, deserunt dolores maiores quod nobis quas quasi.
                Eaque repellat recusandae ad iuventium tempore consectetur
                consequatur omnis ullam maxime tenetur.
              </p>
              <button className="px-6 py-2 rounded-lg uppercase font-medium border-b-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300">
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
