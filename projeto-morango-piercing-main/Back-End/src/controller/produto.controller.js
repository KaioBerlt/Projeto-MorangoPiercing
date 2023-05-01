const produtoService = require ("../service/produto.service");

const findProductsByIdController = async (req, res) => {
    try{
        res.status(200).send(await produtoService.findProductsByIdService(req.params.id));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
      }
};

const findAllProductsController = async (req, res) => {
    try{
        res.status(200).send(await produtoService.findAllProductsService(req.query.limit, req.query.offset));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
      }
};

const createProductsController = async (req, res) => {
    try{
        const corpo = {
            ...req.body,
            userId: req.userId
        }

        res.status(201).send(await produtoService.createProductsService(corpo));

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
      }
};

const updateProductsController = async (req, res) => {
    try{
        res.status(200).send(await produtoService.updateProductsService(req.params.id, req.body));

    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const deleteProductsController = async (req, res) => {
    try{
        res.status(200).send(await produtoService.deleteProductsService(req.params.id));
        
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const addCategoriaProductsController = async (req, res) => {
    try{
        res.status(200).send(await produtoService.addCategoriaProductsService(req.params.id, req.body));

    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const removeCategoriaProductsController = async (req, res) => {
    try{
        res.status(200).send(await produtoService.removeCategoriaProductsService(req.params.id, req.body));
        
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};


module.exports = {
    findProductsByIdController,
    findAllProductsController,
    createProductsController,
    updateProductsController,
    deleteProductsController,
    addCategoriaProductsController,
    removeCategoriaProductsController
}