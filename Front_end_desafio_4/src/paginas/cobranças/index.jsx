import React from "react";
import "./style.css";
import { CardSaldo } from "../../components/cardSaldo";
import { CardCobrancas } from "../../components/cardCobrancas";
import profile from "../../assets/icons/profile.svg";
import bluePendingIcon from "../../assets/icons/bluePendingIcon.svg";
import greenPayedIcon from "../../assets/icons/greenPayedIcon.svg";
import printerIcon from "../../assets/icons/printerIcon.svg";

function Cobrancas() {
  const Payments = [
    { nomeDaCliente: "Sarah", descricao: "Pagamento referente à..." },
    { nomeDaCliente: "Lari", descricao: "Pagamento referente à..." },
  ];

  console.log(Payments);

  return (
    <div className="cobrancas">
      <header className="headerCobrancas">
        <CardSaldo saldo={100} />
        <span>
          <img className="loginProfile" alt="profile" src={profile} />
        </span>
      </header>
      <main className="principalCobrancas">
        <div className="headertwo">
          <h2>Cliente</h2>
          <h2>Descrição</h2>
          <h2>Valor</h2>
          <h2>Status</h2>
          <h2>Vencimento</h2>
          <h2>Boleto</h2>
        </div>
        {Payments?.map((C, index) => (
          <CardCobrancas
            classname="clientCobrancas"
            key={index}
            titleOne={C.nomeDaCliente}
            titleTwo="Pagamento referente à..."
            valuePago="R$ 00.000,00"
            pagoGreenIcon={greenPayedIcon}
            titlePago="PAGO"
            titleThree="12/12/2020"
            printerIcon={printerIcon}
          />
        ))}
      </main>
    </div>
  );
}
export default Cobrancas;
