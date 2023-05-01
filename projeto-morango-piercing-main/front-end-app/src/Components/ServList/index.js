import React, { useState } from 'react';




const ServList = () => {
  const [categoriaTab, setCategoriaTab] = useState ("Titanio");

  return (
    <section className='my-12 max-w-screen-xl mx-auto px-3'>
        
        {/* menu categoria */}
        <div className='flex items-center justify-center space-x-6 '>
            <p className={categoriaTab === "Titanio" ? "active-menu-tab bg-primary" : "menu-tab text-white"} onClick={() => setCategoriaTab ('Titanio')}>Titânio</p>
            <p className={categoriaTab === "AcoCirurgico" ? "active-menu-tab bg-primary" : "menu-tab text-white"} onClick={() => setCategoriaTab ('AcoCirurgico')}>Aço Cirúrgico</p>
            <p className={categoriaTab === "Microdermal" ? "active-menu-tab bg-primary" : "menu-tab text-white"} onClick={() => setCategoriaTab ('Microdermal')}>Microdermal</p>
        </div>
            {/*lista de produtos*/}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'> 
      {/*  {products.map(product => (
              <Product key={product._id} product = { product }/>
            ))}
   */ }

        </div>
    </section>
  )
}

export default ServList