import React from "react";
import { Footer, Blog, Possibility, Features, WhatGPT, Header} from './containers/index'
import { CTA, Brand, Navbar } from './componets';
import './app.css';
const App = () =>{
    return (
        <div className="App">
            <div className="gradient">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
};

export default App;