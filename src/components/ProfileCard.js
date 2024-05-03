import React, { useState, useEffect } from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import { RiGenderlessFill } from "react-icons/ri";
import ShimmeringProfileCard from "./ShimmeringProfileCard";

const ProfileCard = () => {
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://randomuser.me/api/?page=1&results=1&seed=abc"
            );
            const data = await response.json();
            setDetail(data?.results?.[0]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className="bg-gradient-to-r from-gray-500 to-gray-700 flex justify-center items-center h-screen">
            {detail ? (
                <div className="w-[calc(100%-16px)] bg-[#1F2937] text-center mx-auto rounded-2xl md:w-[420px] lg:w-[470px] shadow-white-border">
                    <div className="p-8 flex gap-7 md:gap-10">
                        <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-orange-600 flex items-center justify-center shadow">
                            <img
                                src={detail?.picture?.large}
                                alt="user"
                                className="w-[104px] h-[104px] md:w-[132px] md:h-[132px] lg:w-[148px] lg:h-[148px] rounded-full"
                            />
                        </div>

                        <div className="text-start mt-2 md:mt-3 lg:mt-4 flex flex-col justify-start">
                            <div className="flex items-center mb-2 md:mb-3">
                                <FaUser className="text-orange-600 mr-2 md:mr-3" />
                                <p className="text-white font-bold text-xl md:text-2xl">
                                    <span>{detail?.name?.first}</span>{" "}
                                    <span>{detail?.name?.last}</span>{" "}
                                </p>
                            </div>
                            <div className="flex items-center mb-2 md:mb-3">
                                <RiGenderlessFill className="text-orange-600 mr-2 md:mr-3" />
                                <p className="text-white font-medium md:text-lg">
                                    {detail?.gender?.charAt(0).toUpperCase() +
                                        detail?.gender?.substring(1)}{" "}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <FaPhone className="text-orange-600 mr-2 md:mr-3" />
                                <p className="text-white font-medium md:text-lg">
                                    {detail?.phone}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <ShimmeringProfileCard />
            )}
        </div>
    );
};

export default ProfileCard;
