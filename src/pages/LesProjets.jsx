import { useState } from "react";
import { useNavigate } from "react-router-dom";

import urlProjet1_1 from "../assets/img/png/projets/1/Apollon1.png";
import urlProjet1_2 from "../assets/img/png/projets/1/Apollon2.png";
import urlProjet1_3 from "../assets/img/png/projets/1/Apollon3.png";
import urlProjet1_4 from "../assets/img/png/projets/1/Apollon4.png";

import urlProjet2_1 from "../assets/img/png/projets/2/AuxQuatreEau.jpg";
import urlProjet2_2 from "../assets/img/png/projets/2/AuxQuatreAir.jpg.jpg";
import urlProjet2_3 from "../assets/img/png/projets/2/AuxQuatreTerre.jpg";

import urlProjet3_1 from "../assets/img/png/projets/3/Agrotourisme1.png";
import urlProjet3_2 from "../assets/img/png/projets/3/Agrotourisme2.png";
import urlProjet3_3 from "../assets/img/png/projets/3/Agrotourisme3.png";
import urlProjet3_4 from "../assets/img/png/projets/3/Agrotourisme4.png";

import urlProjet4_1 from "../assets/img/png/projets/4/nodewave1.jpg";
import urlProjet4_2 from "../assets/img/png/projets/4/nodewave2.jpg";
import urlProjet4_3 from "../assets/img/png/projets/4/nodewave3.jpg";

import Photoshop from "/frameworks/Photoshop_Logo.svg"
import Illustrator from "/frameworks/Illustrator_Logo.svg";
import HTML from "/frameworks/HTML5_Logo.svg";
import CSS from "/frameworks/CSS_Logo.svg";
import ReactLogo from "/frameworks/React_Logo.svg";
import Vue from "/frameworks/Vue_Logo.svg";
import XD from "/frameworks/XD_Logo.svg";
import { Link } from "react-router-dom";

const Projets = [
  {
    id: 1,
    titre: "NodeWave",
    description: "Voici une application web dédiée à la création de musique. L'application a été réalisée en 2 semaines et permet de créer de la musique en ajoutant des nodes et des liens entre ceux-ci.",
    url: [urlProjet4_1, urlProjet4_2, urlProjet4_3],
    technologies: [
      { id: 1, url: ReactLogo },
      { id: 2, url: HTML },
      { id: 3, url: CSS },
      { id: 4, url: XD },
      { id: 5, url: Illustrator },
    ],
  },
  {
    id: 2,
    titre: "Apollon",
    description:
      "Voici Apollon! Une application web dédiée a la recherche et écoute de musique, dans le style Spotify et Apple Music, il comporte un système de lecteur audio ainsi qu'un système de playlists.",
    url: [urlProjet1_1, urlProjet1_2, urlProjet1_3, urlProjet1_4],
    technologies: [
      { id: 1, url: ReactLogo },
      { id: 2, url: HTML },
      { id: 3, url: CSS },
      { id: 4, url: XD },
      { id: 5, url: Illustrator },
    ],
  },
  {
    id: 3,
    titre: "Aux 4 Services",
    description:
      "Voici un projet de design dans lequel le mandat était de créer trois pages d'une application multimédia sur un sujet de mon choix, mais avec un traitement graphique centré sur les quatre éléments fondamentaux de la nature. J'ai choisi la nourriture comme sujet.",
    url: [urlProjet2_1, urlProjet2_2, urlProjet2_3],
    technologies: [{ id: 1, url: Photoshop }],
  },
  {
    id: 4,
    titre: "Agrotourisme Laurentides",
    description:
      "Voici mon projet de fin de session dans le cadre de mon cours de Web, créé en utilisant Vue.js. Nous étions une équipe de deux personnes, et nous avons collaboré à toutes les phases du projet, de la planification à la conception et au développement. Chacun de nous avait la responsabilité de réaliser plusieurs sections du site.",
    url: [urlProjet3_1, urlProjet3_2, urlProjet3_3, urlProjet3_4],
    technologies: [
      { id: 1, url: Vue },
      { id: 2, url: HTML },
      { id: 3, url: CSS },
      { id: 4, url: XD },
    ],
  },

];
const LesProjets = () => {
  const [projetActif, setProjetActif] = useState(Projets[0]);
  const navigate = useNavigate();

  const handleProjetClick = (id) => {
    setProjetActif(Projets[id - 1]);
  };
  const handleBack = (e) => {
    navigate(-1);
  };

  return (
    <div className="projets_container">
      <nav>
        <div className="outer" onClick={() => handleBack()}>
          <div className="inner">
            <label>Retour</label>
          </div>
        </div>
        <ul>
          {Projets.map((projet) => (
            <li key={projet.id} onClick={() => handleProjetClick(projet.id)} className={projetActif.id === projet.id ? "active" : ""}>
              <Link>
                {projet.titre}
                <span></span>
                <span></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="projets__inner">
        <h3>{projetActif.titre}</h3>
        <p>{projetActif.description}</p>

        <div className="frameworks">
          {projetActif.technologies.map((technologie) => (
            <div key={technologie.id}>
              <img src={technologie.url} alt="" />
            </div>
          ))}
        </div>

        <div className="projets__images">
          {projetActif.url.map((url) => (
            <div key={url}>
              <img src={url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LesProjets;
