import "./style.css";

export function Botao(props) {
  return (
    <button
		className={`botao ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
