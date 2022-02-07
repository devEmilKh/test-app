import {createGlobalStyle} from "styled-components"
import VectorFD from '../assets/VectorFD.png';
import VectorFL from '../assets/VectorFL.png';

export const darkTheme = {
  body: "#000",
  textColor: "#fff",
  img: VectorFD
}

export const lightTheme = {
  body: "#FFF",
  textColor: "#000",
  img: VectorFL
}

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .9s ease;
 }
`