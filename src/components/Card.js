import React from "react";
import { AiFillStar } from "react-icons/ai";

function Card({ experience }) {
    let badgeText;
    if (experience.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (experience.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="w-60 relative">
            {badgeText && <div className="absolute m-1 p-2 bg-white rounded-lg">{badgeText}</div>}
            {/* {experience.openSpots === 0 && <div className="absolute m-1 p-2 bg-white rounded-lg">SOLD OUT</div>} */}
            <img className="max-w-xs h-96 rounded-lg mb-2" src={experience.coverImg} alt="" />
            <div className="text-md font-light ">
                <div className="flex items-center gap-1 ">
                    <div className="text-red-500">
                        <AiFillStar />
                    </div>

                    <p>{experience.stats.rating}</p>
                    <p className="text-gray-500">{experience.location}</p>
                </div>
                <p>{experience.title}</p>
                <p>
                    <span className="font-semibold">{experience.price}</span> / person
                </p>
            </div>
        </div>
    );
}

export default Card;
