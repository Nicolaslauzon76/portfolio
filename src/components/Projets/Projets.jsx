import { Link } from "react-router-dom";

import url1 from "../../assets/img/png/projets/1/Apollon1.png"
import url2 from "../../assets/img/png/projets/1/Apollon3.png"
import url3 from "../../assets/img/png/projets/1/Apollon4.png"
import url4 from "../../assets/img/png/projets/2/AuxQuatreEau.jpg"
import url5 from "../../assets/img/png/projets/2/AuxQuatreAir.jpg.jpg"
import url6 from "../../assets/img/png/projets/2/AuxQuatreTerre.jpg"
import url7 from "../../assets/img/png/projets/3/Agrotourisme1.png"

const urls = [url3, url2, url1, url4, url5, url6, url7]

const Projets = () => {
  return (
    <section className="projets" id="projets"> 
      <div className="projets__titre">
        <h3>Mes projets</h3>
        <button>
          <Link to="projets">
            <span className="rouge">Galerie</span>
          </Link>
        </button>
      </div>

      <article className="apercu__galerie">

        {urls.map((url, index) => (
          <div key={index} className="apercu__galerie__img">
            <img src={url} alt="" />
          </div>
        ))}

      </article>
    </section>
  );
};

export default Projets;
