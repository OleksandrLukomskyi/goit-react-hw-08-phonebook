import css from './RegistrationForm.module.css';
import { Link } from 'react-router-dom';

export const RegistrationForm = ({ register }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password } = e.target.elements;
    register({
      name: name.value,
      email: email.value,
      password: password.value,
    });
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Registration</button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};
