import "./style.css";

export function CardCobrancas(props) {
  return (
    <div className="cardCobrancas">
        <h2>{props.titleOne}</h2>
        <h2>{props.titleTwo}</h2>
        <h2>{props.valuePago}</h2>
        <img src={props.pagoGreenIcon} alt={props.title} />
        <h2>{props.titlePago}</h2>
        <h2>{props.datePago}</h2>
        <h2>{props.titleThree}</h2>
        <img src={props.printerIcon} alt={props.title} />
    </div>
  );
}
