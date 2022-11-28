import {
  Box,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineWallet } from "react-icons/ai";
import { useWallet } from "hooks";
import Link from "next/link";

// PLN 프로젝트에 맞게 세계관, 로드맵, 팀 변경
const scrollLink = [
  { id: "story", name: "WORLD" },
  { id: "roadmap", name: "LOADMAP" },
  { id: "team", name: "TEAM" },
];

const Header: FC = () => {
  const { account, getAccount } = useWallet();

  const onClickWallet = () => {
    getAccount();
  };

  return (
    <Flex
      position="fixed"
      w="full"
      top={0}
      justifyContent="space-between"
      alignItems="center"
      px={8}
      py={2}
      shadow="md"
      zIndex={1}
      bgColor="#E9E081"
    >
      <Box boxSize={50}>
        {/* PLN 로고 이름 or 이미지 변경 */}
        <Link href="/">
          <img
            src={"/images/ourLogo.png"}
            style={{
              position: "absolute",
              width: "200px",
              height: "100px",
              top: "-15px",
              left: "-10px",
            }}
          />
        </Link>
      </Box>
      <Box>
        {scrollLink.map((v, i) => {
          return (
            <ScrollLink key={i} to={v.id} spy={true} smooth={true}>
              <Button
                //zIndex={99999}
                fontSize={20}
                mx={12}
                variant="ghost"
                fontWeight="bold"
                color="#956D65"
              >
                {v.name}
              </Button>
            </ScrollLink>
          );
        })}
      </Box>
      <Flex justifyContent="center" alignItems="center">
        {account ? (
          <Popover>
            <PopoverTrigger>
              <Button>
                <AiOutlineWallet size={28} />
                <Text ml={2} fontSize="xs">
                  {account.substring(0, 4)}...
                  {account.substring(account.length - 4)}
                </Text>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader fontWeight="bold">ProjectCORNS NFT</PopoverHeader>
              <PopoverBody cursor="pointer" fontSize="xl">
                <Link href="/my-nft">내 NFT 보기</Link>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Button onClick={onClickWallet}>
            <AiOutlineWallet size={28} />
            <Text ml={2} fontSize="xs">
              MetaMask
              <br /> LogIn
            </Text>
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
