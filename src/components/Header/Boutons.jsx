import { Link } from "react-router-dom";

import CV from "../../assets/pdf/NicolasLauzon_CV.pdf";

const Boutons = ({ classe }) => {
  return (
    <div className={classe + " boutons"}>
      <ul>
        <li>
          <Link to={CV} target="_blank">
            Mon CV
          </Link>
        </li>
        <li>
          <a href="#contact">Me contacter</a>
        </li>
      </ul>
    </div>
  );
};

export default Boutons;
