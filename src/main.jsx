import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layout Principal
import App from './App';

// Páginas
import Login from './pages/Login';
import CriarConta from './pages/CriarConta';
import Dashboard from './pages/Dashboard';
import Alunos from './pages/Alunos';
import Pais from './pages/Pais';
import Escolas from './pages/Escolas';
import Despesas from './pages/Despesas';
import Configuracoes from './pages/Configuracoes';

import './index.css';

const router = createBrowserRouter([
  // Rotas Públicas (sem menu de navegação)
  {
    path: "/",
    element: <CriarConta />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  // Rotas Privadas (com o layout do App e menu de navegação)
  {
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/alunos",
        element: <Alunos />,
      },
      {
        path: "/pais",
        element: <Pais />,
      },
      {
        path: "/escolas",
        element: <Escolas />,
      },
      {
        path: "/despesas",
        element: <Despesas />,
      },
      {
        path: "/configuracoes",
        element: <Configuracoes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);