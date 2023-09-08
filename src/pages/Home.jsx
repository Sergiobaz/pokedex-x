import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto]">
      <section className=" flex justify-center items-center">
        <article className=" flex flex-col gap-1">
          <div>
            <img src="/images/pokedexhomeimage.png" alt="" />
          </div>
          <h2 className="text-center text-red-500 text-[40px] font-inter">
            Hello trainer!
          </h2>
          <p className="text-center text-[20px]">To start, give me your name</p>
          <form className="text-center sm:px-6" onSubmit={handleSubmit}>
            <input
              className="text-center py-2 sm:px-6 shadow-lg"
              required
              autoComplete="off"
              placeholder="your name..."
              id="nameTrainer"
              type="text"
            />
            <button className=" text-white bg-red-500 p-2 px-6 sm:px-10">Start!</button>
          </form>
        </article>
      </section>

      <FooterPokeball />
    </main>
  );
};

export default Home;
