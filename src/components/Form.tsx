import React, { FC, ChangeEvent, FormEvent } from "react";

// import axios from "axios";
// http://api.weatherapi.com/v1/current.json?key=2fb7710ac7cb41b1a3550220212104&q=London&aqi=no

interface FormProps {
  handleCity: (e: ChangeEvent<HTMLInputElement>) => void;
  getWeather: (e: FormEvent) => void;
}

export const Form: FC<FormProps> = ({ handleCity, getWeather }) => {
  return (
    <form>
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={handleCity}
      />
      <button type="submit" onClick={getWeather}>
        Get Weather
      </button>
    </form>
  );
};
