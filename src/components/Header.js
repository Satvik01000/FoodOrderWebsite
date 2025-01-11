import React, { useState } from "react";
import { APP_LOGO } from "../utils/ImageLinks";

const Header = () => {
    const [btnName, setBtnName] = useState("Log In");
    return (
        <div className="header">
            <div className="logoContainer">
                <img src={APP_LOGO} alt="Image not found" />
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li>
                        <button className="LogInLogOut" onClick={() => {
                            setBtnName(btnName === "Log In" ? "Log Out" : "Log In");
                        }}>
                            {btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;