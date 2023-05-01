const Produto = require ("../model/Produto");

const findProductsByIdService = (id) =>{
    return Produto.findById(id);
};

const findAllProductsService = (limit, offset) =>{
    return Produto.find().limit(limit).skip(offset);
};
 
const createProductsService = (body) =>{
    return Produto.create(body);
};

const updateProductsService = (id, body) =>{
    return Produto.findByIdAndUpdate(id, body, {returnDocument: "after"});
};

const deleteProductsService = (id) =>{
    return Produto.findByIdAndRemove(id);
};

const addCategoriaProductsService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                categorias: {
                    _id: categoria._id,
                    createdAt: categoria.createdAt 
                },
            },
        },
        {
            rawResult: true,
            returnDocument: "after",
        }
    );
};

const removeCategoriaProductsService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                categorias: {
                    _id: categoria._id,
                }, 
            },
        },
        {
            rawResult: true,
        }
    );
};

module.exports = {
    findProductsByIdService,
    findAllProductsService,
    createProductsService,
    updateProductsService,
    deleteProductsService,
    addCategoriaProductsService,
    removeCategoriaProductsService
}