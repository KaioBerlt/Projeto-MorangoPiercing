import { createContext } from 'react';
import useAuth from '../hooks/useAuth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { userLogged, loading, loginUser, logoutUser, createUser } = useAuth();

    if(loading) {
      return <h1>Loading</h1>
    }
    
    

  return (
    <AuthContext.Provider value={{ userLogged, loginUser, logoutUser, createUser }}>
        { children }
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider} ;