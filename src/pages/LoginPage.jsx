import { LoginForm } from "components/LoginForm/LoginForm"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"


const LoginPage = () => {
   const isAuth = useSelector(state=>state.auth.access_token)
  
   const navigate = useNavigate()
useEffect(() => {
  isAuth&&navigate('/')
}, [isAuth, navigate])


 

   return (
   
       
        <LoginForm/>
      
   )
}

export default LoginPage;