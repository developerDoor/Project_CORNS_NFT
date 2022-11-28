import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useObserve } from "hooks";
import { FC } from "react";

export interface TeamCardProps {
  name: string;
  position: string;
  image: string;
}

const TeamCard: FC<TeamCardProps> = ({ name, position, image }) => {
  const { dom, isObserved } = useObserve();

  return (
    <div
        style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#AACE55",
            margin:"15px",
            padding:"2rem",
            borderRadius:"30px"

        }}
      ref={dom}
      className={isObserved ? "animate__animated animate__pulse" : ""}
    >
        <div style={{
            position:"absolute",
            top:"-8px",
            left:"-8px",
            width:"100%",
            height:"100%",
            border:"2px solid  #956D65",
            borderRadius:"30px"
        }} />

      <Image
        src={image}
        alt={name}
        style={{ width: 250, borderRadius: "30px" }}
      />
        <div style={{
            display:"flex",
            marginTop:"20px",
            flexDirection:"column",
            width:"132%",
            height:"120px",
            justifyContent : "center",
            alignItems : "center",

            background:"#F4ECD7"}}>
      <div style={{fontSize:"25px", fontWeight:"bold"}}>
        {name}
      </div>
        <div style={{fontSize:"25px", fontWeight:"bold"}}>
            {position}
        </div>
        </div>
    </div>
  );
};

export default TeamCard;
