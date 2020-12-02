import React from "react";
import "./style.css";
import userIcon from "../../assets/icons/userIcon.svg";
import { CardSaldo } from "../../components/cardSaldo";
import profile from "../../assets/icons/profile.svg";

function Cobrancas() {
  return (
    <div className="home">
      <header>
        <CardSaldo saldo={100} />
        <span>
          <img className="loginProfile" alt="profile" src={profile} />
        </span>
      </header>
      <main className="principal">
        
      </main>
    </div>
  );
}
export default Cobrancas;

