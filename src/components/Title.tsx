import React, { FC } from "react";
import styled from "styled-components";

export const Title: FC = () => {
  return <TitleStyle>World Weather</TitleStyle>;
};

//---------------------------------styled component-----------------------------------
const TitleStyle = styled.div`
  font-weight: 800;
  font-size: 50px;
  margin: 20px 0 20px;
`;
