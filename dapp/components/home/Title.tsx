import { FC } from "react";

const Title: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
          height : "800px"
      }}
    >
      <div // 노란 박스
        style={{
          position: "relative",
          top: "200px",
          left: "15px",
          width: "70%",
          height: "520px",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
          background: "linear-gradient(to right, #FBD055, #E8E081)",
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
          width: "70.5%",
          border: "2px solid #BA9990",
          borderRadius: "30px",
          zIndex: "0",
        }}
      >
        <div className={"title_content"} style={{
            position: "relative",
            marginLeft: "125px",
          }}
        >
          <p id={"title_content_small"} style={{
              fontSize: "50px",

          }}>{"LET'S EXPLORE"}</p>
          <p style={{
              fontSize: "80px",
              fontWeight: "bold",
              lineHeight : "5rem" // 행간 간격
          }}>CORNS<br/>WORLD!!</p>
        </div>

        <div //콘즈 이미지
        >
          <img
            src={"/images/dapp.gif"}
            style={{
              position: "relative",
              marginRight: "70px",
              top: "30px",
              width: "400px",
              borderRadius: "50px",
              zIndex: "0",
            }}
          />
          <div // 이미지 테두리
            style={{
              position: "absolute",
              top: "120px",
              right: "60px",
              width: "400px",
              height: "400px",
              border: "2px solid #BA9990",
              borderRadius: "50px",
              zIndex: "-1",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Title;
