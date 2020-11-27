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
import { Routes } from "./routes.jsx";

//preciso importar com letra maiuscula

//segredinho pra ser exibido um de cada vez
//criar rotas

function App() {
  return <Routes />;
}

export default App;
