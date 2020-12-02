import "./style.css";

export function CardHome(props) {
  return (
    <div className="cardHome">
      <div className="headerCardHome">
        <img src={props.cardIcon} alt={props.title} />
        <h2> {props.title} </h2>
      </div>

      <div className="cardBody">
        {props.greenrectangle && (
          <div className="greenRectangle">
            <p>{props.titleGreenRectangle}</p>
            <span>{props.valueGreen}</span>
          </div>
        )}

        {props.redrectangle && (
          <div className="redRectangle">
            <p>{props.titleRedRectangle}</p>
			<span>{props.valueRed}</span>
          </div>
        )}

        {props.bluerectangle && (
          <div className="blueRectangle">
            <p>{props.titleBlueRectangle}</p>
			<span>{props.valueBlue}</span>
          </div>
        )}
      </div>
    </div>
  );
}
