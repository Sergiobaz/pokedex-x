import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import StatBarList from "../components/pokemondetail/StatBarList";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId).then((data) =>
      setPokemonData(data).catch((err) => console.log(err))
    );
  }, []);

  return (
    <main className="flex justify-center items-center ">
      <article className="px-4 w-[min(100%,_700px)]">
        <header>
          <div>
            <img src={pokemonData?.image} alt="" />
          </div>
        </header>
        <section>
          <span>#{pokemonData?.id}</span>
          <StatBarList stats={pokemonData?.stats} />
        </section>
      </article>
    </main>
  );
};
export default PokemonDetail;
