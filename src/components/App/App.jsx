
// import { useSelector } from 'react-redux';

import { Route, Routes } from 'react-router';

// import { HomePage } from 'pages/HomePage';
// import { RegistrationPage } from 'pages/RegistrationPage';
// import { LoginPage } from 'pages/LoginPage';
// import { ContactsPage } from 'pages/ContactsPage';
import { Suspense, lazy } from 'react';
import Layout from 'components/Layout/Layout';
import '../../store/store'
const HomePage = lazy(() => import('pages/HomePage'))
const LoginPage = lazy(() => import('pages/LoginPage'))
const  ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'))
const App = () => {
  // const isAuth = useSelector((state) => state.auth.acces_token) ;
  return (
  <>
  <Suspense fallback={<>loading...</>}>
    
       <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>} />
          
          
          <Route path='contacts' element={<ContactsPage/>} />
        </Route>
        <Route path='login' element={<LoginPage/>} />
        <Route path='register' element={<RegistrationPage/>} />
        <Route path='*' element={<h1>404</h1>} />
       </Routes>
  </Suspense>
  </>
  );
};

export default App;










