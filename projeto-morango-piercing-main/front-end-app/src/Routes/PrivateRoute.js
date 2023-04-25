import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { userLogged } = useContext (AuthContext);

    if (!userLogged) {
        return <Navigate to='/login'/>
    }else{
        return children
    }
}

export default PrivateRoute;