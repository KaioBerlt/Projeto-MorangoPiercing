import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="home-banner w-full">
        <div className='justify-center'>
           <h1 className="text-purple-600 text-center text 3xl md:text-4xl lg:text-5xl font-semibold py-10">Ops... Algo deu errado</h1>
           <h2 className='text-center text-purple-600 py-20'>404 - Not Found</h2>
           <p className='justify-center flex items-center text 3xl md:text-4xl lg:text-5xl text-center  text-white px-6   transition duration-700 hover:scale-105 '><Link to='/'>Voltar</Link></p> 
        </div>
        </section>
    )
};

export default NotFound;