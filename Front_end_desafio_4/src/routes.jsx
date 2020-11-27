import "./App.css";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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
import { Sidebar } from "./components/sidebar";

export function Routes() {
  if (true) {
    return (
      <Router>
        <div className="rotasSidebar">
          <Sidebar />
          <div className="paginacao">
            <Switch>
              <Route path="/criar_cobranca">
                <CriarCobranca />
              </Route>
              <Route path="/cobrancas">
                <Cobrancas />
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
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/">
                <Redirect to="/home" />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
  return (
    <Router>
      <Switch>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route path="/deslogar">
          <Deslogar />
        </Route>
        <Route path="/esqueciminhasenha">
          <EsqueciMinhaSenha />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}
