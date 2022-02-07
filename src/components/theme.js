import {createGlobalStyle} from "styled-components"

export const darkTheme = {
  body: "#000",
  textColor: "#fff",
  pictureColor: ("../assets/VectorFD.png")
}

export const lightTheme = {
  body: "#FFF",
  textColor: "#000",
  pictureColor: "../assets/VectorFL.png"
}

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }
 div{
   color: ${props => props.theme.pictureColor};
 }
`