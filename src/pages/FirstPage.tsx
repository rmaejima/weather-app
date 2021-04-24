import React, { FC } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

export const FirstPage: FC = () => {
  return (
    <p>
      <Link to="/main">始めましょう</Link>
    </p>
  );
};
