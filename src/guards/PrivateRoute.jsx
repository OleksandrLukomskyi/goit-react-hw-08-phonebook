import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router"
import { isAuthSelector } from "store/auth/selectorsAuth"


const PrivateRoute = ({children}) => {
  const isAuth = useSelector(isAuthSelector)
  const location = useLocation()
  return isAuth ?  children : <Navigate to='/login' state={location}/>
}

export default PrivateRoute