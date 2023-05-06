import Header from "../../Components/Header";
import { FaFacebookSquare, FaInstagram, FaWhatsapp  } from "react-icons/fa"

const Contato = () => {
  return (
    <>
      <Header />

      <div className="flex  items-center justify-center h-full  mx-80 mt-2  bg-white border outline outline-4 outline-purple-800 border-purple-900 mb-10 p-4 rounded-lg relative ">
      <button className='bg-primary flex text-white px-8 mx-2 rounded-full transition duration-700 hover:scale-105'><FaFacebookSquare className="justify my-1 h-8 w-8" /></button>
      <button className='bg-primary flex text-white px-8 mx-2 rounded-full transition duration-700 hover:scale-105'><FaInstagram className="justify my-1 h-8 w-8" /></button>
      <button className='bg-primary flex text-white px-8 mx-2 rounded-full transition duration-700 hover:scale-105'><FaWhatsapp className="justify my-1 h-8 w-8" /></button>
      </div>
    </>
  );
};

export default Contato;