import React, { useEffect, useState } from 'react';
import { findAllProducts, findCategoriaAco, findCategoriaMicrodermal, findCategoriaTitanio } from '../../Services/productService';
import Product from '../Product';



const ServList = () => {
  const [products, setProducts] = useState ([]);

  
  useEffect(() => {
    getAllProducts();
   
  },[])

 

  const getAllProducts = async () => {
    const response = await findAllProducts();
    setProducts(response.data); 
  }

  const getAllAco = async () => {
    const response = await findCategoriaAco();
    setProducts(response.data); 
  }

  const getAllTitanio = async () => {
    const response = await findCategoriaTitanio();
    setProducts(response.data);
  }

  const getAllMicrodermal = async () => {
    const response = await findCategoriaMicrodermal();
    setProducts(response.data);
  }

 

  return (
    <section className='mt-30  max-w-screen-xl mx-auto px-3'>
  
        {/* menu categoria */}
        <div className='flex items-center justify-center space-x-6 mt-2 '>
            <p className="active-menu-tab bg-primary cursor-pointer active:bg-pink-600"  onClick={ getAllProducts }>Todos</p>
            <p className= "active-menu-tab bg-primary cursor-pointer active:bg-pink-600" onClick={ getAllTitanio }>Titânio</p>
            <p className= "active-menu-tab bg-primary cursor-pointer active:bg-pink-600" onClick={ getAllAco }>Aço Cirúrgico</p>
            <p className="active-menu-tab bg-primary cursor-pointer active:bg-pink-600" onClick={ getAllMicrodermal }>Microdermal</p>
        </div>
            {/*lista de produtos*/}
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'> 
        {products.map(product => (
              <Product key={product._id} product = { product }/>
            ))}

        </div>
    </section>
  )
}

export default ServList;