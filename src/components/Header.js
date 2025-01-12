import React, { useState } from "react";
import { APP_LOGO } from "../utils/ImageLinks";
import {Link} from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Log In");
    return (
        <div className="header">
            <div className="logoContainer">
                <img src={APP_LOGO} alt="Image not found" />
            </div>
            <div className="navItems">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
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