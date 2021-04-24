import styled,{createGlobalStyle} from "styled-components";

//再利用したいスタイルをまとめたコンポーネント
export const styledComponents = {
  LayoutStyles: {
    // GlobalStyle : styled.createGlobalStyle`
    //   html {
    //     font-size: 100%;
    //   }

    //   body {
    //     font-family: "Raleway", "Noto Sans JP", sans-serif;
    //     font-weight: 400;
    //     font-size: 1.6rem;
    //     font-display: swap;
    //     color: #333;
    //     margin: 0;
    //     padding: 0;
    //   }
    // `,
    Wrapper: styled.div`
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
    `,
    Container: styled.div`
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
        box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15),
          0 0 5px rgba(0, 0, 0, 0.1);
        transform: translateY(-4px);
      }
      @media only screen and (max-width: 700px) {
        /* 画面サイズが700以下は読み込む */
        width: 80vw;
      }
    `,
  },
};
