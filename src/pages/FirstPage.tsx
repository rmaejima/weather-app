import React, { FC } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
// import styled from "styled-components";
import {styledComponents} from '../modules/styled-components';

const Wrapper = styledComponents.LayoutStyles.Wrapper;
const Container = styledComponents.LayoutStyles.Container;

export const FirstPage: FC = () => {
  return (
    <Wrapper>
      <Link to="/main">
        <Container>
          <h1>天気予報ツール</h1>
          <p>react.jsとweather-APIを用いて簡易的に作成した天気予報ツールです！</p>
        </Container>
      </Link>
    </Wrapper>
  );
};
