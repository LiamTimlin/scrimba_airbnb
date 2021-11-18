import React from "react";
import HeroImage from "../images/heroImage.png";

function HeroSection() {
    return (
        <div className="flex flex-col  p-16  space-y-24 lg:items-center">
            <img className="max-w-screen-md self-center" src={HeroImage} alt="" />
            <div className="font-poppins space-y-6">
                <h1 className="text-7xl font-semibold ">Online Experiences</h1>
                <h2 className="text-3xl font-light ">
                    Join unique interactive activities led by <br /> one-of-a-kind hosts - all without leaving home.
                </h2>
            </div>
        </div>
    );
}

export default HeroSection;
