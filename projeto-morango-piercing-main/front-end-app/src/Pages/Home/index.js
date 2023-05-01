import React from "react";

import ServList from "../../Components/ServList";



const Home = () => {
    return (
        <>
        <section className="home-banner w-full">
            <div className="flex flex-col items-center justify-center h-full pt-40 ">
                <h1 className="text-purple-600 text-center text 3xl md:text-4xl lg:text-5xl font-semibold border-fuchsia-100 pb-4 ">Em que posso ajudar?</h1>
                
       <ServList />
            </div>
        </section>
        
        </>
    )
};

export default Home;