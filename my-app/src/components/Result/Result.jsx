import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Mbti from '../../common/api/mbtiApi.json';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
        requestUrl: 'http://localhost:3000/', // 페이지 url
        templateId: 90172, // 메시지템플릿 번호
        templateArgs: {
          TITLE: '🐳 해양생물 유형테스트', // 제목 텍스트 ${TITLE} (물고기 이모티콘 추가)
          DESC: '나와 닮은 해양생물을 알아보기!', // 설명 텍스트 ${DESC}
        },
      });
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  console.log(nation.features[0]);
  if (!nation) {
    return <div>존재하지 않는 결과입니다.</div>;
  }
  const copyAlert = () => {
    alert('링크 복사완료!');
  };

  return (
    <ResultSection key={nation.id}>
      <>
        <Link to='/'>
          <LogoImg src='../img/test-logo.png' alt='로고 이미지' />
        </Link>
      </>
      <h1>{nation.subject}</h1>
      <ImgBox>
        <img src={nation.img} alt='img' />
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
      <DuoBox>
        <h2>{nation.name}의 유형별 궁합</h2>
        <div>
          <Link to={`${/result/}${nation.duo[0].subhead}`}>
            <img src={nation.duo[0].img} alt='mbti캐릭터' />
          </Link>
          <div>
            <h4>Good</h4>
            <p>{nation.duo[0].subhead}</p>
            <p>{nation.duo[0].des}</p>
          </div>
        </div>
        <div>
          <Link to={`${/result/}${nation.counter[0].subhead}`}>
            <img src={nation.counter[0].img} alt='mbti캐릭터' />
          </Link>
          <div>
            <h4>Bad</h4>
            <p>{nation.counter[0].subhead}</p>
            <p>{nation.counter[0].des}</p>
          </div>
        </div>
      </DuoBox>
      <div>
        <button onClick={shareToKakaotalk}>카톡공유</button>
      </div>
      <div>
        <Link to='/'>다시하기</Link>
        <CopyToClipboard text={url}>
          <button onClick={copyAlert}>링크복사</button>
        </CopyToClipboard>
      </div>
    </ResultSection>
  );
};
export default Result;

const ResultSection = styled.section`
  background-image: url('/img/result-background.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-color: var(--result-back-color);
  overflow: hidden;

  & h1 {
    font-weight: 400;
    font-size: var(--fs-mx);
    line-height: 120%;
    color: var(--result-name-color);
    margin-bottom: 2.4rem;
  }
  /* ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background-color: transparent;
  } */
`;

const LogoImg = styled.img`
  src: url('img/test-logo.png');
  width: 11rem;
  height: 5rem;
  margin: 1.7rem auto 7rem;
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
    padding: 0.5rem;
  }
`;

const ImgBox = styled.div`
  width: 35rem;
  height: 35rem;
  background-image: url('/img/result-img-background.png');
  background-size: cover;
  margin: 0 auto 4rem;
  display: flex;
  align-items: center;

  & img {
    width: 25rem;
    height: 25rem;
    margin: 0 auto;
  }
`;

const DuoBox = styled.div`
  & h2 {
    font-weight: 400;
    font-size: var(--fs-lg);
    line-height: 141.2%;
    color: var(--sub-text-color);
  }
`;
