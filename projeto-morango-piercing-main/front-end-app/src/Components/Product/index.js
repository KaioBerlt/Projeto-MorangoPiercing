import React from 'react';


const Product = ( { product } ) => {
  return (
    <div className=' bg-white border outline outline-4 outline-purple-800 border-purple-900 mb-10 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative'>
      <img className='w-16 mx-auto transform transition duration-300 hover:scale-105' src= {product.imagem} alt={product.nome} />
      <div className='flex flex-col items-center my-3 space-y-2'>
          <h1 className='text-gray-900 text-lg font-bold'>{product.nome} </h1>
          <p className='text-gray-500 text-sm text-center'>{product.descricao}</p>
          <h2 className='text-gray-900 text-xl font-bold'>R${product.precoUnitario}</h2>
          
      </div>
    </div>
  )
}

export default Product;