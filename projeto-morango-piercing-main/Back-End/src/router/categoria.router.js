const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");
const paginacao = require("../middleware/paginacao.middleware");

const categoriaController = require("../controller/categoria.controller");
const { validaCategoria, validaIdParams } = require("../middleware/validacao.middleware");

// Rotas Get
router.get("/find/:id", authMiddleware, validaIdParams, categoriaController.findByIdCategoriaController);
router.get("/findAll", authMiddleware, paginacao, categoriaController.findAllCategoriaController);

// Rotas Post
router.post("/create", authMiddleware, validaCategoria, categoriaController.createCategoriaController);

//Rotas Put
router.put("/update/:id", authMiddleware, validaIdParams, validaCategoria, categoriaController.updateCategoriaController);

// Rota Delete
router.delete("/delete/:id", authMiddleware, validaIdParams, categoriaController.deleteCategoriaController); 

module.exports = router;