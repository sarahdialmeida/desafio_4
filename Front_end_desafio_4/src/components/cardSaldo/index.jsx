import "./style.css";
import currencyIcon from "../../assets/icons/currencyIcon.svg";

const formatadorDeDinheiro = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

export function CardSaldo(props) {
  const dinheiroFormatado = formatadorDeDinheiro
    .format(props.saldo)
    .replace("$", "$ ");
  return (
    <div className={`cardSaldo ${props.className || ""}`} type={props.type}>
      <div className="SaldoConta">
        <img src={currencyIcon} alt="currency icon" />
        <span className="saldo"> Saldo em Conta </span>{" "}
      </div>
      <div className="dinheiro">{dinheiroFormatado} </div>
      {props.children}
    </div>
  );
}
