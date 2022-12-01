const fs = require("fs");
const path = require("path");

function main() {
    // NFT 이미지 갯수에 맞게 for문 설정
    for (let i = 1; i < 51; i++) {

        // 저장 위치 및 MetaData 파일명 설정
        // {프로젝트 위치}/testNFT/metadatas/my_cat_metadata_{i}.json
        const metadatasDir = path.join(__dirname, "metadatas", `${i}.json`);

        // IPFS 이미지 폴더 링크
        //const ipfsPash = 'ipfs://QmazYJJ4cipeuayNK11aeKFzeux6VYFPckUnxBRA8EE4t2';

        // ERC721 MetaData 규칙에 맞게 json 생성
        const metadata_json = {
            name: `CORNS #${i}`,
            description: `NFT Project CORNS #${i}`,
            image: `https://gateway.pinata.cloud/ipfs/QmazYJJ4cipeuayNK11aeKFzeux6VYFPckUnxBRA8EE4t2/${i}.png`
        }
        // 각 NFT에 옵션 추가 (선택사항)
        metadata_json['attributes'] = [
            {
                "trait_type": "Hair",
                "value": "1"
            },
            {
                "trait_type": "Accessoires",
                "value": ""
            },
            {
                "trait_type": "Tops",
                "value": "1"
            },
            {
                "trait_type": "Items",
                "value": "1"
            },
            {
                "trait_type": "Background",
                "value": "1"
            },
        ];

        // MetaData 파일 생성
        fs.writeFileSync(metadatasDir, JSON.stringify(metadata_json));

    }
}

main();