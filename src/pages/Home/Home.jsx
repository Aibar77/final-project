import "./index.scss";
import fire from "../../assets/icons/Fire.png";
import { Slider } from "../../components/Slider/Slider";
import { Link } from "react-router-dom";
function Home() {
  return (
    <main className="home">
      <section className="home-left">
        <h1>Эксклюзивное меню на Ваш вкус</h1>
        <Link to={"/menu"}>Смотреть все меню</Link>
        <button>
          <img src={fire} alt="Fire-icon" />
          АКЦИИ
        </button>
      </section>
      <section className="home-right">
        <Slider />
      </section>
    </main>
  );
}

export default Home;
