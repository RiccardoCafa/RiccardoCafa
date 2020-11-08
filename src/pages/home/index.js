import React, { Component } from 'react';

import './style.css';

export default class Home extends Component {
    
    render() {
        return (
            <div>
                <header className="header-container">
                    <div className="left">
                        <a href={process.env.WEB} className="menu-option">RICC DEV</a>
                    </div>
                    <div className="right">
                        <a href={process.env.WEB} className="menu-option">GAMES</a>
                        <a href={process.env.WEB} className="menu-option">WEB</a>
                    </div>
                </header>
                <body className="main-container">
                    <img src="https://github.com/riccardocafa.png?size=200" alt="profile" className="avatar-image"></img>
                    <p className="aboutme-text">
                        Hello, I'm Ricc! <br/>
                        Student at Centro Universitário SENAI CIMATEC<br/>
                        Programmer<br/>
                        Unity Game Developer<br/>
                        Web Developer<br/>
                    </p>
                </body>
            </div>
        );
    }
}