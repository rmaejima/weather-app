import React, { FC } from "react";
import styled from "styled-components";

//ComponentPropsを使ってもよさそう。
interface ResultsProps {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}

export const Results: FC<ResultsProps> = ({
  country,
  cityName,
  temperature,
  conditionText,
  icon,
}) => {
  return (
    <ResultStyle>
      {cityName && <City>{cityName}</City>}
      {country && <Country>{country}</Country>}
      {temperature && (
        <Temp>
          {temperature}
          <Span>℃</Span>
        </Temp>
      )}
      {conditionText && (
        <Condition>
          <Icon src={icon} alt="icon" />
          <span>{conditionText}</span>
        </Condition>
      )}
    </ResultStyle>
  );
};

//---------------------------------styled component-----------------------------------
const ResultStyle = styled.div`
  /* font-size: 30px; */
`;

const City = styled.div`
  font-size: 4rem;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
const Country = styled.div`
  font-size: 2rem;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
const Temp = styled.div`
  font-size: 6rem;
  margin: 10px 0;
  color: #f15186;
  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }
`;
const Span = styled.span`
  font-size: 3rem;
  color: #333;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
const Condition = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`;
const Icon = styled.img`
  width: 200px;
  height: 200px;
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;
