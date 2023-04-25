const mongoose = require ("mongoose");
const bcrypt = require ("bcrypt"); 

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    email: { type: String, unique: true, required: true},
    senha: { type: String, required: true},
    telefone: { type: String, required: true}
 
});

UsuarioSchema.pre("save", async function(next){
    if(this.senha){
        this.senha = await bcrypt.hash(this.senha, 10);
    }
    next();
});

UsuarioSchema.pre("findOneAndUpdate", async function (next){
    if(this._update.senha){
        this._update.senha = await bcrypt.hash(this._update.senha, 10);
    }
    next();

});

const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario; 
