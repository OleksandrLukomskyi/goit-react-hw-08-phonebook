import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

import { useDispatch } from 'react-redux';
import { registerThunk } from 'store/auth/authThunk';



const RegistrationPage = () => {
  const dispatch = useDispatch();

  const register = body => {
    dispatch(registerThunk(body));
  };

  return <RegistrationForm register={register} />;
};

export default RegistrationPage;
