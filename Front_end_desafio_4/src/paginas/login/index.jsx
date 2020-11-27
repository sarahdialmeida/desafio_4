import React from "react";
import { Link } from "react-router-dom";
// entre chaves porque estou importando parte dele
import logo from "../../assets/logo.svg";
import openEye from "../../assets/icons/openEye.svg";
import closedEye from "../../assets/icons/closedEye.svg";

import "./style.css";
import { Card } from "../../components/cards";
import { Input } from "../../components/input";
import { Botao } from "../../components/botao";

function Login() {
  const [closePassword, setClosePassword] = React.useState("false");
  function handleSubmit() {
    console.log("enviado");
  }
  return (
    <div className="container">
      <Card>
        <form className="imageAndForm" onSubmit={handleSubmit}>
          <img src={logo} alt="logo da Cubos Academy" />
          <Input
            className="loginInput"
            label="Email"
            type="email"
            name="email"
          />
          <Input
            className="loginInput senha"
            label="Senha"
            type={closePassword ? "password" : "text"}
            name="senha"
          >
            <button
              className="eye"
              type="button"
              onClick={() => {
                setClosePassword(!closePassword);
              }}
            >
              <img
                alt="visualizaçao da senha"
                src={closePassword ? closedEye : openEye}
              />
            </button>
          </Input>

          <Link to="/esqueci-minha-senha"> Esqueci minha senha</Link>
          <Botao type="submit">Entrar</Botao>
        </form>
      </Card>

      <div className="cadastro">
        <p>Não tem uma conta?</p> <Link to="/cadastro"> Cadastre-se </Link>
      </div>
    </div>
  );
}

export default Login;

/* spa single page aplication */
