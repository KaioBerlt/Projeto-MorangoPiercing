import api from "./api";

const findAllCategorias = () => 
    api.get('/categoria/findAll')
    .then((response) => response)
    .catch(err => err)


export { findAllCategorias }