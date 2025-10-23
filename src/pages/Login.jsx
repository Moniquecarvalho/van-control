
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './CriarConta.css'; // Reutilizando o mesmo estilo

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailCorreto = 'teste@email.com';
    const senhaCorreta = '123456';

    if (email === emailCorreto && password === senhaCorreta) {
      navigate('/dashboard'); // Redireciona em caso de sucesso
    } else {
      alert('E-mail ou senha incorretos!');
    }
  };

  return (
    <div className="criar-conta-container">
      <div className="criar-conta-card">
        <div className="coluna-esquerda">
          <h2>Olá, Amigo!</h2>
          <h3>Ainda não tem uma conta?</h3>
          <p className="subtexto-esquerda">Junte-se a nós e comece sua jornada.</p>
          <Link to="/criar-conta" className="btn-entrar-link">Cadastre-se</Link>
        </div>
        <div className="coluna-direita">
          <h1>Acesse sua Conta</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-cadastrar">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
