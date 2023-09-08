import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex")
  };

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto]">
      <section className=" flex justify-center items-center">
        <article>
          <div>
            <img src="/images/pokedexhomeimage.png" alt="" />
          </div >
          <h2>Hello trainer!</h2>
          <p>To start, give me your name</p>
          <form onSubmit={handleSubmit}>
            <input
              required
              autoComplete="off"
              placeholder="your name..."
              id="nameTrainer"
              type="text"
            />
            <button>Start!</button>
          </form>
        </article>
      </section>

      <FooterPokeball />
    </main>
  );
};

export default Home;
