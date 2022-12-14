import { Box, Text, Image, Button } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface NftCardProps {
  tokenId: string;
}

export interface IMetadata {
  name: string;
  description: string;
  image: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
}

const NftCard: FC<NftCardProps> = ({ tokenId }) => {
  const [metadata, setMetadata] = useState<IMetadata>();

  const getMetadata = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_PINATA_GATEWAY}/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMetadata();
  }, []);

  return (
    <Box
      w={300}
      background="linear-gradient(to right, #FBD055, #E8E081)"
      shadow="md"
      rounded="2xl"
      p={4}
    >
      <Image
        src={metadata?.image}
        alt={metadata?.name}
        fallbackSrc="images/loading.png"
        rounded="2xl"
      />
      <Text className="MyNFTCard" mt={2} fontSize="2xl" fontWeight="bold">
        {metadata?.name}
      </Text>
      <Text className="MyNFTCard">{metadata?.description}</Text>
      <Link href={`my-nft/detail/${tokenId}`}>
        <Button
          style={{
            color: "#956d65",
          }}
          fontSize={"12px"}
          boxShadow={"5px 5px 5px #D2B849"}
          my={4}
          background="#FFF390"
        >
          Detail
        </Button>
      </Link>
    </Box>
  );
};

export default NftCard;
