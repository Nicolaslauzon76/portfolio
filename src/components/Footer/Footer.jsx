import Boutons from "../Header/Boutons";
import MusiqueBlanc from "../../assets/img/svg/musique_blanc.svg";
import MusiqueNoir from "../../assets/img/svg/musique_noir.svg";

const titre = "Nicolas";
const sousTitre = "Lauzon";
const sousTitreDeux = "Développeur Front-End";

import LinkedIn from "../../assets/img/svg/LinkedIn_icon.svg";
const urlLinkedIn = "https://www.linkedin.com/in/nicolas-lauzon-907616269";

import GMail from "../../assets/img/svg/Gmail_icon.svg";
const courriel = "nicolas.lauzon01@gmail.com";

import Dribble from "../../assets/img/svg/Dribbble_icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = () => {
    const tempInput = document.createElement("input");
    tempInput.value = courriel;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000); // Reset copied state after 2 seconds
  };
  return (
    <footer>
      <section className="footer__icones">
        <div className="icones">
          <div className="gmail">
            <img src={GMail} onClick={handleEmailClick} />
            {emailCopied && (
              <span style={{ marginLeft: "5px", color: "var(--rouge)" }}>
                Copié!
              </span>
            )}
          </div>
          <div className="linkedin">
            <Link to={urlLinkedIn} target="_blank">
              <svg
                height="72"
                viewBox="0 0 72 72"
                width="72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none">
                  <path
                    d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                    fill="#F2F2F2"
                  />
                  <path
                    d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                    fill="var(--noir)"
                  />
                </g>
              </svg>
            </Link>
          </div>
          <div className="dribble">
            <Link
              to="https://dribbble.com/khaki76"
              target="_blank"
            >
              <img src={Dribble} alt="" />
            </Link>
          </div>
        </div>
      </section>
      <article className="header__informations footer__informations">
        <h1>{titre}</h1>
        <h2>{sousTitre}</h2>
        <h3>{sousTitreDeux}</h3>
        <Boutons classe={"footer__informations__boutons"} />
      </article>
      <div className="musique__blanc">
        <img src={MusiqueBlanc} />
      </div>
      <div className="musique__noir">
        <img src={MusiqueNoir} />
      </div>
    </footer>
  );
};

export default Footer;
