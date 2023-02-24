import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from '../../styles/Animation';

const Home = () => {
  return (
    <HomeSection>
      <LogoImg />
      <LogoText>나와 닮은 해양생물 알아보기!</LogoText>
      <Link to='/Options'>
        <StartBtn>START!</StartBtn>
      </Link>
    </HomeSection>
  );
};

export default Home;

const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('img/home-background.png');
  width: 100vw;
  max-width: 390px;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`;

const LogoImg = styled.div`
  margin: 21rem auto 0;
  background-image: url('img/test-logo.png');
  background-size: cover;
  width: 33.5rem;
  height: 16rem;
  animation: ${motion} 0.8s linear 0s infinite alternate;
`;

const LogoText = styled.h1`
  color: var(--main-color);
  font-size: var(--fs-lg);
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 4.4rem;
`;

const StartBtn = styled.button`
  width: 35.8rem;
  height: 6rem;
  color: var(--sub-color);
  font-family: sans-serif;
  font-size: var(--fs-lg);
  font-weight: 700;
  line-height: 3.6rem;
  background-color: var(--bg-color);
  border-radius: 1.6rem;
  box-shadow: 0 0 0.8rem 0.2rem rgba(159, 159, 159, 0.25);
  &:hover,
  :active {
    background: var(--sub-color);
    color: var(--bg-color);
  }
`;
