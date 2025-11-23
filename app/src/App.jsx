import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./componentes/header/Header";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import CadastroPassword from "./pages/cadastro/cadastroPassword";
import Footer from "./componentes/footer/Footer";
import HomePsicologo from "./pages/homePsicologo/HomePsicologo";
import HomePaciente from "./pages/homePaciente/HomePaciente"
import PsicoProvider from "./provider/PsicoProvider";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/pt-br'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} locale="pt-br">
    <Router>
      <PsicoProvider>
        <Header />
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home-psicologo" element={<HomePsicologo />} />
            <Route path="/home-paciente" element={<HomePaciente />} />
          </Routes>
        </main>
      </div>
        <Footer />  
        </PsicoProvider>
    </Router>
    </LocalizationProvider>
  );
}

export default App;