import React, { useState } from "react";
import '../index.css';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles} from "./theme";
import logo from '../assets/Frame227.png'
import Data from './Data'

function App() {
  const [theme, setTheme] = useState("dark");
  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
};


return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
          <div className="Frame">
            <img className="logo" src={ logo } alt="logo"/>
            <img className="button" onClick={ switchTheme } src= {logo} alt="button" />
          </div>
          <div>
              <Data />
          </div>
    </ThemeProvider>
  );
}

export default App;