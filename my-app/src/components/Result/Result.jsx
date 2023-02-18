import React, { useEffect } from 'react';
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

  if (!nation) {
    return <div>존재하지 않는 결과입니다.</div>;
  }

  const copyAlert = () => {
    alert('링크 복사완료!');
  };

  return (
    <>
      <div key={nation.id}>
        <div>
          <div>
            <>
              <Link to="/">
                <img src="../img/test-logo.png" alt="로고 이미지" />
              </Link>
            </>
          </div>
          <h1>{nation.subject}</h1>
          <div>
            <img src={nation.img} alt="img" />
            <br />
          </div>
          {/* <div>
            <h2>{nation.id}의 특징은?</h2>
          </div> */}
          <ul>
            {nation.description.map(item => {
              return <li key={item.des}>{item.des}</li>;
            })}
          </ul>
          <div>
            <h2>{nation.name}와 유형별 궁합</h2>
            <div>
              <Link to={`${/result/}${nation.duo[0].subhead}`}>
                <img src={nation.duo[0].img} alt="mbti캐릭터" />
              </Link>
              <div>
                <h4>Good</h4>
                <p>{nation.duo[0].subhead}</p>
                <p>{nation.duo[0].des}</p>
              </div>
            </div>
            <div>
              <Link to={`${/result/}${nation.counter[0].subhead}`}>
                <img src={nation.counter[0].img} alt="mbti캐릭터" />
              </Link>
              <div>
                <h4>Bad</h4>
                <p>{nation.counter[0].subhead}</p>
                <p>{nation.counter[0].des}</p>
              </div>
            </div>
          </div>
          <div>
            <button onClick={shareToKakaotalk}>카톡공유</button>
          </div>
          <div>
            <Link to="/">다시하기</Link>
            <CopyToClipboard text={url}>
              <button onClick={copyAlert}>링크복사</button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </>
  );
};
export default Result;
