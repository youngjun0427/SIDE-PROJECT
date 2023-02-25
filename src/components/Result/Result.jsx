import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Mbti from "../../common/api/mbtiApi.json";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "../../styles/Animation";

const Result = () => {
  const url = window.location.href;
  const { mbtiName } = useParams();
  const nation = Mbti[mbtiName];

  const shareToKakaotalk = () => {
    const KAKAO_SHARE_API = process.env.REACT_APP_KAKAO_KEY;
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(KAKAO_SHARE_API);
      }
      kakao.Link.sendScrap({
        requestUrl: url, // 페이지 url
        templateId: 90172, // 메시지템플릿 번호
        templateArgs: {
          TITLE: "🐳 해양생물 유형테스트", // 제목 텍스트 ${TITLE} (물고기 이모티콘 추가)
          DESC: "나와 닮은 해양생물을 알아보기!", // 설명 텍스트 ${DESC}
        },
      });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  if (!nation) {
    return <div>존재하지 않는 결과입니다.</div>;
  }
  const copyAlert = () => {
    alert("링크 복사완료!");
  };

  function handleHome() {
    window.location.href = "/";
  }

  const koempr = "https://blog.naver.com/koempr";

  return (
    <ResultContainer>
      <ResultSection key={nation.id}>
        <>
          <LogoImg
            onClick={handleHome}
            src="../img/test-logo.png"
            alt="로고 이미지"
          />
        </>
        <h1>{nation.subject}</h1>
        <ImgBox>
          <img src={nation.img} alt="img" />
        </ImgBox>
        <ResultBox>
          <span>{nation.features[0].des}</span>
          <span>{nation.features[1].des}</span>
          <ul>
            {nation.description.map((item, index) => {
              return <li key={index}>{item.des}</li>;
            })}
          </ul>
        </ResultBox>
        <DuoHeadingBox>
          <img src="/img/result-duo-bubble.png" alt="거품이미지" />
          <span>{nation.name}의 유형별 궁합</span>
        </DuoHeadingBox>
        <DuoBox>
          <DuoCont>
            <Link to={`${/result/}${nation.duo[0].subhead}`}>
              <img src={nation.duo[0].img} alt="mbti캐릭터" />
            </Link>
            <div>
              <h4>Good</h4>
              <p>{nation.duo[0].des}</p>
            </div>
          </DuoCont>
          <DuoCont>
            <Link to={`${/result/}${nation.counter[0].subhead}`}>
              <img src={nation.counter[0].img} alt="mbti캐릭터" />
            </Link>
            <div>
              <h4>Bad</h4>
              <p>{nation.counter[0].des}</p>
            </div>
          </DuoCont>
        </DuoBox>
        <DangerBox>
          <img src="/img/result-duo-bubble.png" alt="거품이미지" />
          <span>{nation.name}은(는) 지금 바다에서</span>
        </DangerBox>
        <DangerText>{nation.danger}</DangerText>
        <ButtonsBox>
          <KakaoButton onClick={shareToKakaotalk}>내 결과 공유하기</KakaoButton>
          <CopyToClipboard text={url}>
            <CopyButton onClick={copyAlert}>링크복사</CopyButton>
          </CopyToClipboard>
          <RetryButton onClick={handleHome}>다시하기</RetryButton>
          <h2>
            다른 해양생물들의 환경과 소식이 궁금하시다면 <br /> 아래 링크를 통해
            방문해 주세요!
          </h2>
          <button
            onClick={() => {
              window.open(koempr);
            }}
          >
            해양공단 블로그 방문하기
          </button>
        </ButtonsBox>
      </ResultSection>
    </ResultContainer>
  );
};
export default Result;

const ResultContainer = styled.div`
  overflow: scroll;
  height: 100vh;
`;

const ResultSection = styled.section`
  background-image: url("/img/result-background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--result-back-color);

  & h1 {
    font-weight: 400;
    font-size: var(--fs-mx);
    line-height: 120%;
    color: var(--result-name-color);
    margin-bottom: 2.4rem;
  }
`;

