
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import './CriarConta.css'; 

function CriarConta() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nome:', nome, 'Email:', email, 'Senha:', senha);
    
    // No futuro, aqui dados do usuário

   
    navigate('/dashboard');
  };

  return (
    <div class="criar-conta-container">
      <div class="criar-conta-card">
        <div class="coluna-esquerda">
          <h2></h2>
          <h3>Bem-vindo de volta!</h3>
          <p class="subtexto-esquerda">Acesse sua conta agora mesmo.</p>
          <Link to="/login" class="btn-entrar-link">Entrar</Link>
        </div>
        <div class="coluna-direita">
          <h1>Crie sua conta</h1>
          <p>Preencha seus dados</p>
          <form onSubmit={handleSubmit}>
            <div class="input-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div class="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div class="input-group">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            <button type="submit" class="btn-cadastrar">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CriarConta;
