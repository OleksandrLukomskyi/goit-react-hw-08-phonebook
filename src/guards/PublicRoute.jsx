import { useAuth } from "hooks"
// import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router"
// import { selectToken } from "store/auth/selectorsAuth"


const PublicRoute = ({children, redirectTo = '/'}) => {
  //  const isAuth = useSelector(selectToken)
  const {isLoggedIn} = useAuth();
  //  const {state: prevLocation} = useLocation()
  // return ! isAuth ? children : <Navigate to={prevLocation ?? '/'} />
  return ! isLoggedIn ? children : <Navigate to={redirectTo} />
}

export default PublicRoute