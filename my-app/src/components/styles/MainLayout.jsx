import React from 'react';
import styled from 'styled-components';

const MainLayout = ({ children }) => {
  return (
    <MainContainer>
      <ScreenContainer>{children}</ScreenContainer>
    </MainContainer>
  );
};

export default MainLayout;

const MainContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  width: 390px;
  height: 100%;
  min-height: 100vh;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 8px;
`;

const ScreenContainer = styled.div`
  /* display: flex; */
  min-height: 100%;
  /* flex-direction: column; */
`;
