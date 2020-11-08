import React, { Component } from 'react';

import './style.css';

export default class Home extends Component {
    
    render() {
        return (
            <div>
                <header className="header-container">
                    <a href="localhost:3000" className="ricc-dev">RICC DEV</a>
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