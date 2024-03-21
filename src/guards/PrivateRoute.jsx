import { useAuth } from "hooks"
// import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router"
// import {  selectToken } from "store/auth/selectorsAuth"


const PrivateRoute = ({children, redirectTo= '/'}) => {
  const {isLoggedIn, isRefreshing} = useAuth();
  const shouldRedirect = isLoggedIn && isRefreshing;
  // const isAuth = useSelector(selectToken)
  const location = useLocation()
  // return isAuth ?  children : <Navigate to='/login' state={location}/>
  return shouldRedirect ?  children : <Navigate to={redirectTo} state={location}/>
}


export default PrivateRoute