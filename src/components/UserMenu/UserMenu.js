import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'store/auth/authThunk';
import { selectProfile } from 'store/auth/selectorsAuth';

export const UserMenu = () => {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  return (
    <>
      <p>Welcom, {profile.email}</p>
      <button type="button" onClick={() => dispatch(logOutThunk())}>
        Logout
      </button>
    </>
  );
};
