import { Route, Routes } from 'react-router';
import React, { Suspense, lazy, useEffect } from 'react';
import Layout from 'components/Layout/Layout';

import { useDispatch, useSelector } from 'react-redux';


import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';
import Loader from 'components/Loader/Loader';
import { refreshProfileThunk } from 'store/auth/authThunk';
// import { selectProfile } from 'store/auth/selectorsAuth';
import { useAuth } from 'hooks';
const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));

const App = () => {

  // const profile = useSelector(selectProfile);
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth()

  // useEffect(() => {
  //   !profile && dispatch(refreshProfileThunk());
  // }, [profile, dispatch]);

  useEffect(() => {
   dispatch(refreshProfileThunk());
  }, [dispatch]);


 
  //  isRefreshing ? (<Loader />) :
    return (<Suspense fallback={null}>
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route
              path="contact"
              element={
                <PrivateRoute redirectTo='/login'>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="login"
            element={
              <PublicRoute redirectTo='/contacts'>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo='/contacts'>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          {/* <Route path='*' element={<h1>404</h1>} /> */}
          {/* <Route path="*" element={<Layout />} /> */}
        </Routes>
      </Suspense>);

  

};

export default App;
