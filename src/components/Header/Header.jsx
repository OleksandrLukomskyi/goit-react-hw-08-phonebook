
import { NavLink } from 'react-router-dom';

export const Header = () => {

 
  

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink  to="/">
            
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li>
         
            <NavLink to="/register">Register</NavLink>
          </li>

          <button>
            <NavLink to="/login">Login</NavLink>
          </button>
        </ul>
      </nav>
    </header>
  );
};
