import React from "react";
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css';


const Navbar = () =>{
    return (
        <div className="gtp_navbar">
            <div className="gtp_navbar_links">
                <div className="gpt_navbar_links_logo">
                    <img src={logo} alt="Logo"/>
                </div>
            </div>
        </div>
    )
};

export default Navbar;