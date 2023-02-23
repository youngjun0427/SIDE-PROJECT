import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Questions from '../../common/api/questionsApi.json';
import styled from 'styled-components';
import { blink } from '../../styles/Animation';

const TOTAL_SLIDES = 12;

const Options = () => {
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideIndex = currentSlide - 1;
  const slideRef = useRef(null);
  const Navigate = useNavigate();
  const [mbti, setMbti] = useState([]);

  const handleSelectSlide = (answer) => {
    setMbti((prev) => [...prev, Questions[slideIndex].answers[answer].type]);
    setCurrentSlide((prev) => prev + 1);
  };

  const slideFirst = () => handleSelectSlide(0);
  const slideSecond = () => handleSelectSlide(1);

  const mbtiChecker = useCallback(() => {
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
  }, [mbti, Navigate]);

  useEffect(() => {
    currentSlide > TOTAL_SLIDES && mbtiChecker();
  }, [currentSlide, mbtiChecker]);

  return (
    <>
      <OptionsSection id='root'>
        {!loading && (
          <>
            <OptionsSlider ref={slideRef} slideIndex={slideIndex}>
              {Questions.map((item) => {
                return (
                  <OptionsContent key={item.id}>
                    <LogoBox>
                      <img src='img/test-logo.png' alt='로고이미지' />
                      <h1>나와 닮은 해양생물 알아보기!</h1>
                    </LogoBox>
                    <ProgressBox>
                      <ProgressBar>
                        <Progressgauge value={currentSlide} />
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
            <FishBox>
              <FishImg delay={0} src='img/loading-fish.png' alt='물고기 이미지' />
              <FishImg delay={0.15} src='img/loading-fish.png' alt='물고기 이미지' />
              <FishImg delay={0.3} src='img/loading-fish.png' alt='물고기 이미지' />
              <FishImg delay={0.45} src='img/loading-fish.png' alt='물고기 이미지' />
              <FishImg delay={0.6} src='img/loading-fish.png' alt='물고기 이미지' />
            </FishBox>
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
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-size: cover;
`;

const OptionsSlider = styled.div`
  display: flex;
  width: 1200vw;
  margin: 0 auto;
  /* transition: transform 0.3s ease-in-out; */
  transform: ${({ slideIndex }) => `translateX(-${390 * slideIndex}px)`};
  @media (max-width: 390px) {
    transform: ${({ slideIndex }) => `translateX(-${100 * slideIndex}vw)`};
  }
`;

const OptionsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 390px;
  background-image: url('/img/options-background.png');
  background-size: cover;
`;

const LogoBox = styled.div`
  flex-direction: column;
  margin-bottom: 6.5rem;

  & img {
    width: 24rem;
    height: 11.5rem;
    margin: 5.6rem 7.5rem 1.5rem;
  }

  & h1 {
    color: var(--main-color);
    font-weight: 400;
    font-size: var(--fs-lg);
  }
`;

const ProgressBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 3.2rem;
`;

const ProgressBar = styled.div`
  width: 32rem;
  height: 1.1rem;
  border-radius: 1rem;
  margin-right: 0.8rem;
  background: var(--progress-back-color);
`;

const Progressgauge = styled.div`
  width: ${({ value }) => `${(100 / 12) * value}%`};
  height: 100%;
  border-radius: 1rem;
  background-color: var(--sub-color);
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 64px;
  position: relative;

  & button {
    display: inline-block;
    text-align: left;
    padding-left: 44px;
    background-color: var(--button-back-color);
    width: 35.8rem;
    height: 6rem;
    box-shadow: 0 3px 5px rgba(164, 166, 171, 0.25);
    border-radius: 1.6rem;
    align-items: center;
    color: var(--button-share-color);
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.8rem;
  }

  & button::before {
    content: '';
    background-image: url('img/options-text-bullet.png');
    background-size: cover;
    position: absolute;
    left: 32px;
    width: 2rem;
    height: 2rem;
  }

  & button:hover {
    background-color: var(--sub-color);
    color: var(--bg-color);
  }
`;

const TotalSlides = styled.div`
  width: 3rem;
  color: var(--sub-color);
  font-weight: 700;
  font-size: var(--fs-xs);
  line-height: 1.9rem;
`;

const Question = styled.div`
  color: var(--main-color);
  font-weight: 400;
  font-size: var(--fs-xl);
`;

const LoadingBox = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    margin-top: 4.5rem;
    font-size: var(--fs-lg);
    color: var(--main-color);
    font-weight: 400;
  }
`;

const CoralImg = styled.img`
  margin-top: 23rem;
  width: 10.4rem;
  height: 8.6rem;
  align-items: center;
  justify-content: center;
`;

const FishBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 4.5rem;
`;

const FishImg = styled.img`
  width: 3rem;
  height: 2.5rem;
  animation: ${blink} 1s linear infinite;
  animation-delay: ${(props) => (props.delay ? `${props.delay}s` : 0)};
`;
