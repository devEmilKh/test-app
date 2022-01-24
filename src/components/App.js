import React, { useState } from "react";
import '../index.css';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles} from "./theme";
import logo from '../assets/Frame227.png'
import vectorFL from '../assets/VectorFL.png'
import vectorFD from '../assets/VectorFD.png'

function App() {
  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
        <div className="App">
          <img className="logo" src={ logo } alt="logo"/>
          <button onClick={switchTheme}>button</button>
          <img className="vector" onClick={ switchTheme } src={ vectorFD } alt="vector"/>
        </div>
    </ThemeProvider>
  );
}

export default App;