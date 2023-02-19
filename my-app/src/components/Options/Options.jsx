import React, { createRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './option.module.css';
import Questions from '../../common/api/questionsApi.json';
import styled from 'styled-components';

const Options = () => {
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = createRef(null);

  const Navigate = useNavigate();
  const [mbti, setMbti] = useState([]);
  const [value, setValue] = useState(1);

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

  const TOTAL_SLIDES = 12;

  useEffect(() => {
    currentSlide > TOTAL_SLIDES && mbtiChecker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  function handleButtonClick() {
    setValue(value + 1);
  }

  return (
    <>
      <OptionsSection id='root'>
        {!loading && (
          <>
            <OptionsSlider ref={slideRef} TOTAL_SLIDES={12}>
              {Questions.map((item) => {
                return (
                  <OptionsContent key={item.id}>
                    <LogoBox>
                      <img src='img/test-logo.png' alt='로고이미지' />
                      <h1>나와 닮은 해양생물 알아보기!</h1>
                    </LogoBox>
                    <ProgressBox>
                      <ProgressBar>
                        <Progressgauge value={value} />
                      </ProgressBar>
                      <TotalSlides>
                        <span>{currentSlide}</span>
                        <span>/{TOTAL_SLIDES}</span>
                      </TotalSlides>
                    </ProgressBox>
                    <Question>{item.question}</Question>
                    <ButtonBox>
                      <button
                        onClick={() => {
                          slideFirst();
                          handleButtonClick();
                        }}
                      >
                        {item.answers[0].content}
                      </button>
                      <button
                        onClick={() => {
                          slideSecond();
                          handleButtonClick();
                        }}
                      >
                        {item.answers[1].content}
                      </button>
                    </ButtonBox>
                  </OptionsContent>
                );
              })}
            </OptionsSlider>
          </>
        )}
        {loading && (
          <div className={styles.loading__container}>
            <img className={styles.ticket} src='img/loading.png' alt='로딩 이미지' />
            <div>나와 닮은 해양생물을 찾는 중이에요</div>
          </div>
        )}
      </OptionsSection>
    </>
  );
};

export default Options;

const OptionsSection = styled.section`
  display: flex;
  align-items: center;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const OptionsSlider = styled.div`
  /* width: calc(100vw * ${(props) => props.TOTAL_SLIDES}); */
  display: flex;
  position: relative;
  width: 100%;
  transition: transform 0.5s ease;
`;

const OptionsContent = styled.div`
  float: left;
  width: 100vw;
  max-width: 390px;
`;

const LogoBox = styled.div`
  flex-direction: column;

  & img {
    width: 240px;
    height: 115px;
    margin: 56px 75px 0;
  }
`;

const ProgressBar = styled.div`
  width: 320px;
  height: 11px;
  border-radius: 10px;
  background: #ece9e9;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;

  & button {
    display: flex;
    justify-content: center;
  }
`;

const TotalSlides = styled.div``;

const Question = styled.span``;

const Progressgauge = styled.div`
  width: ${({ value }) => `${(100 / 12) * value}%`};
  height: 100%;
  border-radius: 10px;
  background-color: #2496ea;
`;

const ProgressBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
