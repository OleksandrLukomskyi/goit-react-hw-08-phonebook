import { logIn } from "api/auth-service";
import { useDispatch } from "react-redux"
import css from './LoginForm.module.css';


export const LoginForm = () => {
   const dispatch = useDispatch()

   const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTatget;
      dispatch(
         logIn({email: form.element.email.value,
         password: form.element.password.value,
      })
      )
      form.reset()
   }

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
         Email
         <input type="email" name="email" />
      </label>
      <label className={css.label}>
         Password
         <input type="password" name="password" />
      </label>
      <button type="submit">
         Log In
      </button>

    </form>
  )
}

