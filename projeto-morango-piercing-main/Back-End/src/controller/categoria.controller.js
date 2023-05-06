const categoriaService = require("../service/categoria.service");
const produtoService = require ("../service/produto.service");

const findByIdCategoriaController = async (req, res) => {
    try{
        //res.status(200).send(await categoriaService.findByIdCategoriaService(req.params.id));
        const produtos = await categoriaService.findByIdCategoriaService(req.params.id);
        res.status(200).send(produtos); 
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const findAllCategoriaController = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.findAllCategoriaService(req.query.limit, req.query.offset));
          
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const createCategoriaController = async (req, res) => {
    try{
      const corpo = {
        ...req.body,
        userId: req.userId
    }

        res.status(201).send(await categoriaService.createCategoriaService(corpo));
          
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const updateCategoriaController = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.updateCategoriaService(req.params.id, req.body));
          
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const deleteCategoriaController = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.deleteCategoriaService(req.params.id));
          
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

module.exports = {
    findByIdCategoriaController,
    findAllCategoriaController,
    createCategoriaController,
    updateCategoriaController,
    deleteCategoriaController
}