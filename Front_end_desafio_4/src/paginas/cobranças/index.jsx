import React from "react";
import "./style.css";
import { CardSaldo } from "../../components/cardSaldo";
import profile from "../../assets/icons/profile.svg";

function Cobrancas() {
  return (
    <div className="cobrancas">
      <header>
        <CardSaldo saldo={100} />
        <span>
          <img className="loginProfile" alt="profile" src={profile} />
        </span>
      </header>
      <main className="principalCobrancas">
        <div className="headertwo">
          <h3>Cliente</h3>
          <h3>Descrição</h3>
          <h3>Valor</h3>
          <h3>Status</h3>
          <h3>Vencimento</h3>
          <h3>Boleto</h3>
        </div>
        <div className="cardCobranca"></div>
      </main>
    </div>
  );
}
export default Cobrancas;
