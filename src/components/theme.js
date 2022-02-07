import {createGlobalStyle} from "styled-components"
import VectorFD from '../assets/VectorFD.png';
import VectorFL from '../assets/VectorFL.png';

export const darkTheme = {
  body: "#000",
  textColor: "#fff",
  src: VectorFD
}

export const lightTheme = {
  body: "#FFF",
  textColor: "#000",
  src: VectorFL
}

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }
 img{
   color: ${props => props.theme.src};
 }
`