import { useSelector } from "react-redux"
import { selectIsLoggedIn, selectUser } from "store/auth/selectorsAuth"


export const useAuth = () => {
   const isLoggedIn = useSelector(selectIsLoggedIn);
   const user = useSelector(selectUser);
  return {
    isLoggedIn,
    user,
  }
}

