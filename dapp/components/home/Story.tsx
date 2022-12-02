import {Box, Flex, Text, Image} from "@chakra-ui/react";
import {FC, useState} from "react";

// PLN width, height 사이즈 수정
const width = 512;
const height = 512;

// PLN image - public/images 교체, contents - 세계관에 관한 내용 추가
const StoryContents = [
    {
        image: "images/story1.png",
        title: "#1. 팝콘이 될수는 없어",
        contents: "농촌봉사활동으로 드넓은 옥수수 밭에서 옥수수를 몽땅 수확하려는 대학생들.\n" +
            "평화로운 옥수수 밭은 곧 수확되어 팝콘이 될 운명을 직감한 옥수수 알갱이들로 술렁거린다.\n" +
            "'잠깐!' 막 자신들을 수확하려는 대학생에게 혼신의 힘을 내어 소리를 지르는 알갱이들.",

    },
    {
        image: "images/story2.png",
        title: "#2. 자네.. 동방이 필요하지 않나?",
        contents: "학교 내 동아리방이 부족한 대학생들에게 솔깃한 제안이 아닐 수 없다!\n" +
            "옥수수 하나에 동아리 하나, 옥수수 알갱이 하나에 동아리원 한명.",
    },
    {
        image: "images/story3.png",
        title: "#3. 너는 어디서 왔어?",
        contents: "옥수수 알갱이에 동기화되어 드넓은 옥수수밭을 탐험하는 사람들,\n" +
            "이곳에서의 우리는 다른 옥수수에 적극적으로 다가가는 모험심많은 콘키즈(CornKids)!",
    },
    {
        image: "images/story4.png",
        title: "#4. 컨퍼런스 자리 좀 줄 수 있어?",
        contents: "옥수수 알갱이로 동기화 할 수 있다는 소식을 들은 대도시 사람들. 컨퍼런스 옥수수를 만들어 사람들을 초청하면 재미있을 것 같아!\n" +
            "대학생들의 놀이터로 마냥 즐겁던 옥수수 밭은 묘한 긴장감이 맴도는데...",
    },
    {
        image: "images/story5.png",
        title: "#5. 놀기만 할 수는 없잖아",
        contents: "옥수수밭 어딘가 대도시의 콘키즈들이 입주했다는 소식을 들은 대학생이지만 취업준비생이기도 한 콘키즈. '슬슬 취업은 해야지...?' 정신을 차리고 대도시 콘키즈의 옥수수에 방문하다!\n" +
            "그 전에 우리끼리 먼저 실력을 겨루어 보자고."
    },

];

const Story: FC = () => {
    const [page, setPage] = useState<number>(0);

    const onClickPage = (_page: number) => () => {
        setPage(_page);
    };
    const onClickPrev = () => {
        if (page > 0) {
            setPage(page - 1);
        } else {
            setPage(StoryContents.length - 1);
        }
    };
    const onClickNext = () => {
        if (page < StoryContents.length - 1) {
            setPage(page + 1);
        } else {
            setPage(0);
        }
    };

    return (
        <Flex
            id="story"
            minH="100vh"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
        >
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "140px",
                height: "46px",
                border: "2px solid #BA9990",
                textAlign: "center",
                borderRadius: "15px",
                marginBottom: "15px"
            }}>
                <div className={"contents_title"} style={{fontSize: "30px", fontWeight: "bold"}}>STORY</div>
            </div>

            <Flex mb={4}>
                {StoryContents.map((_, i) => {
                    return (
                        <Box
                            key={i}
                            mx={1}
                            w={4}
                            h={4}
                            rounded="full"
                            bgColor={i === page ? "#BA9990" : "gray.100"}
                            onClick={onClickPage(i)}
                            cursor="pointer"
                        ></Box>
                    );
                })}
            </Flex>
            <Flex alignItems="center">
                <Text color={"#BA9990"} onClick={onClickPrev} mr={12} fontSize="6xl" cursor="pointer">
                    ←
                </Text>
                <Flex width={width} minH={height} overflow="hidden">
                    {StoryContents.map((v, i) => {
                        return (
                            <Box
                                key={i}
                                width={width}
                                flex="none"
                                ml={i === 0 ? `-${page}00%` : ""}
                                style={{transition: "all 0.3s ease-out"}}
                            >
                                <Image src={v.image} alt="Story"/>
                                {i === page && (
                                    <div className={"detailText"}  style={{
                                      fontSize: "18px",
                                      color: "#956d65"
                                    }} >
                                      <p style={{fontWeight:"bold"}}>{v.title}</p>
                                      <p>{v.contents}</p>
                                    </div>
                                )}
                            </Box>
                        );
                    })}
                </Flex>
                <Text color={"#BA9990"} onClick={onClickNext} ml={12} fontSize="6xl" cursor="pointer">
                    →
                </Text>
            </Flex>
            <div style={{height: "130"}}/>
        </Flex>
    );
};

export default Story;
