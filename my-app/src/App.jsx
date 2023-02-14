import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

import Home from './components/Home/Home';
import Options from './components/Options/Options';
import Result from './components/Result/Result';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <FrameMain>
          <ScreenContainer>
            <ScreenPage>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/options" element={<Options />} />
                <Route path="/result/:mbtiName" element={<Result />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </ScreenPage>
          </ScreenContainer>
        </FrameMain>
      </BrowserRouter>
    </>
  );
}

export default App;

const FrameMain = styled.main`
  position: relative;
  max-width: 390px;
  margin: 0 auto;
  /* background-color: var(--main-bg-color); */
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 8px;
  overflow: hidden;
  word-break: break-all;
`;

const ScreenContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const ScreenPage = styled.div`
  position: relative;
  flex: 1 1 0%;
  overflow-y: auto;
`;
