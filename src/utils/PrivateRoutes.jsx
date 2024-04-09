import { Navigate, Outlet } from 'react-router-dom'
import { useFirebase } from '../context/firebase'

const PrivateRoutes = () => {
  const {isLoggedIn} = useFirebase();
  
return (
    isLoggedIn ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default  PrivateRoutes;