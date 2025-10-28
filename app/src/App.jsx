import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./componentes/header/Header";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Footer from "./componentes/footer/Footer";
import HomePsicologo from "./pages/homePsicologo/HomePsicologo";

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
            <Route path="/home-psicologo" element={<HomePsicologo />} />
          </Routes>
        </main>
      </div>
        <Footer />  
    </Router>
  );
}

export default App;