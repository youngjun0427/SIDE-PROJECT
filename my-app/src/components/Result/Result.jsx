import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Mbti from '../../common/api/mbtiApi.json';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Result = () => {
  const url = window.location.href;
  const { mbtiName } = useParams();
  const nation = Mbti[mbtiName];

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
                <img src="img/test-logo.png" alt="로고 이미지" />
              </Link>
            </>
          </div>
          <img src={nation.img} alt="img" />
          <div>
            <h1>{nation.subject}</h1>
            <br />
          </div>
          <div>
            <h2>{nation.id}의 특징은?</h2>
          </div>
          <ul>
            {nation.description.map(item => {
              return <li key={item.des}>{item.des}</li>;
            })}
          </ul>
          <div>
            <div>
              <img src={nation.duo[0].img} alt="mbti캐릭터" Link="/" />
              <div>
                <h4>함께하면 좋아요!</h4>
                <p>찰떡궁합 그 자체 {nation.duo[0].subhead}</p>
                <p>{nation.duo[0].des}</p>
              </div>
            </div>
            <div>
              <img src={nation.counter[0].img} alt="mbti캐릭터" />
              <div>
                <h4>가능하면 피하는게 좋겠어요!</h4>
                <p>도망가세요 {nation.counter[0].subhead}</p>
                <p>{nation.counter[0].des}</p>
              </div>
            </div>
          </div>
          <div>
            <button>카톡공유</button>
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