const LogoImg = styled.img`
  src: url("img/test-logo.png");
  width: 11rem;
  padding-top: 1.7rem;
  margin: 0 auto 7rem;
  cursor: pointer;
`;

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 4.8rem;
  & span,
  ul {
    font-weight: 400;
    font-size: var(--fs-sm);
    line-height: 141.2%;
    color: var(--text-color);
    margin: 0 3rem;
  }
  & ul {
    margin-top: 1rem;
  }

  & li {
    list-style: circle;
  }
`;

const ImgBox = styled.div`
  width: 35rem;
  height: 35rem;
  background-image: url("/img/result-img-background.png");
  background-size: cover;
  margin: 0 auto 4rem;
  display: flex;
  align-items: center;

  & img {
    width: 25rem;
    height: 25rem;
    margin: 0 auto;
    animation: ${motion} 1.2s linear 0s infinite alternate;
  }
`;

const DuoBox = styled.div`
  display: flex;
  margin: 0 auto 4.8rem;
  gap: 0.8rem;
  justify-content: center;
`;

const DuoHeadingBox = styled.div`
  display: flex;
  gap: 0.8rem;
  text-align: center;
  justify-content: center;

  & span {
    font-weight: 400;
    font-size: var(--fs-lg);
    line-height: 141.2%;
    color: var(--sub-text-color);
  }

  & img {
    width: 2.3rem;
    height: 3.2rem;
  }

  & p {
    font-weight: 400;
    font-size: var(--fs-sm);
    line-height: 141.2%;
    color: var(--text-color);
    margin: 0 3rem;
  }
`;

const DuoCont = styled.div`
  & img {
    width: 17.5rem;
    height: 17.5rem;
    box-shadow: 0 2px 9px rgba(168, 168, 168, 0.25);
    background-color: var(--bg-color);
    border-radius: 1.6rem;
    margin-bottom: 0.8rem;
    margin-top: 1.6rem;
  }

  & h4,
  p {
    font-weight: 400;
    font-size: var(--fs-md);
    line-height: 141.2%;
    color: var(--text-color);
  }
`;

const DangerBox = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;

  & img {
    width: 2.3rem;
    height: 3.2rem;
  }

  & span {
    font-weight: 400;
    font-size: var(--fs-lg);
    line-height: 141.2%;
    color: var(--sub-text-color);
  }
`;

const DangerText = styled.div`
  font-weight: 400;
  font-size: var(--fs-sm);
  line-height: 141.2%;
  color: var(--text-color);
  margin: 1.6rem 3rem 4.8rem;
`;

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding-bottom: 24.8rem;

  & :first-child {
    background-color: var(--kakao-back-color);
    color: var(--kakako-text-color);
  }

  & :nth-child(3) {
    margin-bottom: 4.8rem;
  }

  & button {
    display: flex;
    margin: 0 1.6rem;
    width: calc(100% - 32px);
    height: 4.8rem;
    margin: 0 1.6rem;
    border-radius: 10rem;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-color);
    color: var(--button-share-color);
    font-family: "Noto Sans";
    font-weight: 600;
    font-size: var(--fs-xs);
    line-height: 1.9rem;
    position: relative;

    @media screen and (min-width: 391px) {
      width: 35.8rem;
    }
  }

  & h2 {
    font-weight: 400;
    font-size: var(--fs-md);
    line-height: 141.2%;
    color: var(--sub-text-color);
  }
`;

const KakaoButton = styled.button`
  &::before {
    content: "";
    display: inline-block;
    background: url("/img/kakao-icon.png") no-repeat center center;
    background-size: cover;
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.6rem;
  }
`;

const CopyButton = styled.button`
  &::before {
    content: "";
    display: inline-block;
    background: url("/img/link-icon.png") no-repeat center center;
    background-size: cover;
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.6rem;
  }
`;

const RetryButton = styled.button`
  &::before {
    content: "";
    display: inline-block;
    background: url("/img/refresh-icon.png") no-repeat center center;
    background-size: cover;
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.6rem;
  }
`;
