import styled from "styled-components";

import { Item } from 'semantic-ui-react';

export const ItemGrid = styled(Item)`
  &&& > .Group {
    flex-direction: column;
    display: grid;
    grid-column: 1fr 1fr;
    grid-row: 1fr;
    justify-content: initial;
    align-items: initial;
  }
`;

export const MenuOption = styled.a`
  text-decoration: none;
  text-align: center;
  color: #224158;
  font-size: 1.5rem;
  font-weight: 900;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  background-color: #3c94b8;
  height: 4rem;
  display: grid;
  grid-column: 1fr 1fr;
  grid-row: 1fr;
  grid-template-areas: "left right";
  padding: 0 4vw;
`;

export const MenuOptionRight = styled(MenuOption)`
  margin-left: 2rem;
  justify-self: right;
  align-self: center;
  grid-area: right;
`;

export const HeaderContainerRight = styled.div`
  justify-self: right;
  align-self: center;
  grid-area: right;
`;

export const HeaderContainerLeft = styled.div`
  justify-self: left;
  align-self: center;
  grid-area: left;
`;

export const MainContainer = styled.body`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: initial;
  flex-direction: column;
`;

export const ProjectContainer = styled.body`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 5rem 5rem;
  justify-content: center;
  flex-direction: column;
`;

export const AvatarImage = styled.img`
  margin-top: 4rem;
  width: 10rem;
  border-radius: 10rem;
`;

export const MidiaContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  height: 5rem;
  width: 100%;
  margin-bottom: 4rem;
`;

export const MidiaImage = styled.a`
  width: 2rem;
  margin-top: .5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  color: #fff;
  text-decoration: none;
`;

export const AboutmeText = styled.p`
  margin-top: 3rem;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
`;