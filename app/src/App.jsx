import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./componentes/header/Header";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";



function App() {

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro/>} />
            
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
