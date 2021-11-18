import React from "react";
import airbnb_logo from "../images/airbnb1.svg";
function NavBar() {
    return (
        <div className="shadow-xl p-10">
            <img className="w-40" src={airbnb_logo} alt="" />
        </div>
    );
}

export default NavBar;
