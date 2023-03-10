import React from "react";
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () =>{
    return (
        <div className="gtp_header section_padding" id="home">
            <div className="gpt_header_content">
                <h1 className="gradient_text">IA-chat, something amazing for the future.</h1>
                <p>AI will increasingly become integrated into everyday life, from smart homes 
                    and virtual assistants to self-driving cars and personalized healthcare.</p>
                <div className="gpt_header_content_input">
                    <input type="email" placeholder="Email"></input>
                    <button type="button">Get Started</button>
                </div>
                <div className="header_content_people">
                    <img src={people} alt="Users"/>
                    <p>1,600 people requested our services.</p>
                </div>
                <div className="gpt_header_image">
                <img src={ai} alt="Ai"/>
            </div> 
            </div>
            
        </div>
    )
};

export default Header;