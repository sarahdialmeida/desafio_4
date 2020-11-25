import "./style.css";

export function Input(props) {
  return (
    <label className={props.className}>
      {props.label}
      <input name={props.name} type={props.type} />
      {props.children}
    </label>
  );
}
