import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./componentes/header/Header";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import { useState } from "react";


function App() {
const [isOpen, setIsOpen] = useState(false);
const handleClickMenu = ()=> setIsOpen(!isOpen);
const closeMenu = ()=> setIsOpen(false);

  return (
    <Router>
      <div className="app-container">
        <Header alterMenu={handleClickMenu} />
        <main className="">
          <Routes>
            <Route path="/" element={<Home closeSideMenu={closeMenu} openMenu={isOpen} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro/>} />
            
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
