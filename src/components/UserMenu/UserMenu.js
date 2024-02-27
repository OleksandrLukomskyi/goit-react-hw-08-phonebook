import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>mango@mail.com</p>
      <button>Logout</button>
    </div>
  );
};
