import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

import { useDispatch } from 'react-redux';

import { signUpThunk } from 'store/auth/authThunk';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const register = body => {
    dispatch(signUpThunk(body));
  };

  return <RegistrationForm register={register} />;
};

export default RegistrationPage;
