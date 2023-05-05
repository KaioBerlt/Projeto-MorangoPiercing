import React from "react";
import { SiGooglemaps } from 'react-icons/si';
import { AiFillStar } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { RiHomeHeartFill } from "react-icons/ri";



const Header = () => {
    return (
        <>
        <section className="home-banner w-full">
            <div className="pt-65  flex flex-col items-center justify-center h-full  ">
                <h1 className="text-purple-600 text-center text 3xl md:text-4xl lg:text-5xl font-semibold border-fuchsia-100 pb-4 ">Em que posso ajudar?</h1>
                <div className="flex space-x-2">
                <Link to='/'><button className='bg-primary flex text-white px-6 rounded-full transition duration-700 hover:scale-105'>Home<RiHomeHeartFill className="justify mt-1" /></button></Link>
                <Link to='/endereco'><button className='bg-primary flex text-white px-6 rounded-full transition duration-700 hover:scale-105'>Endereço<SiGooglemaps className="justify mt-1" /></button></Link>
                <Link to='/produtos'><button className='bg-primary flex text-white px-6 rounded-full transition duration-700 hover:scale-105'>Produtos<AiFillStar className="justify mt-1" /></button></Link>
                </div>
            </div>
       
        </section>
        
        </>
    )
};

export default Header;