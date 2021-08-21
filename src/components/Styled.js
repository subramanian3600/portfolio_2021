import styled from "styled-components";
import { size } from "./breakpoints";
var web_blue = "#1a3263";

export const NavBar = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;1,100;1,300&display=swap");
  width: 100%;
  height: 50px;
  background-color: #1a3263;
  margin: 0px;
  padding: 8px 0px;
  @media only screen and (max-width: ${size.xs}) {
    height: 35px;
  }
  @media only screen and (max-width: ${size.sm}) {
    height: 40px;
  }
  @media only screen and (max-width: ${size.lg}) {
    height: 50px;
  }
`;

export const NavBarTitle = styled.h1`
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  color: #e8e2db;
  margin: 0px 20px;
  @media only screen and (max-width: ${size.xs}) {
    font-size: 25px;
  }
  @media only screen and (max-width: ${size.sm}) {
    font-size: 30px;
  }
  @media only screen and (max-width: ${size.ls}) {
    font-size: 30px;
  }
`;

export const IndexBlock = styled.div`
  width: 1200px;
  height: 600px;
  background-color: #f4f4f4;
  margin: 0 auto;
  @media only screen and (max-width: ${size.xs}) {
    padding: 0px 5px;
    width: 100%;
    height: 800px;
  }
  @media only screen and (max-width: ${size.sm}) {
    padding: 0px 5px;
    width: 100%;
    height: 800px;
  }
  @media only screen and (max-width: ${size.ls}) {
    padding: 0px 5px;
    width: 100%;
    height: 600px;
  }
`;

export const GreetingText = styled.h3`
  margin-top: 50px;
  margin-left: 10px;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  color: #252525;
  @media only screen and (max-width: ${size.xs}) {
    font-size: 15px;
  }
  @media only screen and (max-width: ${size.sm}) {
    font-size: 20px;
  }
  @media only screen and (max-width: ${size.ls}) {
    font-size: 20px;
  }
`;

export const NameText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  color: #252525;
  margin-left: 10px;
  @media only screen and (max-width: ${size.xs}) {
    font-size: 18px;
  }
  @media only screen and (max-width: ${size.sm}) {
    font-size: 18px;
  }
  @media only screen and (max-width: ${size.ls}) {
    font-size: 30px;
  }
`;

export const Name = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  color: #1a3263;
  margin: 0px 10px;
  @media only screen and (max-width: ${size.xs}) {
    font-size: 25px;
  }
  @media only screen and (max-width: ${size.sm}) {
    font-size: 25px;
  }
`;

export const Role = styled.h3`
  margin-left: 10px;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  color: #252525;
  @media only screen and (max-width: ${size.xs}) {
    font-size: 18px;
  }
  @media only screen and (max-width: ${size.sm}) {
    font-size: 18px;
  }
  @media only screen and (max-width: ${size.ls}) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.h3`
  margin: 10px 10px;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  color: #252525;
  @media only screen and (max-width: ${size.xs}) {
    font-size: 25px;
  }
  @media only screen and (max-width: ${size.sm}) {
    font-size: 25px;
  }
  @media only screen and (max-width: ${size.ls}) {
    font-size: 30px;
  }
`;

export const Bio = styled.h4`
  width: 60%;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  color: #252525;
  text-align: justify;
  margin: 0 20px;
  @media only screen and (max-width: ${size.xs}) {
    margin: 0 auto;
    width: 90%;
    font-size: 15px;
  }
  @media only screen and (max-width: ${size.sm}) {
    margin: 0 auto;
    width: 90%;
    font-size: 15px;
  }
  @media only screen and (max-width: ${size.ls}) {
    margin: 0 auto;
    width: 90%;
    font-size: 20px;
  }
`;

export const ProfileImg = styled.img`
  position: absolute;
  width: 294px;
  height: 284px;
  right: 50px;
  top: 150px;
  background-size: cover;
  border-radius: 10px;
  @media only screen and (max-width: ${size.xs}) {
    position: static;
    display: block;
    margin: 0 auto;
  }
  @media only screen and (max-width: ${size.sm}) {
    position: static;
    display: block;
    margin: 0 auto;
  }
  @media only screen and (max-width: ${size.ls}) {
    position: static;
    display: block;
    margin: 0 auto;
  }
`;

export const Location = styled.div`
  font-weight: 500;
  text-align: center;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  position: absolute;
  width: 300px;
  height: 50px;
  top: 480px;
  right: 50px;
  @media only screen and (max-width: ${size.xs}) {
    position: static;
    display: block;
    width: 200px;
    height: 40px;
    margin: 20px auto;
  }
  @media only screen and (max-width: ${size.sm}) {
    position: static;
    display: block;
    width: 200px;
    height: 40px;
    margin: 20px auto;
  }
  @media only screen and (max-width: ${size.ls}) {
    position: static;
    display: block;
    width: 200px;
    height: 40px;
    margin: 20px auto;
  }
`;

export const DownloadCVButton = styled.button`
  width: 180px;
  height: 40px;
  top: 580px;
  right: 100px;
  position: absolute;
  background-color: ${web_blue};
  color: #fafafa;
  outline: none;
  border: 1px transparent solid;
  cursor: pointer;
  border-radius: 6px;
  @media only screen and (max-width: ${size.xs}) {
    position: static;
    margin: 0 auto;
    display: block;
  }
  @media only screen and (max-width: ${size.sm}) {
    position: static;
    margin: 0 auto;
    display: block;
  }
  @media only screen and (max-width: ${size.ls}) {
    position: static;
    margin: 0 auto;
    display: block;
  }
`;

export const SocialTab = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 60px;
  @media only screen and (max-width: ${size.xs}) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media only screen and (max-width: ${size.sm}) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Social = styled.svg`
  width: 45px;
  height: 40px;
  margin: 0px 10px;
  cursor: pointer;
`;
