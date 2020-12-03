import "./style.css";
import profile from "../../assets/icons/profile.svg";

function criarCobranca() {
  return (
    <div className="criarCobranca">
      <header>
        <span>
          <img className="loginProfile" alt="profile" src={profile} />
        </span>
      </header>
      <main className="principal">
	   <h1> // Criar Cobrança</h1>
		  <div className = "cardCriarCobranca">

		  </div>
        
      </main>
    </div>
  );
}
export default criarCobranca;