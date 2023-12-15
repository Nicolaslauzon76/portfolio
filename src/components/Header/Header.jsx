import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
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
    </header>
  );
};

export default Header;
