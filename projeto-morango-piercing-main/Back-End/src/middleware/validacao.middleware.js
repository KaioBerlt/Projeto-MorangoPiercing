const ObjectId = require("mongoose").Types.ObjectId;

//teste um erro por vez
const validaUsuario = (req, res, next) => {
    if(!req.body.nome){
        return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido`});
    }

    if(!req.body.email){
        return res.status(400).send({ message: `O campo 'email' precisa ser preenchido`});
    }

    if(!req.body.senha){
        return res.status(400).send({ message: `O campo 'senha' precisa ser preenchido`});
    }

    if(!req.body.telefone){
        return res.status(400).send({ message: `O campo 'imagem' precisa ser preenchido`});
    }



    return next();
};



const validaIdParams = (req, res, next) => {
    if(ObjectId.isValid(req.params.id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID nao corresponde aos padroes`});

    }
};

const valida_IdBody = (req, res, next) => {
    if(ObjectId.isValid(req.body._id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID nao corresponde aos padroes`});

    }
};

const validaLogin = (req, res, next) => {
    let erros = [];
    
    if(!req.body.email){
        erros.push("email");
    }

    if(!req.body.senha){
        erros.push("senha");
    }


    if(erros.length == 0) {
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos`});     
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido`});
        }
       
    }
};



module.exports = {
    validaUsuario,
    validaIdParams, 
    valida_IdBody,
    validaLogin
};