import urlProfil from "../../assets/img/png/header_profil.png";
import urlMusiqueBleu from "../../assets/img/svg/musique_bleu.svg";
import Boutons from "./Boutons";

  const titre = "Nicolas";
  const sousTitre = "Lauzon";
  const sousTitreDeux = "Développeur Front-End";

const Header = () => {
  return (
    <header>
      <div className="header__coin header__coinUn">
        <div className="header__coin__inner"></div>
      </div>

      <article className="header__informations">
        <h1>{titre}</h1>
        <h2>{sousTitre}</h2>
        <h3>{sousTitreDeux}</h3>
        <Boutons classe={"header__informations__boutons"}/>
      </article>
      <div className="header__img">
        <img src={urlProfil} alt="Nicolas Lauzon" />
      </div>
      <div className="header__coin header__coinDeux">
        <div className="header__coin__inner"></div>
      </div>
      <div className="header_musique">
        <img src={urlMusiqueBleu} alt="" />
      </div>
    </header>
  );
};

export default Header;
