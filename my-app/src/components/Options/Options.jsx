import React, { createRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './option.module.css';
import Questions from '../../common/api/questionsApi.json';

const Options = () => {
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = createRef(null);
  const TOTAL_SLIDES = 12;
  const Navigate = useNavigate();
  const [mbti, setMbti] = useState([]);

  const slideFirst = () => {
    setMbti(mbti + Questions[num].answers[0].type);
    setNum(num + 1);
    setCurrentSlide(currentSlide + 1);
    slideRef.current.style.transform += 'translateX(-100vw)';
  };

  const slideSecond = () => {
    setMbti(mbti + Questions[num].answers[1].type);
    setNum(num + 1);
    setCurrentSlide(currentSlide + 1);
    slideRef.current.style.transform += 'translateX(-100vw)';
  };

  const mbtiChecker = () => {
    setLoading(true);
    let map = {};
    let result = [];
    for (let i = 0; i < mbti.length; i++) {
      if (mbti[i] in map) {
        map[mbti[i]] += 1;
      } else {
        map[mbti[i]] = 1;
      }
    }
    for (let count in map) {
      if (map[count] >= 2) {
        result.push(count);
      }
    }

    setTimeout(() => {
      const examResult = result.join('');
      Navigate(`/result/${examResult}`);
    }, 3000);
  };

  useEffect(() => {
    currentSlide > TOTAL_SLIDES && mbtiChecker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    <>
      <section>
        {!loading && (
          <>
            <div className={styles.slider} ref={slideRef}>
              {Questions.map(item => {
                return (
                  <div className={styles.content} key={item.id}>
                    <div>
                      <div>
                        <span>{currentSlide}</span>
                        <span>/{TOTAL_SLIDES}</span>
                      </div>
                      <h1>{item.Question}</h1>
                    </div>
                    <article>
                      <button onClick={slideFirst}>
                        {item.answers[0].content}
                      </button>
                      <button onClick={slideSecond}>
                        {item.answers[1].content}
                      </button>
                    </article>
                  </div>
                );
              })}
            </div>
          </>
        )}
        {loading && (
          <div className={styles.loading__container}>
            <img className={styles.ticket} src="" alt="e-ticket" />
            <div>로딩페이지 입니다</div>
          </div>
        )}
      </section>
    </>
  );
};

export default Options;
