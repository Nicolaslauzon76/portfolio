import { Link } from "react-router-dom";
import urlProfil from "../../assets/img/png/header_profil.png";
import urlMusiqueBleu from "../../assets/img/svg/musique_bleu.svg";

const Header = () => {
  return (
    <header>
      <div className="header__coin header__coinUn">
        <div className="header__coin__inner"></div>
      </div>

      <article className="header__informations">
        <h1>Nicolas</h1>
        <h2>Lauzon</h2>
        <h3>Développeur Front-End</h3>
        <div className="header__informations__boutons">
          <ul>
            <li>
              <Link>Mon CV</Link>
            </li>
            <li>
              <Link>Me contacter</Link>
            </li>
          </ul>
        </div>
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
