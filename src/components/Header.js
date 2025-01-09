import React from "react";
import { APP_LOGO } from "../utils/ImageLinks";

const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Header;