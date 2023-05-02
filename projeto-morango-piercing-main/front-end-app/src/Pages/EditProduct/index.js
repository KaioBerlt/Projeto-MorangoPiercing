import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { findAllCategorias } from "../../Services/categoriaService";
import { MultiSelect } from "react-multi-select-component";
import { findProductById, updateProductById } from '../../Services/productService';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productForm, setProductForm] = useState({
    nome: "",
    descricao: "",
    precoUnitario: 0,
    imagem: "",
    codigoBarra: 0,
  });

  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);


useEffect(() => {
    getCategories();
    getProductById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProductById = async () => {
    const response = await findProductById(id)
    setProductForm(response.data);
  }

  const getCategories = async () => {
    const response = await findAllCategorias();
    const categoriesSelect = response.data.map((categoria) => {
      return {
        value: categoria._id,
        label: categoria.nome,
      };
    });
    setCategories(categoriesSelect);
  };

  const handleChangeValues = (evento) => {
    setProductForm({
      ...productForm,
      [evento.target.name]: evento.target.value
    })
    console.log(productForm);
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    console.log(productForm);
    const response = await updateProductById(id, productForm)

    if(response) {
      alert('produto editado com sucesso');
      navigate('/admin')
    }
  }

  
    return (
        <section className="my-12 max-w-screen mx-auto px-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl text-black">Cadastro de Produtos</h1>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
          <div className="flex flex-col space-y-4">
            <label htmlFor="nome" className="text-gray-500 ">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={productForm.nome}
              required
              onChange={handleChangeValues}
              className="border border-purple-950 rounded-full placeholder:text-center placeholder:text-purple-700"
            />
            <label htmlFor="descricao" className="text-gray-500 ">
              Descrição
            </label>
            <textarea
              name="descricao"
              id="descricao"
              cols="30"
              rows="2"
              value={productForm.descricao}
              className="border border-purple-950 rounded-full placeholder:text-center placeholder:text-purple-700"
              required
              onChange={handleChangeValues}
            />
            <label htmlFor="codigoBarra" className="text-gray-500 ">
              Código de Barras
            </label>
            <input
              type="text"
              id="codigoBarra"
              name="codigoBarra"
              value={productForm.codigoBarra}
              required
              onChange={handleChangeValues}
              className="border border-purple-950 rounded-full placeholder:text-center placeholder:text-purple-700"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label htmlFor="precoUnitario" className="text-gray-500 ">
              Preço
            </label>
            <input
              type="text"
              id="precoUnitario"
              name="precoUnitario"
              value={productForm.precoUnitario}
              required
              onChange={handleChangeValues}
              className="border border-purple-950 rounded-full placeholder:text-center placeholder:text-purple-700"
            />
            <label htmlFor="imagem" className="text-gray-500 ">
              Imagem
            </label>
            <input
              type="text"
              id="imagem"
              name="imagem"
              value={productForm.imagem}
              required
              onChange={handleChangeValues}
              className="border border-purple-950 rounded-full placeholder:text-center placeholder:text-purple-700"
            />
            <label htmlFor="categoria" className="text-gray-500 ">
              Categoria
            </label>
            <MultiSelect
              options={categories}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
              
            />
            <div className="mt-8">
              <button type='submit' className="bg-primary text-white px-6 rounded-full transition duration-700 hover:scale-105">
                Editar
              </button>
            </div>
          </div>
        </form>
      </section>
  )
}

export default EditProduct;
