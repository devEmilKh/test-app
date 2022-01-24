import {createGlobalStyle} from "styled-components"
import '../index.css';

export const darkTheme = {
  body: "#000000", 
}

export const lightTheme = {
  body: "#ffffff",
}

export const Vector = {
    
}

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  transition: .3s ease;
 }
`