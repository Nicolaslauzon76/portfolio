import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="#moi">Moi<span></span><span></span></Link>
        </li>
        <li>
          <Link to="#projets">Projets<span></span><span></span></Link>
        </li>
        <li>
          <Link to="#competences">Compétences<span></span><span></span></Link>
        </li>
        <li>
          <Link to="#contact">Contact<span></span><span></span></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
