import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <LogoImg src='img/test-logo.png' alt='로고' />
      <LogoText>나와 닮은 해양생물 알아보기!</LogoText>
      <Link to='/Options'>
        <StartBtn>START!</StartBtn>
      </Link>
    </>
  );
};

export default Home;

const LogoImg = styled.img`
  width: 335px;
  height: 160px;
  margin: 230px auto 8px;
`;

const LogoText = styled.h1`
  color: #00355c;
  font-size: 24px;
  font-weight: 400;
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
