import React, { useState } from "react";
import '../index.css';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles} from "./theme";
import logo from '../assets/Frame227.png'

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
          <button className="button" onClick={switchTheme} />
        </div>
        <div>
          <h2>test</h2>
        </div>
    </ThemeProvider>
  );
}

export default App;