import React, { createRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './option.module.css';
import Questions from '../../common/api/questionsApi.json';

const Options = () => {
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = createRef(null);
  const TOTAL_SLIDES = 12;
  const history = useNavigate();
  const [mbti, setMbti] = useState([]);

  const slideFirst = () => {
    setMbti(mbti + Questions[num].answer[0].type);
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
          <div>
            <img src="" alt="" />
            <div></div>
          </div>
        )}
      </section>
    </>
  );
};

export default Options;
