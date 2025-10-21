import { Outlet, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/alunos">Alunos</Link></li>
          <li><Link to="/pais">Pais</Link></li>
          <li><Link to="/escolas">Escolas</Link></li>
          <li><Link to="/despesas">Despesas</Link></li>
          <li><Link to="/configuracoes">Configurações</Link></li>
        </ul>
      </nav>

      <hr />

      {/* O Outlet é onde as páginas serão renderizadas */}
      <Outlet />
    </>
  );
}

export default App;