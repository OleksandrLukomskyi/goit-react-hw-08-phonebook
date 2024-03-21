
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOutThunk } from 'store/auth/authThunk';
import { selectProfile } from 'store/auth/selectorsAuth';



export const Header = () => {
  const {isLoggedIn} = useAuth();

// const profile = useSelector(selectProfile)
// console.log(profile);
// const navigate = useNavigate()
// const dispatch = useDispatch()
 
//   const handleLogOut = () => {
//    dispatch(logOutThunk())
//     navigate('/login')
    
//   }

  return (
    
    <header>
      <Navigation/>
      {isLoggedIn ? <UserMenu/> : <AuthNav/>}
      {/* <nav>
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
          <li>
             
               <NavLink to="/login">Login</NavLink>
          </li>
          {profile ? (<button onClick={handleLogOut}>Logout</button>) : (<button><NavLink to='/login'>Login</NavLink></button>)}
          {profile && <p> {profile.email}</p>}
          
        </ul>
      </nav> */}
    </header>
  );
};
