import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

import Home from './components/Home/Home';
import Options from './components/Options/Options';
import Result from './components/Result/Result';
import NotFound from './components/NotFound';
import MainLayout from './components/styles/MainLayout';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/options' element={<Options />} />
          <Route path='/result/:mbtiName' element={<Result />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default App;
