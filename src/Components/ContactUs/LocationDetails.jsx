import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiTime } from "react-icons/bi";

const LocationDetails = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 my-16">
            {/* Phone */}
            <div className="flex flex-col">
                <div className="bg-[#D1A054] py-4 flex justify-center">
                    <FaPhoneAlt className="text-white text-2xl" />
                </div>
                <div className="border border-t-0 border-[#E8E8E8] pb-3 pl-3 pr-3 flex-1">
                    <div className="bg-[#F3F3F3] py-8 px-4 text-center h-full flex flex-col justify-center">
                        <h3 className="text-2xl font-medium mb-2">PHONE</h3>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>
            </div>

            {/* Address */}
            <div className="flex flex-col">
                <div className="bg-[#D1A054] py-4 flex justify-center">
                    <FaLocationDot className="text-white text-2xl" />
                </div>
                <div className="border border-t-0 border-[#E8E8E8] pb-3 pl-3 pr-3 flex-1">
                    <div className="bg-[#F3F3F3] py-8 px-4 text-center h-full flex flex-col justify-center">
                        <h3 className="text-2xl font-medium mb-2">ADDRESS</h3>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>
            </div>

            {/* Working Hours */}
            <div className="flex flex-col">
                <div className="bg-[#D1A054] py-4 flex justify-center">
                    <BiTime className="text-white text-2xl" />
                </div>
                <div className="border border-t-0 border-[#E8E8E8] pb-3 pl-3 pr-3 flex-1">
                    <div className="bg-[#F3F3F3] py-8 px-4 text-center h-full flex flex-col justify-center">
                        <h3 className="text-2xl font-medium mb-2">WORKING HOURS</h3>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationDetails;