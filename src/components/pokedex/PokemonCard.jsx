import { useEffect, useState } from "react";
import { getPokemonByUrl } from "../../services/pokemons";
import StatList from "./StatList";
import { JoinPokemonTypes } from "../../services/pokemons";
import { bgStylePokemonType, borderStylePokemonType } from "./shared/pokemon";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Link 
      to={`/pokedex/${pokemonInfo?.id}`}
      className={`text-center capitalize border-[5px] rounded-md ${
        borderStylePokemonType[pokemonInfo?.types[0]]
      }`}
    >
      <header
        className={`h-[80px] ${
          bgStylePokemonType[pokemonInfo?.types[0]]
        } relative mb-8`}
      >
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[65px] aspect-square">
          <img
            className="h-full w-full object-contain"
            src={pokemonInfo?.image}
            alt=""
          />
        </div>
      </header>
      <section>
        <h3 className="text-lg font-bold">{pokemonInfo?.name}</h3>
        <h4>{JoinPokemonTypes(pokemonInfo?.types)}</h4>
        <h5 className="text-sm mb-2">Types</h5>
        <hr />
        <StatList stats={pokemonInfo?.stats} />
      </section>
    </Link>
  );
};
export default PokemonCard;
