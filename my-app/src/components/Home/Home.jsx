import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <HomeSection>
      <HomeBox>
        <LogoImg src='img/test-logo.png' alt='로고' />
        <Link to='/Options'>
          <StartBtn>START</StartBtn>
        </Link>
      </HomeBox>
    </HomeSection>
  );
};

export default Home;

const HomeSection = styled.section`
  
`;

const HomeBox = styled.div``;

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
  background-color: whitesmoke;
  border-radius: 16px;
`;
