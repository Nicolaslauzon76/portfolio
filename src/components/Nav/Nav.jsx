import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
  const location = useLocation();
  useEffect(() => {
    // This function will be called whenever the location changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/#moi">
            Moi<span></span>
            <span></span>
          </Link>
        </li>
        <li>
          <Link to="/#projets">
            Projets<span></span>
            <span></span>
          </Link>
        </li>
        <li>
          <Link to="/#competences">
            Compétences<span></span>
            <span></span>
          </Link>
        </li>
        <li>
          <Link to="/#contact">
            Contact<span></span>
            <span></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
