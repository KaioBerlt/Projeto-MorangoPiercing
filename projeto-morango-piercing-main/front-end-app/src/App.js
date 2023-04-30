import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Endereco from "./Pages/Endereco";
import NotFound from "./Pages/NotFound";
import Admin from "./Pages/Admin";
import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./Routes/PrivateRoute";
import AddProducts from "./Pages/AddProducts";

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/endereco"
            element={
              <PrivateRoute>
                <Endereco />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-products"
            element={
              <PrivateRoute>
                <AddProducts />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
