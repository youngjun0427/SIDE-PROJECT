import React, { createRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Questions from '../../common/api/questionsApi.json';
import styled from 'styled-components';
import BlinkingFishImg from './LoadingAnimation';

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
    setValue(value + 1);
  };

  const slideSecond = () => {
    setMbti(mbti + Questions[num].answers[1].type);
    setNum(num + 1);
    setCurrentSlide(currentSlide + 1);
    slideRef.current.style.transform += 'translateX(-100vw)';
    setValue(value + 1);
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
    }, 30000);
  };

  const TOTAL_SLIDES = 12;

  useEffect(() => {
    currentSlide > TOTAL_SLIDES && mbtiChecker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    <>
      <OptionsSection id='root'>
        {!loading && (
          <>
            <OptionsSlider ref={slideRef}>
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
                        }}
                      >
                        {item.answers[0].content}
                      </button>
                      <button
                        onClick={() => {
                          slideSecond();
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
          <LoadingBox>
            <CoralImg src='img/loading-coral.png' alt='산호 이미지' />
            <BlinkingFishBox>
              <BlinkingFishImg src='img/loading-fish.png' alt='물고기 이미지' delay={1000} />
            </BlinkingFishBox>
            <h2>나와 닮은 해양생물을 찾는 중이에요</h2>
          </LoadingBox>
        )}
      </OptionsSection>
    </>
  );
};

export default Options;

const OptionsSection = styled.section`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const OptionsSlider = styled.div`
  display: flex;
  width: 1200vw;
  margin: 0 auto;
  transition: transform 0.3s ease-in-out;
`;

const OptionsContent = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  /* text-align: center; */
  /* margin: 0 auto; */
  width: 100vw;
  max-width: 390px;
`;

const LogoBox = styled.div`
  flex-direction: column;

  & img {
    width: 240px;
    height: 115px;
    margin: 56px 75px 15px;

    & h1 {
      margin-left: 83px;
    }
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

const LoadingBox = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    margin-top: 3.5rem;
    font-size: var(--fs-lg);
    color: var(--main-color);
    font-weight: 400;
  }
`;

const CoralImg = styled.img`
  margin-top: 28.2rem;
  width: 10.4rem;
  height: 8.6rem;
  align-items: center;
  justify-content: center;
`;

const FishBox = styled.div`
  display: flex;
`;

const FishImg = styled.img`
  width: 2.3rem;
  height: 1.8rem;
`;

const BlinkingFishBox = styled(FishBox)`
  display: flex;

  & ${BlinkingFishImg}:not(:last-child) {
    margin-right: 1rem;
  }
`;
