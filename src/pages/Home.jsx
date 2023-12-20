import Competences from "../components/Competences/Competences";
import Contact from "../components/Contact/Contact";
import Moi from "../components/Moi/Moi";
import Projets from "../components/Projets/Projets";

const Home = () => {
  return (
    <div className="accueil_container">
      <Moi />
      <Competences />
      <Projets />
      <Contact />
    </div>
  );
};

export default Home;
