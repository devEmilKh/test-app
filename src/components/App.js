import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles} from "./theme";
import logo from '../assets/Frame227.png';
import Pagination from './Pagination';
import VectorFD from '../assets/VectorFD.png';
import VectorFL from '../assets/VectorFL.png';

function App() {
  const [theme, setTheme] = useState("dark");
  const [vector, setVector] = useState(VectorFD);
  const changeButton = () => {
    vector === VectorFL ? setVector(VectorFD) : setVector(VectorFL);
  };
  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
};


return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
          <div className="Frame">
            <img className="logo" src={ logo } alt="logo"/>
            <img className="button" onClick = { switchTheme } src = {changeButton} alt="button" />
          </div>
          <div>
              <Pagination />
          </div>
    </ThemeProvider>
  );
}

export default App;