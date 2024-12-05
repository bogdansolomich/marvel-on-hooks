import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() =>
  import('../pages/singleComicLayout/SingleComicLayout')
);
const SingleCharacterLayout = lazy(() =>
  import('../pages/singleCharacterLayout/SingleCharacterLayout')
);
const SinglePage = lazy(() => import('../pages/SinglePage'));

const App = () => {
  return (
    <Router basename="/marvel-on-hooks">
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Suspense fallback={<Spinner />}>
              <Route path="/">
                <MainPage />
              </Route>
              <Route path="/comics">
                <ComicsPage />
              </Route>
              <Route path="/comics/:id">
                <SinglePage Component={SingleComicLayout} dataType="comic" />
              </Route>
              <Route path="/characters/:id">
                <SinglePage
                  Component={SingleCharacterLayout}
                  dataType="character"
                />
              </Route>
              <Route path="*">
                <Page404 />
              </Route>
            </Suspense>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
