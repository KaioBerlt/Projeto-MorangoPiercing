import Header from '../../Components/Header';

const NotFound = () => {
    return (
        <section>
            <Header />
        <div className='justify-center'>
           <h1 className="text-purple-600 text-center text 3xl md:text-4xl lg:text-5xl font-semibold py-10">Ops... Algo deu errado</h1>
           <h2 className='text-center text-purple-600 py-20'>404 - Not Found</h2>
        </div>
        </section>
    )
};

export default NotFound;