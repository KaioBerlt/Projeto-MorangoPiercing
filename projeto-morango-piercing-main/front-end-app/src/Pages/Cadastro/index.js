import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";


    
    

////////////////////////////////////
const Cadastro = () => {
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState({
        nome: '',
        email: '',
        senha:'',
        telefone: ''

    })

    const { createUser } = useContext(AuthContext);



    const handleChangeValues = (evento) => {
        setInputValues ({
            ...inputValues,
            [evento.target.name]: evento.target.value
        })
        console.log(inputValues)
    };

   
    const handleSubmit = async (event) => {
        event.preventDefault()
        createUser (inputValues)
        navigate('/login');
    };



    

    return (
        <section className="home-banner w-full">

        <form className="flex flex-col items-center justify-center space-y-2 space-x-2 gap-y-1 pt-48" onSubmit ={handleSubmit}>
            <div>
                <label htmlFor=""></label>
                <input className="border border-black rounded-full placeholder:text-center placeholder:text-purple-700"
                placeholder="Nome" 
                type="text" 
                name="nome"
                value={inputValues.nome}
                onChange={handleChangeValues} />
            </div>
            <div>
            <label htmlFor=""></label>
                <input className="border border-black rounded-full placeholder:text-center placeholder:text-purple-700" 
                type="email"
                name="email"
                value={inputValues.email}
                onChange={handleChangeValues}
                placeholder="E-Mail" />
            </div>
            <div>
            <label htmlFor=""></label>
                <input className="border border-black rounded-full placeholder:text-center placeholder:text-purple-700" 
                type="password"
                name="senha"
                value={inputValues.senha}
                onChange={handleChangeValues}
                placeholder="Senha" />
            </div>
            <div>
                <label htmlFor=""></label>
                <input className="border border-black rounded-full placeholder:text-center placeholder:text-purple-700" 
                type="string"
                name="telefone"
                value={inputValues.telefone}
                onChange={handleChangeValues}
                placeholder="Telefone" />
            </div>
            <button className='bg-primary text-white px-6 rounded-full transition duration-700 hover:scale-105 bottom-1 top-1' type="submit">Registrar</button>
            <p className="bg-primary text-white px-6 rounded-full transition duration-700 hover:scale-105 bottom-1 top-1"><Link to='/login'>Já Posui Cadastro?</Link></p>
        </form>
        
        </section>
    )
};

export default Cadastro;