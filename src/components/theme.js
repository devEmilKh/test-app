import {createGlobalStyle} from "styled-components"


export const darkTheme = {
  body: "#000",
  textColor: "#fff",
}

export const lightTheme = {
  body: "#FFF",
  textColor: "#000",
}

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .9s ease;
 }
`