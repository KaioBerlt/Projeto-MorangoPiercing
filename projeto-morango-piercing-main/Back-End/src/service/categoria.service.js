const Categoria = require("../model/Categoria");
const Produto = require ("../model/Produto");

const findByIdCategoriaService = (id) => {
   // return Categoria.findById(id);
   return Produto.find({ "categorias._id": id }).populate('categorias._id');
};

const findAllCategoriaService = (limit, offset) => {
    return Categoria.find().limit(limit).skip(offset);
};

const createCategoriaService = (body) => {
    return Categoria.create(body);
};

const updateCategoriaService = (id, body) => {
    return Categoria.findByIdAndUpdate(id, body, {returnDocument: "after"});
};

const deleteCategoriaService = (id) => {
    return Categoria.findByIdAndRemove(id);
};

module.exports = {
    findByIdCategoriaService,
    findAllCategoriaService,
    createCategoriaService,
    updateCategoriaService,
    deleteCategoriaService
}