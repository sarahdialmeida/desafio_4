import React from "react";
import "./style.css";
import { CardSaldo } from "../../components/cardSaldo";
import profile from "../../assets/icons/profile.svg";

function Clientes() {
  return (
    <div className="clientes">
      <header>
        <CardSaldo saldo={100} />
        <span>
          <img className="loginProfile" alt="profile" src={profile} />
        </span>
      </header>
      <main className="principal">
		  esse texto no corpo, nao no header
        
      </main>
    </div>
  );
}
export default Clientes;

