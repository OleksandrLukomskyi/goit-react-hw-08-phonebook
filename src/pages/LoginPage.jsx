import { LoginForm } from 'components/LoginForm/LoginForm';

import { useDispatch } from 'react-redux';

import { logInThunk } from 'store/auth/authThunk';

const LoginPage = () => {
  const dispatch = useDispatch();

  const login = body => {
    dispatch(logInThunk(body));
  };

  return <LoginForm login={login} />;
};

export default LoginPage;
