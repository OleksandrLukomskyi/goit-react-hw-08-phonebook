import { useDispatch, useSelector } from 'react-redux';
import { profileSelector } from 'store/auth/selectorsAuth';

export const UserMenu = () => {
  const profile = useSelector(profileSelector);
  const dispatch = useDispatch();

  return (
    <>
      <p>mango@mail.com</p>
      <button>Logout</button>
    </>
  );
};
