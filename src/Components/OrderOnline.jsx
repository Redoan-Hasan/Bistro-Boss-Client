const OrderOnline = ({textOne, textTwo}) => {
    return (
        <div className="my-12 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto text-center">
            <p className="text-[#D99904] italic font-inter text-base md:text-lg mb-2">
                ---{textOne}---
            </p>
            <hr className="border-[#E8E8E8] border-2 w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto my-4" />
            <h2 className="font-inter text-black uppercase text-2xl md:text-3xl lg:text-4xl font-semibold my-2">
                {textTwo}
            </h2>
            <hr className="border-[#E8E8E8] border-2 w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto my-4" />
        </div>
    );
};

export default OrderOnline;