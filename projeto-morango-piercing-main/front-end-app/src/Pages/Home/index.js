import React from "react";
import { RiRoadMapFill } from "react-icons/ri";
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <>
        <section className="home-banner w-full">
            <div className="flex flex-col items-center justify-center h-full pt-40 ">
                <h1 className="text-purple-600 text-center text 3xl md:text-4xl lg:text-5xl font-semibold border-fuchsia-100 pb-4 ">Faça um visita!</h1>
                <Link to='/endereco'><RiRoadMapFill className='color-primary w-10 h-10 cursor-pointer'/></Link>
       
            </div>
        </section>
        
        </>
    )
};

export default Home;