const router = require("express").Router();

const produtoCrontroller = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaProduto, validaIdParams, valida_IdBody } = require ("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// Rotas Get
router.get("/find/:id", authMiddleware, validaIdParams, produtoCrontroller.findProductsByIdController);
router.get("/findAll", authMiddleware, paginacao, produtoCrontroller.findAllProductsController);

// Rotas Post
router.post("/create", authMiddleware, validaProduto, produtoCrontroller.createProductsController);
router.post("/addCategoria/:id", authMiddleware, validaIdParams,valida_IdBody, produtoCrontroller.addCategoriaProductsController);
//Rotas Put
router.put("/update/:id", authMiddleware, validaIdParams, validaProduto, produtoCrontroller.updateProductsController);

// Rota Delete
router.delete("/delete/:id", authMiddleware, validaIdParams, produtoCrontroller.deleteProductsController); 
router.delete("/removeCategoria/:id", authMiddleware, validaIdParams, produtoCrontroller.removeCategoriaProductsController);

module.exports = router;