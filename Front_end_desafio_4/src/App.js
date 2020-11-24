import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./paginas/login";
import Home from "./paginas/home";
import Cadastro from "./paginas/cadastro";
import AdicionarCliente from "./paginas/AdicionarCliente";
import Clientes from "./paginas/clientes";
import Cobrancas from "./paginas/cobranças";
import CriarCobranca from "./paginas/CriarCobrança";
import Deslogar from "./paginas/deslogar";
import EditarCliente from "./paginas/EditarCliente";
import EsqueciMinhaSenha from "./paginas/EsqueciMinhaSenha";

//preciso importar com letra maiuscula

//segredinho pra ser exibido um de cada vez
//criar rotas

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cadastro">
          <Cadastro />
        </Route>

        <Route path="/deslogar">
          <Deslogar />
        </Route>

        <Route path="/criar_cobranca">
          <CriarCobranca />
        </Route>

        <Route path="/cobrancas">
          <Cobrancas />
        </Route>

        <Route path="/esqueciminhasenha">
          <EsqueciMinhaSenha />
        </Route>

        <Route path="/clientes">
          <Clientes />
        </Route>

        <Route path="/adicionarcliente">
          <AdicionarCliente />
        </Route>

        <Route path="/editarcliente">
          <EditarCliente />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
