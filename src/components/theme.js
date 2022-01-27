import {createGlobalStyle} from "styled-components"
import '../index.css';

export const darkTheme = {
  body: "#000",
  textColor: "#fff",
  headingColor: "lightblue"
}

export const lightTheme = {
  body: "#FFF",
  textColor: "#000",
  headingColor: "#d23669"
}

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }
 div{
   color: ${props => props.theme.headingColor};
 }
`