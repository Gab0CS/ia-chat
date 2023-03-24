import React from "react";
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () =>{
    return (
        <div className="gpt_header section_padding" id="home">
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
            </div>

        <div className="gpt_header_image">
            <img src={ai} alt="Ai"/>
        </div> 
    </div>
    )
};

export default Header;

const Header2 = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
    
            <div className="gpt3__header-content__input">
            <input type="email" placeholder="Your Email Address" />
            <button type="button">Get Started</button>
            </div>
    
            <div className="gpt3__header-content__people">
            <img src={people} />
            <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>
    
        <div className="gpt3__header-image">
            <img src={ai} />
        </div>
    </div>
);  