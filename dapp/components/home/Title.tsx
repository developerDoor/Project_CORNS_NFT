import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";

const Title: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ height: "100px" }}>.</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "600px",
          width: "75%",
          border: "1px solid yellow",
          borderRadius: "30px",
          background: "#FFFF83",
        }}
      >
        <div
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            marginLeft: "125px",
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
              marginRight: "50px",
              width: "500px",
              borderRadius: "50px",
            }}
          />
        </div>
      </div>
    </div>
    // <Flex
    //   minH="100vh"
    //   justifyContent="space-between"
    //   alignItems="center"
    //   flexDir="column"
    //   id="title"
    //   px="4"
    // >
    //   <Box></Box>
    //   <Box>
    //     {/* PLN 타이틀 이미지 교체 */}
    //     <Image src="images/title.gif" alt="Title" />
    //   </Box>
    //   <ScrollLink to="story" spy={true} smooth={true}>
    //     <Button
    //       variant="ghost"
    //       fontSize="4xl"
    //       mb={8}
    //       className="animate__animated animate__heartBeat animate__infinite"
    //     >
    //       ↓
    //     </Button>
    //   </ScrollLink>
    // </Flex>
  );
};

export default Title;
