import Logiciel from "../../assets/img/svg/logiciel.svg";
import urlMusiqueBleuBlanc from "../../assets/img/svg/Musique_bleu_blanc.svg";

const Competences = () => {
  return (
    <section className="competences" id="competences">
      <div className="competences_inner">
        <h3>Mes compétences</h3>

        <article>
          <h4>Développement Front-End</h4>
          <ul>
            <li>
              Travailler avec des frameworks front-end tels que{" "}
              <span className="rouge">React</span> et{" "}
              <span className="rouge">Vue</span>.
            </li>

            <li>
              Assurer que l'interface utilisateur s'adapte à{" "}
              <span className="rouge">différents appareils</span>
              et <span className="rouge">tailles d'écran</span>.
            </li>

            <li>
              Réaliser des maquettes <span className="rouge">UX / UI</span>.
            </li>
          </ul>
        </article>

        <article>
          <h4>Conception graphique</h4>
          <ul>
            <li>
              Concevoir des <span className="rouge">logos</span>, des{" "}
              <span className="rouges">images</span> et des{" "}
              <span className="rouge">icônes</span>.
            </li>

            <li>
              Utiliser des outils de conception comme{" "}
              <span className="rouge">Photoshop</span> et{" "}
              <span className="rouge">Illustrator</span>.
            </li>

            <li>
              Sélectionner soigneusement les{" "}
              <span className="rouge">couleurs</span>, les{" "}
              <span className="rouge">typographies</span> et les
              <span className="rouge">formes</span>.
            </li>
          </ul>
        </article>

        <article>
          <h4>Traiter les images fixes et en mouvements</h4>
          <ul>
            <li>
              Réaliser la <span className="rouge">retouche</span>, le{" "}
              <span className="rouge">recadrage</span> et la{" "}
              <span className="rouge">correction</span> des couleurs sur des{" "}
              <span className="rouge">photos</span>.
            </li>

            <li>
              <span className="rouge">Animer</span> des éléments et générer des{" "}
              <span className="rouge">mouvements</span> dans les{" "}
              <span className="rouge">vidéos</span>.
            </li>

            <li>
              Maîtriser la <span className="rouge">théorie</span> des couleurs,
              les <span className="rouge">profils</span> de couleur et les
              palettes pour assurer une{" "}
              <span className="rouge">cohérence visuelle</span>.
            </li>
          </ul>
        </article>
      </div>
      <div className="logiciels">
        <div className="competences__musique">
          <img src={urlMusiqueBleuBlanc} alt="" />
        </div>
        <div className="logiciels__inner">
          <img src={Logiciel} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Competences;
