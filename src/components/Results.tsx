import React, { FC } from "react";

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
    <div>
      {cityName && <div>{cityName}</div>}
      {country && <div>{country}</div>}
      {temperature && (
        <div>
          {temperature}
          <span>℃</span>
        </div>
      )}
      {conditionText && (
        <div>
          <img src={icon} alt="icon" />
          <span>{conditionText}</span>
        </div>
      )}
    </div>
  );
};
