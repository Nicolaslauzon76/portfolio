import PhotoUn from "../../assets/img/png/photoun.jpg";
import PhotoDeux from "../../assets/img/png/photodeux.jpg";
import PhotoTrois from "../../assets/img/png/phototrois.jpg";
import urlMusiqueBleuBlanc from "../../assets/img/svg/musique_bleu_blanc.svg";

import Boutons from "../Header/Boutons";

const titre = "À propos";
const sousTitre = "de moi";

const Moi = () => {
  return (
    <section className="moi">
      <div className="moi_musique">
        <img src={urlMusiqueBleuBlanc} alt="" />
      </div>
      <div className="moi__inner">
        <article className="apropos">
          <h3>{titre}</h3>
          <h4>{sousTitre}</h4>

          <p>
            <span className="rouge">Passionné</span>,{" "}
            <span className="rouge">enjoué</span> et{" "}
            <span className="rouge">leader de nature</span>, je désire
            travailler en Web pour mettre en valeur ma{" "}
            <span className="rouge">créativité</span> et mes{" "}
            <span className="rouge">compétences techniques</span>. Mon{" "}
            <span className="rouge">engagement</span> et ma{" "}
            <span className="rouge">capacité à motiver mon équipe</span> me
            permettent d&apos;exceller dans les projets et de contribuer de
            manière significative à la croissance et à l&apos;innovation de
            toute entreprise.
          </p>

          <Boutons classe={"apropos__boutons"} />
        </article>
        <div className="photos">
          <div className="photos_un">
            <div>
              <img src={PhotoUn} alt="Nicolas Lauzon" />
            </div>
          </div>

          <div className="photos_deux">
            <div>
              <img src={PhotoDeux} alt="Nicolas Lauzon" />
            </div>
          </div>

          <div className="photos_trois">
            <div>
              <img src={PhotoTrois} alt="Nicolas Lauzon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moi;
