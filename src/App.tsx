/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages';
import { Header, Navbar } from './containers'
import { useSearchParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { SessionHandler, SessionType } from './utils';
import { LangContext, LangContextType } from './context/LangContext';
import { getUserById } from './api/Client';

let userId: string = ""
let lang: string = ""

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
  const { setupLanguage, setUserDetails } = useContext(LangContext) as LangContextType

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log(currentParams);

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

    // get user details
    async function getUserDetails() {
      const res = await getUserById(userId)

      if (res) {
        const user = session.getUserDetails()
        setUserDetails(user)
      }
    }

    getUserDetails()
  }, []);

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
