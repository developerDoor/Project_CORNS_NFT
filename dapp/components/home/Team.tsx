import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import TeamCard, { TeamCardProps } from "./TeamCard";

// PLN 팀원 정보 교체
const teamCardContents: TeamCardProps[] = [
  {
    name: "김민혜",
    position: "팀장, 기획",
    image: "images/CORNS3.png",
  },
  {
    name: "김성현",
    position: "프로그래머",
    image: "images/CORNS4.png",
  },
  {
    name: "김학건",
    position: "디자니어",
    image: "images/CORNS2.png",
  },
  {
    name: "문장혁",
    position: "프로그래머",
    image: "images/CORNS1.png",
  },
];

const Team: FC = () => {
  return (
    <Flex
      id="roadmap"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      pb={24}
      flexDir="column"
    >
      <Text mb={8} fontWeight="bold" fontSize="4xl">
        TEAM
      </Text>
      <Flex>
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
