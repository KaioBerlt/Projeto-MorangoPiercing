import api from "../Services/api";
import { loginUserApi, createUserApi, getUserById } from "../Services/AuthService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const useAuth = () => {

    const [userLogged, setUserLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userFull, setUserFull] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      
      if (userInfo) {
        api.defaults.headers.common[ 'Authorization' ] = `Bearer ${userInfo.token}`
        findUserById(userInfo.id);
        setUserLogged(true);
      }
      
      setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    const loginUser = async (inputValues) => {
      const response = await loginUserApi(inputValues);
      const data = await response.data;
      localStorage.setItem('userInfo', JSON.stringify(data))
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
      navigate('/')
      console.log(data)
      setUserLogged(true);
    }

  
      const createUser = async (inputValues) => {
        const response = await createUserApi(inputValues);
        const data = await response.data;
        localStorage.setItem('userInfo', JSON.stringify(data))
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
        console.log(data)
        alert('Cadastro Realizado Com Sucesso!')
        navigate('/login')
        
      }

    const logoutUser = () => {
      setUserLogged (false);
      localStorage.clear();
      navigate ('/login');
    }

    const findUserById = async (idUser) => {
      const response = await getUserById(idUser);
      setUserFull(response.data)
      console.log(userFull)
    }

    return { userLogged, loading, userFull, loginUser, logoutUser, createUser }

};

export default useAuth;