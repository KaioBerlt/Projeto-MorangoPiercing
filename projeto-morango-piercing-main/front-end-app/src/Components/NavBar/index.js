import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import {  RiLogoutCircleRFill } from 'react-icons/ri';


const NavBar = () => {
  const { userLogged, logoutUser, userFull } = useContext(AuthContext);
  console.log(`valor do contexto`, userLogged);
  return (
    <header className='bg-transparent z-50 w-full '>
      <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
        <div className='flex flex-grow items-center'>
        </div>
        <div>
          {userLogged ? (
            <div className='flex items-center justify-end space-x-4'>

              <img src='' alt=''/>
              <p className='text-gray-700 font-bold'>Seja Bem-Vindx, {userFull.nome}!</p>
              <Link to='/admin'>Admin</Link>
                <RiLogoutCircleRFill className='color-primary w-6 h-6 cursor-pointer' onClick={logoutUser} />
            </div>
          ) : (
          
          <div className='flex font-semibold items-center justify-end space-x-6'>
         <Link to='/login'><button>Login</button></Link>
          <Link to='/cadastro'><button className='bg-primary text-white px-6 rounded-full transition duration-700 hover:scale-105'>Cadastro</button></Link>
          </div>
       ) }
        </div>
      </nav>

    </header>
  )
}

export default NavBar