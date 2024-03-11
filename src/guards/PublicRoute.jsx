import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router"
import { isAuthSelector } from "store/auth/selectorsAuth"


const PublicRoute = ({children}) => {
   const isAuth = useSelector(isAuthSelector)
   const {state: prevLocation} = useLocation()
  return ! isAuth ? children : <Navigate to={prevLocation ?? '/'} />
}

export default PublicRoute