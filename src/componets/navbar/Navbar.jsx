import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = () =>{
    return(
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#whatgpt">What is GPT</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case studies</a></p>
            <p><a href="#blog">Library</a></p>
        </>

    );
    
    
}
const Navbar = () =>{
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="gpt_navbar">
            <div className="gpt_navbar_links">
                <div className="gpt_navbar_links_logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="gpt_navbar_links_container">
                    <Menu />
                </div>
                </div>
                <div className="gpt_navbar_sign">
                    <p>Sign in</p>
                    <button type="button">Sign Up</button>
                </div>
                <div className="gpt_navbar_menu">
                    { toggleMenu 
                    ? <RiCloseLine color="#fff" size={26} onClick={()=> setToggleMenu(false)}/>
                    : <RiMenu3Line color="#fff" size={26} onClick={()=> setToggleMenu(true)}/>
                    }
                    {
                        toggleMenu && (
                            <div className="gpt_navbar_menu_container scale-up_center">
                                <div className="gpt_navbar_menu_container_links">
                                    <Menu />
                                    <div className="gpt_navbar_menu_container_links_sign">
                                        <p>Sign in</p>
                                        <button type="button">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
        </div>
    )
};

export default Navbar;