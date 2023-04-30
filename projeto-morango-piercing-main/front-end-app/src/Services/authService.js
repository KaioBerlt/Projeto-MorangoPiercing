import api from "./api"

const loginUserApi = (userValues) =>
api.post('/auth/login', userValues)
  .then((response) => response)
  .catch((err) => console.error('Erro na chamada', err));

  
  const createUserApi = (userValues) =>
  api.post('/usuario/create', userValues)
    .then((response) => response)
    .catch((err) => console.error('Erro na chamada', err));

    const getUserById = (idUser) => 
    api.get(`/usuario/findById/${idUser}`)
    .then(response => response)
    .catch((err) => err)

    export { loginUserApi, createUserApi, getUserById }