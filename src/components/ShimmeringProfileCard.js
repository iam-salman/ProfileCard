import React from "react";

const ShimmeringProfileCard = () => {
    return (
        <div className="w-[calc(100%-16px)] bg-[#1F2937] text-center mx-auto rounded-2xl md:w-[410px] lg:w-[450px] shadow-white-border">
            <div className="p-8 flex gap-10">
                <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-gray-600 flex items-center justify-center shadow relative animate-pulse">
                    {/* Shimmer effect */}
                    <div className="w-[104px] h-[104px] md:w-[132px] md:h-[132px] lg:w-[148px] lg:h-[148px] rounded-full bg-gray-500"></div>
                </div>

                <div className="text-start mt-2 md:mt-3">
                    {/* Shimmering name */}
                    <div className="h-4 md:h-5 lg:h-6 w-28 md:w-36 lg:w-40 rounded-sm bg-gray-600 animate-pulse"></div>
                    {/* Shimmering gender */}
                    <div className="h-4 md:h-5 lg:h-6 w-16 md:w-20 lg:w-24 rounded-sm bg-gray-600 my-3 md:my-4 lg:my-5 animate-pulse"></div>
                    {/* Shimmering phone */}
                    <div className="h-4 md:h-5 lg:h-6 w-20 md:w-24 lg:w-28 rounded-sm bg-gray-600 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default ShimmeringProfileCard;
