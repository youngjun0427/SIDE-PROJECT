import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  margin: 230px auto 0;
  background-image: url('img/test-logo.png');
  background-size: cover;
  width: 335px;
  height: 160px;
`;

const LogoText = styled.h1`
  color: #00355c;
  font-size: 24px;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 44px;
`;

const StartBtn = styled.button`
  width: 319px;
  height: 64px;
  color: #0094ff;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 0 8px 2px rgba(159, 159, 159, 0.25);
`;
