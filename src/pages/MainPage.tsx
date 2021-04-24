import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import axios from "axios";
import { Title } from "../components/Title";
import { Form } from "../components/Form";
import { Results } from "../components/Results";
import { Loading } from "../components/Loading";
// import "./App.css";

interface ResultInf {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}

export const MainPage: FC = () => {
  const [city, setCity] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  //ちゃんとすべてのオブジェクトに初期値を与えないとエラーが出るため注意
  const [results, setResults] = useState<ResultInf>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });
  //changeEventを受け取ってセットする関数
  const handleCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  //APIに情報を送る関数
  const getWeather = async (e: FormEvent) => {
    try {
      e.preventDefault(); //リロードを無効化する
      //読み込みはじめ
      setLoading(true);
      // awaitを使うと見やすくなるので積極的に使っていく。
      const res = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=2fb7710ac7cb41b1a3550220212104&q=${city}&aqi=no`
      );
      setResults({
        country: res.data.location.country,
        cityName: res.data.location.name,
        temperature: res.data.current.temp_c,
        conditionText: res.data.current.condition.text,
        icon: res.data.current.condition.icon,
      });
      //上のコードと等価
      // axios
      //   .get(
      //     `http://api.weatherapi.com/v1/current.json?key=2fb7710ac7cb41b1a3550220212104&q=${city}&aqi=no`
      //   )
      //   .then((res) => {
      //     //オブジェクトの型の指定方法がわからなかったので、とりあえずひとつでやってみる。
      //     setResults({
      //       country: res.data.location.country,
      //       cityName: res.data.location.name,
      //       temperature: res.data.current.temp_c,
      //       conditionText: res.data.current.condition.text,
      //       icon: res.data.current.condition.icon,
      //     });
      //   });

      //読み込みが終わり
      setLoading(false);
    } catch (e) {
      setLoading(false);
      resetResults();
      // alert("エラーが発生しました。入力が正しいか確認してください 。");
    }
  };

  //resultを初期化する関数
  const resetResults = () => {
    setResults({
      country: "",
      cityName: "",
      temperature: "",
      conditionText: "",
      icon: "",
    });
  };

  return (
    <div className="App">
      <Wrapper>
        <Container>
          <Title />
          <Form handleCity={handleCity} getWeather={getWeather} />
          {loading ? (
            <Loading />
          ) : (
            <Results
              country={results.country}
              cityName={results.cityName}
              temperature={results.temperature}
              conditionText={results.conditionText}
              icon={results.icon}
            />
          )}
        </Container>
      </Wrapper>
    </div>
  );
};

//---------------------------------styled component-----------------------------------

const Wrapper = styled.div`
  /* margin: 0;
    padding: 0; */
  width: 100vw;
  height: 100vh;
  /* 背景画像が読み込まれる前に表示される背景カラー */
  background-color: aqua;
  display: flex;
  //子要素を横軸の真ん中に配置する。
  justify-content: center;
  //縦軸真ん中
  align-items: center;

  background-image: url("./assets/background-image.jpg");
  background-position: center center;
  /* 画像をタイル状に繰り返し表示しない */
  background-repeat: no-repeat;
  /* コンテンツの高さが画像の高さより大きいとき、動かないように固定 */
  background-attachment: fixed;
  /* 表示するコンテナの大きさに基づいて、背景画像を調整 */
  background-size: cover;
`;

const Container = styled.div`
  width: 50vw;
  /* height: 50vh; */
  /* ここで宣言するのはよくないかもしれない */
  text-align: center;
  /* 角を丸くする */
  border-radius: 15px;
  /* backdrop-filter: blur(20px); */
  background-color: #9090ff;
  /* box-shadow: 4px 4px 13px 5px rgba(0, 0, 0, 0.25); */
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.22);
  transition: 0.5s;
  /* ホバー */
  &:hover {
    /* box-shadow: 4px 4px 13px 5px rgba(0, 0, 0, 0.25); */
    box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
  @media only screen and (max-width: 700px) {
    /* 画面サイズが700以下は読み込む */
    width: 80vw;
  }
`;
