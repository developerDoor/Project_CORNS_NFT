import { Flex, Grid, Text } from "@chakra-ui/react";
import NftCard from "@components/myNft/NftCard";
import { useWallet, useWeb3 } from "hooks";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const MyNft: NextPage = () => {
  const [nftTokenIds, setNftTokenIds] = useState<string[]>();

  const { account, getAccount } = useWallet();
  const { mintContract } = useWeb3();

  const getMyNft = async () => {
    try {
      const response = await mintContract.methods.getNFTs(account).call();

      setNftTokenIds(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!account || !mintContract) return;

    getMyNft();
  }, [account, mintContract]);

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <Flex
      style={{
        backgroundColor: "#F4ECD7",
      }}
      minH="100vh"
      alignItems="center"
      pt={24}
      flexDir="column"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "160px",
          height: "46px",
          border: "2px solid #BA9990",
          textAlign: "center",
          borderRadius: "15px",
          marginBottom: "15px",
        }}
      >
        <div
          className={"contents_title"}
          style={{ fontSize: "30px", fontWeight: "bold" }}
        >
          My NFT
        </div>
      </div>
      <Grid templateColumns="repeat(4, 1fr)" gap={8}>
        {/*{nftTokenIds?.map((v, i) => {*/}
        {/*  return <NftCard key={i} tokenId={v} />;*/}
        {/*})}*/}

        {/* // 이거 나 */}
        {nftTokenIds ? (
          nftTokenIds.map((v, i) => {
            return <NftCard key={i} tokenId={v} />;
          })
        ) : (
          <div
            className="loading-container"
            style={{
              position: "absolute",
            }}
          >
            <div className="loading"></div>
            <div id="loading-text">loading</div>
          </div>
        )}

        {/* // 이거 성규형 */}
        {/*[1,2,3,4,5,6,7,8].map((i)=> {*/}
        {/*return <NftCard key={i} tokenId={`${i}`}/>})}*/}
        {/*{nftTokenIds?.map((v, i) => {*/}
        {/*  return <NftCard key={i} tokenId={v} />;*/}
        {/*})}*/}
      </Grid>
      <div
        style={{
          height: "100px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "160px",
          height: "46px",
          border: "2px solid #BA9990",
          textAlign: "center",
          borderRadius: "15px",
          marginBottom: "15px",
        }}
      >
        <div
          className={"contents_title"}
          style={{ fontSize: "30px", fontWeight: "bold" }}
        >
          Buy NFT
        </div>
      </div>
      <div
        className={"contents_title"}
        style={{
          fontSize: "100px",
          fontWeight: "bold",
          height: "250px",
          marginTop: "50px",
        }}
      >
        To be continued..
      </div>
    </Flex>
  );
};

export default MyNft;
