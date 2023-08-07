import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages';
import { Header, Navbar } from './containers'
import { useSearchParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { SessionHandler, SessionType } from './utils';
import { LangContext, LangContextType } from './context/LangContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Inner />
    </BrowserRouter>
  )
}

function Inner() {
  const [searchParams] = useSearchParams();
  const { setupLanguage } = useContext(LangContext) as LangContextType

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log(currentParams);

    let userId: string = ""
    let lang: string = ""

    for (let para in currentParams) {
      if (para === 'userId') {
        userId = currentParams[para];
      }
      else if (para === 'lang') {
        lang = currentParams[para];
      }
    }

    let sessionData: SessionType = {
      userId: userId,
      lang: lang
    }

    let session = new SessionHandler()
    session.saveSession(sessionData)
    setupLanguage(lang)
  });

  return (
    <Routes>
      <Route path="/" element={
        <Dashboard />
      } />
      <Route path="users/:id" element={
        <div>
          user one
        </div>
      } />
    </Routes>
  )
}


export default App;
