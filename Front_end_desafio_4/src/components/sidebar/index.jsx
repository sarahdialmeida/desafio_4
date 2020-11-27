import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { Botao } from "../botao";
import homeIcon from "../../assets/icons/homeIcon.svg";
import moneyIcon from "../../assets/icons/moneyIcon.svg";
import userIcon from "../../assets/icons/userIcon.svg";
import logoWhite from "../../assets/logoWhite.svg";

export function Sidebar() {
  const history = useHistory();
  return (
    <div className="sidebar">
      <div className="icons">
        <img className="logo" src={logoWhite} alt="logo da Cubos Academy" />
      </div>

      <div className="links">
        <Link className="link" to="/home">
          <img src={homeIcon} alt="home icon" /> <span> Home </span>
        </Link>
        <Link className="link" to="/cobrancas">
          <img src={moneyIcon} alt="money icon" /> <span> Cobranças </span>
        </Link>
        <Link className="link" to="/clientes">
          <img src={userIcon} alt="users icon" /> <span> Clientes </span>
        </Link>
      </div>
      <Botao onClick={() => history.push("/criar_cobranca")} className="botao">
        Criar Cobrança
      </Botao>
    </div>
  );
}
