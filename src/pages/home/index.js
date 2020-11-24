import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Image, Item, Label, Group, Grid } from 'semantic-ui-react';

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
    MidiaImage,
    ProjectContainer,
    ItemGrid
} from './style.js';

import {
    FaLinkedin,
    FaInstagram,
    FaGithub
} from 'react-icons/fa';

import ProjectInfo from '../../component/ProjectInfo/index';

import data from '../../data/projects.json';

import gamopImg from '../../assets/Gamop.png';

import ThemeProvider from '../../component/ThemeProvider/index';

export default class Home extends Component {

    getImage(name) {
        switch(name) {
            case "gamop": return gamopImg;
            default: return "";
        }
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
                    <ThemeProvider></ThemeProvider>
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
                <HeaderContainer>
                    <HeaderContainerLeft>
                        <MenuOption>GAMES</MenuOption>
                    </HeaderContainerLeft>
                </HeaderContainer>
                <ProjectContainer>
                    <Item.Group>
                        {data.map((project, index) =>
                            <ProjectInfo key={index} proj_img={this.getImage(project.img_url)} project={project}></ProjectInfo>
                        )}
                    </Item.Group>
                </ProjectContainer>
            </div>
        );
    }
}