/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Dashboard, NotFound, Profile } from './pages';
import { Header, Navbar, PageContainer } from './containers'
import { useSearchParams } from 'react-router-dom';
import React, { Suspense, useContext, useEffect } from 'react';
import { SessionHandler, SessionType } from './utils';
import { LangContext, LangContextType } from './context/lang.context';
import { getUserById } from './api/client';

const Dashboard = React.lazy(() => import('./pages/dashboard'))
const Profile = React.lazy(() => import('./pages/profile'))
const NotFound = React.lazy(() => import('./pages/not-found'))

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
  let session = new SessionHandler()

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log(currentParams);

    if (Object.keys(currentParams).length > 0) {
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

      session.saveSession(sessionData)
      setupLanguage(lang)
    }

    const sessionVal = session.getSession()
    setupLanguage(sessionVal.lang)

    // get user details
    async function getUserDetails() {
      const res = await getUserById(userId)

      if (res) {
        const user = session.getUserDetails()
        setUserDetails(user)
      }
    }

    if (Number(userId) > 0) {
      getUserDetails()
    } else {
      const user = session.getUserDetails()
      setUserDetails(user)
    }
  }, []);

  return (
    <Suspense fallback={<PageContainer>Loading...</PageContainer>}>
      <Routes>
        <Route path="/" element={
          <Dashboard />
        } />
        <Route path="users/:id" element={
          <Profile />
        } />
        <Route path="*" element={
          <NotFound />
        } />
      </Routes>
    </Suspense>
  )
}


export default App;
