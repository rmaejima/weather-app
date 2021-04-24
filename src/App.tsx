import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { FirstPage } from "./pages/FirstPage";
import { createGlobalStyle } from "styled-components";
// import axios from "axios";
// import { Title } from "./components/Title";
// import { Form } from "./components/Form";
// import { Results } from "./components/Results";
// import { Loading } from "./components/Loading";
// import "./App.css";

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" children={<FirstPage />} />
        <Route exact path="/main" children={<MainPage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

//---------------------------------styled component-----------------------------------
const GlobalStyle = createGlobalStyle`
/* ちゃんと反映されている */
html {
  font-size: 100%;
}

body {
  font-family: "Raleway", "Noto Sans JP", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  font-display: swap;
  color: #333;
  margin: 0;
  padding: 0;
}

`;
