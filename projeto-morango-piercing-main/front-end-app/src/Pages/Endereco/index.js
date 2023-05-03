import Home from "../Home";

const Endereco = () => {
  return (
    <>
      <Home />

      <div className="flex  items-center justify-center h-full  mx-80 mt-2  bg-white border outline outline-4 outline-purple-800 border-purple-900 mb-10 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative ">
        <iframe
          title="localização"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.883622173562!2d-47.88765044530086!3d-22.015769703787534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b87711345b9a87%3A0x1e4ae83030d17076!2sOld%20Lines%20Tatto!5e0!3m2!1spt-BR!2sbr!4v1682292497202!5m2!1spt-BR!2sbr"
        ></iframe>
      </div>
    </>
  );
};

export default Endereco;
