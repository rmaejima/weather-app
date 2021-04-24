import React, { FC, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

// import axios from "axios";
// http://api.weatherapi.com/v1/current.json?key=2fb7710ac7cb41b1a3550220212104&q=London&aqi=no

interface FormProps {
  handleCity: (e: ChangeEvent<HTMLInputElement>) => void;
  getWeather: (e: FormEvent) => void;
}

export const Form: FC<FormProps> = ({ handleCity, getWeather }) => {
  return (
    <FormStyle>
      <Input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={handleCity}
      />
      <Button type="submit" onClick={getWeather}>
        Get Weather
      </Button>
    </FormStyle>
  );
};

//---------------------------------styled component-----------------------------------
const Input = styled.input`
  /* 背景透明 */
  background-color: transparent;
  border: 0;
  border-bottom: solid 1px #f15186;
  /* containerの40%の大きさ */
  width: 40%;
  padding-bottom: 4px;
  color: #fff;
  font-weight: lighter;
  margin-bottom: 30px;
  margin-left: 20px;
  font-size: 20px;
  &:focus {
    outline: none;
    opacity: 0.5;
  }
  @media screen and (max-width: 480px) {
    margin-left: 10px;
    margin-right: 10px;
    /* margin-bottom: 15px; */
  }
`;

const Button = styled.button`
  width: 40%;
  border: 0;
  padding: 8px 20px;
  margin: 0 2px;
  border-radius: 2px;
  margin-bottom: 30px;
  margin-left: 20px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0;
    padding: 4px 10px;
  }
`;

const FormStyle = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 480px) {
    align-content: center;
  }
`;
