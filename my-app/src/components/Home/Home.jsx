import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <LogoImg src='img/test-logo.png' alt='로고' />
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
  margin: 0 auto;
  margin-top: 259px;
`;

const StartBtn = styled.button`
  width: 319px;
  height: 64px;
  margin-top: 32px;
  color: #0094ff;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 0 8px 2px rgba(159, 159, 159, 0.25);
`;
