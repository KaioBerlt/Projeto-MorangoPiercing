import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';




const Login = () => {
    const [inputValues, setInputValues] = useState({
        email: '',
        senha:''
    })

    const { loginUser } = useContext(AuthContext);



    const handleChangeValues = (evento) => {
        setInputValues ({
            ...inputValues,
            [evento.target.name]: evento.target.value
        })
        console.log(inputValues)
    };

   
    const handleSubmit = async (event) => {
        event.preventDefault()
        loginUser (inputValues)
  
    };
    
    return(

        <section className="home-banner w-full">
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center space-y-2 space-x-2 gap-y-1 pt-48 ">
        
        <div>
            <label htmlFor=""></label>
                <input className="border border-purple-950 rounded-full placeholder:text-center placeholder:text-purple-700" 
                type="email"
                name="email"
                value={inputValues.email}
                onChange={handleChangeValues} 
                placeholder='E-Mail'
                 />
            </div>
            <div>
            <label htmlFor=""></label>
                <input className="border border-purple-950 rounded-full mr-2 placeholder:text-center placeholder:text-purple-700" 
                type="password"
                name="senha" 
                value={inputValues.senha}
                onChange={handleChangeValues}
                placeholder='Senha'/>
            </div>
            <button type="submit" className='bg-primary text-white px-6 rounded-full transition duration-700 hover:scale-105'>Login</button>
            <p className='bg-primary text-white px-6 rounded-full transition duration-700 hover:scale-105'><Link to='/cadastro'>Cadastre-se Aqui!</Link></p>
        </form>
        
        </section>
        
    )
};

export default Login;