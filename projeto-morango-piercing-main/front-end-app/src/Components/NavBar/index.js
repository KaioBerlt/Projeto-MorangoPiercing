import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { RiHomeHeartFill, RiInstagramFill, RiLogoutBoxRFill, RiWhatsappFill } from 'react-icons/ri'

const NavBar = () => {
  const { userLogged, logoutUser } = useContext(AuthContext);
  console.log(`valor do contexto`, userLogged);
  return (
    <header className='bg-transparent z-50 w-full '>
      <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
        <div className='flex flex-grow items-center'>
          <Link to='/'><RiHomeHeartFill className='color-primary w-6 h-6 cursor-pointer'/></Link>
          <h1 className='text-center text-3xl font-semibold text-gray-700'>Home</h1>
        </div>
        <div>
          {userLogged ? (
            <div className='flex items-center justify-end space-x-4'>
              <div className='relative flex cursor-pointer space-x-4'>
                <RiWhatsappFill className='color-primary w-6 h-6 cursor-pointer' />
                  <RiInstagramFill className='color-primary w-6 h-6 cursor-pointer' />
              </div>
              <img src='' alt=''/>
              <p className='text-gray-700'>Seja Bem-Vindx!</p>
                <RiLogoutBoxRFill className='color-primary w-6 h-6 cursor-pointer' onClick={logoutUser} />
            </div>
          ) : (
          
          <div className='flex items-center justify-end space-x-6'>
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