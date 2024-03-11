import { Route, Routes } from 'react-router';
import React, { Suspense, lazy, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { profileSelector } from 'store/auth/selectorsAuth';
import { getProfileThunk } from 'store/auth/authThunk';
import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';
import Loader from 'components/Loader/Loader';
const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const App = () => {
  const profile = useSelector(profileSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    !profile && dispatch(getProfileThunk());
  }, [profile, dispatch]);

  return (
    <>
      <Loader />
      {/* <Suspense fallback={<>loading...</>}> */}
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          {/* <Route path='*' element={<h1>404</h1>} /> */}
          <Route path="*" element={<Layout />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
