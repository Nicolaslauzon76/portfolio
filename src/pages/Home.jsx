import Competences from "../components/Competences/Competences";
import Moi from "../components/Moi/Moi";
import Projets from "../components/Projets/Projets";

const Home = () => {
  return (
    <div className="accueil_container">
      <Moi />
      <Competences />
      <Projets />
    </div>
  );
};

export default Home;
