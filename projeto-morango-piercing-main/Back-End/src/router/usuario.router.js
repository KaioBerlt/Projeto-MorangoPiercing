const express = require ("express");
const router = express.Router();
const usuarioController = require ("../controller/usuario.controller");

const authMiddleware = require ("../middleware/auth.middleware");
const { validaUsuario, validaIdParams } = require("../middleware/validacao.middleware");

//rotas GET
router.get("/findById/:id", authMiddleware, validaIdParams, usuarioController.findUserByIdController );
router.get("/findAll", authMiddleware, usuarioController.findAllUsersController);

//rotas POST
router.post("/create", validaUsuario, usuarioController.createUserController);

//rotas PUT
router.put("/update/:id", authMiddleware, validaIdParams, validaUsuario, usuarioController.updateUserController);

//rotas DELETE
router.delete("/remove/:id", authMiddleware, validaIdParams, usuarioController.removeUserController);

module.exports = router;