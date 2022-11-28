import { FC } from "react";

const Title: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div // 노란 박스
        style={{
          position: "relative",
          top: "230px",
          left: "15px",
          width: "79.5%",
          height: "500px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          background: "linear-gradient(to top, #FAD057, #E9E081)",
        }}
      ></div>
      <div //갈색 테두리
        style={{
          top: "150px",
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "560px",
          width: "80%",
          border: "3px solid #956D65",
          borderRadius: "20px",
        }}
      >
        <div // 타이틀 컨텐츠
          style={{
            position: "relative",
            fontSize: "60px",
            fontWeight: "bold",
            marginLeft: "125px",
            fontFamily: "Lemonada-SemiBold",
          }}
        >
          <p>{"LET'S"}</p>
          <p>EXPLORE</p>
          <p>CORNS WORLD!!</p>
        </div>

        <div //콘즈 이미지
        >
          <img
            src={"/images/main.gif"}
            style={{
              position: "relative",
              marginRight: "70px",
              top: "30px",
              width: "400px",
              borderRadius: "50px",
              //zIndex: "1",
            }}
          />
          <div // 이미지 테두리
            style={{
              position: "absolute",
              top: "120px",
              right: "60px",
              width: "400px",
              height: "400px",
              border: "3px solid #956D65",
              borderRadius: "50px",
              zIndex: "0",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Title;
