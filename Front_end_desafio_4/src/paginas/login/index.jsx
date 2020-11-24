import React from "react";
import { Link } from "react-router-dom";
// entre chaves porque estou importando parte dele
import logo from "../../assets/logo.svg";
import "./style.css";
import { Card } from "../../components/cards";
import { Input } from "../../components/input";

function Login() {
  function handleSubmit() {
    console.log("enviado");
  }
  return (
    <div className="container">
      <Card>
			<form className="imageAndForm" onSubmit={handleSubmit}>
			<img src={logo} alt="logo da Cubos Academy"/>
			<Input className="loginInput" label="Email" type="email" name="email"/>
			<Input className="loginInput" label="Senha" type="password" name="senha"/>
			<Link to="/esqueci-minha-senha"> 'Esqueci minha senha'</Link>
				<button type="submit">Entrar</button>
				</form>
      </Card>
      <div classname="cadastro">
        <p>Não tem uma conta?</p>
        <Link to="/cadastro"> Cadastre-se </Link>
      </div>
    </div>
  );
}

export default Login;

/* spa single page aplication */
