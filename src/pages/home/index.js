import React, { Component } from 'react';

import {
    HeaderContainer, 
    MenuOption, 
    AvatarImage, 
    AboutmeText, 
    MainContainer, 
    HeaderContainerLeft, 
    MenuOptionRight, 
    HeaderContainerRight,
    MidiaContainer,
    MidiaImage
} from './style.js';

import {
    FaLinkedin,
    FaInstagram,
    FaGithub
} from 'react-icons/fa';

export default class Home extends Component {
    
    openWebsite(url) {

    }

    render() {
        return (
            <div>
                <HeaderContainer>
                    <HeaderContainerLeft>
                        <MenuOption href={process.env.WEB}>RICC DEV</MenuOption>
                    </HeaderContainerLeft>
                    <HeaderContainerRight>
                        <MenuOptionRight href={process.env.WEB}>GAMES</MenuOptionRight>
                        <MenuOptionRight href={process.env.WEB}>WEB</MenuOptionRight>
                    </HeaderContainerRight>
                </HeaderContainer>
                <MainContainer>
                    <AvatarImage src="https://github.com/riccardocafa.png?size=200" alt="profile"></AvatarImage>
                    <AboutmeText>
                        I'm Ricc! <br/>
                        Student at Centro Universitário SENAI CIMATEC<br/>
                        Programmer<br/>
                        Unity Game Developer<br/>
                        Web Developer<br/>
                    </AboutmeText>
                    <MidiaContainer>
                        <MidiaImage href="https://github.com/RiccardoCafa" target="_blank">
                            <FaGithub size={48} cursor="pointer"/>
                        </MidiaImage>
                        <MidiaImage href="https://www.linkedin.com/in/riccardo-cafagna/">
                            <FaLinkedin size={48} cursor="pointer"/>
                        </MidiaImage>
                        <MidiaImage href="https://www.instagram.com/ricc.dev/">
                            <FaInstagram size={48} cursor="pointer"/>
                        </MidiaImage>
                    </MidiaContainer>
                </MainContainer>
            </div>
        );
    }
}