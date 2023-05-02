const express = require ("express");
const cors = require("cors");
const connectToDatabase = require ("./src/database/database"); //arquivo de conexão com o banco

const usuario = require ("./src/router/usuario.router");//arquivo de rota do usuario
const auth = require ("./src/router/auth.router");//arquivo de rota de login
const produto = require ("./src/router/produto.router");//arquivo de rota de produtos
const categoria = require("./src/router/categoria.router");//arquivo de rota de categoria


const app = express();
const port = 3001;
app.use(express.json()); 
// Adicionar os cabeçalhos Access-Control-Allow-Origin
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(cors(
    {
        origin: [
            "http://localhost:3000",
            "localhost:3000",
            "localhost:3002",
        ],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    }
)); 

connectToDatabase ();//conectando com o banco


app.use("/usuario", usuario); //chamando rotas de usuario
app.use("/auth", auth); //chamando rotas de auth
app.use("/produto", produto); //chamando rotas de produto
app.use("/categoria", categoria); //chamando rotas de categoria


app.get("/", (req,res) => {
    res.send({
        message: "Bem vindo"
    });
});


app.listen(port, () =>{
    console.log(`Servidor rodando em: http://localhost:${port}`);
})