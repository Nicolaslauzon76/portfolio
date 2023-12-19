import { Link } from "react-router-dom";

const Boutons = ({classe}) => {
  return (
    <div className={classe + " boutons"}>
      <ul>
        <li>
          <Link>Mon CV</Link>
        </li>
        <li>
          <Link>Me contacter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Boutons;
