import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const useAuth = () => {

    const [userLogged, setUserLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
      const userInfo = localStorage.getItem('userInfo');
      
      if (userInfo) {
        setUserLogged(true);
      }
      
      setLoading(false)
    }, [])
    
    const api = axios.create({
      baseURL: 'http://localhost:3001'
    })

    const loginUserApi = (userValues) =>
  api.post('/auth/login', userValues)
    .then((response) => response)
    .catch((err) => console.error('Erro na chamada', err));

    const loginUser = async (inputValues) => {
      const response = await loginUserApi(inputValues);
      const data = await response.data;
      localStorage.setItem('userInfo', JSON.stringify(data))
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
      navigate('/')
      console.log(data)
      setUserLogged(true);
    }

    const createUserApi = (userValues) =>
    api.post('/usuario/create', userValues)
      .then((response) => response)
      .catch((err) => console.error('Erro na chamada', err));
  
      const createUser = async (inputValues) => {
        const response = await createUserApi(inputValues);
        const data = await response.data;
        localStorage.setItem('userInfo', JSON.stringify(data))
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
        console.log(data)
        alert('Cadastro Realizado Com Sucesso!')
        navigate('/login')
        
      }

/*
    const loginUser = async (inputValues) => {
       const response = await fetch ('http://localhost:3001/auth/login',{
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputValues)
    })
    
    try {
    const data = await response.json()
    console.log(data)
    localStorage.setItem('userInfo', JSON.stringify(data))
    navigate('/');
    setUserLogged(true);
    }catch (error) {
      console.log(error)
    }
    
    };
*/
    const logoutUser = () => {
      setUserLogged (false);
      localStorage.clear();
      navigate ('/login');
    }

    return { userLogged, loading, loginUser, logoutUser, createUser }

};

export default useAuth;