import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./componentes/header/Header";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import CadastroPassword from "./pages/cadastro/cadastroPassword";
import Footer from "./componentes/footer/Footer";

function App() {
  return (
    <Router>
        <Header />
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </main>
      </div>
        <Footer /> 
    </Router>
  );
}

export default App;