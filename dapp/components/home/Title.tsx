import { FC } from "react";

const Title: FC = () => {
  return (
    <div
      style={{
        display: "flex",
          position:"absolute",
          width:"100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
        <div style={{
            position:"relative",
            top:"130px",
            left:"5%",
            zIndex:"1",
            width : "85%",
            height : "600px",
            background : "yellow"
        }}></div>
      <div
        style={{
            top: "100px",
            position:"absolute",

            display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "600px",
          width: "85%",
          border: "3px solid #956D65",
          borderRadius: "30px",
            zIndex:"10"
        }}
      >
        <div
          style={{
              position:"relative",
            fontSize: "60px",
            fontWeight: "bold",
            marginLeft: "125px",
              zIndex:"8"
          }}
        >
          <p>{"LET'S"}</p>
          <p>EXPLORE</p>
          <p>CORNS WORLD!!</p>
        </div>


        <div>
          <img
            src={"/images/main.gif"}
            style={{
                position:"relative",
              marginRight: "50px",
              width: "500px",
              borderRadius: "50px",
              zIndex:"10"
            }}
          />
            <div style={{
                position:"absolute",
                top : "60px",
                right : "40px",
                width: "500px",
                height : "500px",
                border:"3px solid #956D65",
                borderRadius: "50px",
                zIndex:"8"
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default Title;
