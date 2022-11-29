import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import TeamCard, { TeamCardProps } from "./TeamCard";

// PLN 팀원 정보 교체
const teamCardContents: TeamCardProps[] = [
  {
    name: "김민혜",
    position: "TEAM LEADER / PM",
    image: "images/CORNS3.png",
  },
  {
    name: "김성현",
    position: "PROGRAMMER",
    image: "images/CORNS4.png",
  },
  {
    name: "김학건",
    position: "DESIGNER",
    image: "images/CORNS2.png",
  },
  {
    name: "문장혁",
    position: "PROGRAMMER",
    image: "images/CORNS1.png",
  },
];

const Team: FC = () => {
  return (
    <Flex
      id="team"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      pb={24}
      flexDir="column"
    >
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center", width:"140px",height:"46px",border: "2px solid #956D65", textAlign:"center", borderRadius:"15px", marginBottom:"15px"}}>
        <div className={"contents_title"} style={{ fontSize : "30px", fontWeight:"bold"}}>TEAM</div>
      </div>
      <div style={{height:"20px"}}></div>
      <Flex style={{display:"flex", flexWrap:"wrap"}}>
        {teamCardContents.map((v, i) => {
          return (
            <TeamCard
              key={i}
              name={v.name}
              position={v.position}
              image={v.image}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Team;
