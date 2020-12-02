import React from "react";
import "./style.css";
import userIcon from "../../assets/icons/userIcon.svg";
import { CardSaldo } from "../../components/cardSaldo";
import profile from "../../assets/icons/profile.svg";
import { CardHome } from "../../components/cardHome";
import moneyIcon from "../../assets/icons/moneyIcon.svg";
import billingIcon from "../../assets/icons/billingIcon.svg";

function Home() {
  return (
    <div className="home">
      <header>
        <CardSaldo saldo={100} />
        <span>
          <img className="loginProfile" alt="profile" src={profile} />
        </span>
      </header>
      <main className="principal">
        <CardHome
          classname="clientCard"
          cardIcon={userIcon}
          title="Clientes"
          greenrectangle
          redrectangle
          titleGreenRectangle="Em dia"
          titleRedRectangle="Inadimplente"
          valueGreen={0}
          valueRed={0}
        />

        <CardHome
          classname="chargeCard"
          cardIcon={moneyIcon}
          title="Cobranças"
          bluerectangle
          redrectangle
		  greenrectangle
		  titleBlueRectangle="Previstas"
		  titleRedRectangle="Vencidas"
		  titleGreenRectangle="Pagas"
          valueBlue={0}
          valueRed={0}
          valueGreen={0}
        />

        <CardHome
          classname="billingCard"
          cardIcon={billingIcon}
          title="Faturamento"

          //   <ul>
          //     <li>Item um</li>
          //     <li>Item dois</li>
          //     <li>Item três</li>
          //   </ul>
        />
      </main>
    </div>
  );
}
export default Home;
