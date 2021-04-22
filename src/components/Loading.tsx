import React, { FC } from "react";
import styled from "styled-components";

export const Loading: FC = (num) => {
  return <LoadingAnimation></LoadingAnimation>;
};

//---------------------------------styled component-----------------------------------
const LoadingAnimation = styled.div`
  border: 4px solid #f15186;
  border-top: 4px solid #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: auto;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
