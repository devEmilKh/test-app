import React, { useState } from "react";
import '../index.css';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles} from "./theme";
import logo from '../assets/Frame227.png'

const API_KEY = "paintings"

function App() {
  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  class App extends React.Component {

    gettingImage = async () => {
        const api_url = await 
        fetch(`https://test-front.framework.team/${API_KEY}`);
        const data = await api_url.json();
        console.log(data);
    }
}

return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
        <div className="App">
          <img className="logo" src={ logo } alt="logo"/>
          <img className="button" onClick={ switchTheme } src= {logo} alt="button" />
        </div>
        <div>
          <h2>test</h2>
        </div>
    </ThemeProvider>
  );
}

export default App;