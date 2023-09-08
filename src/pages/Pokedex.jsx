import { useState } from "react";
import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../components/hooks/usePokedex";
import { paginateData } from "../../public/utils/pagination";
import Pagination from "../components/pokedex/Pagination";

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1);

  console.log(currentPage);

  const {
    name,
    pokemonName,
    setPokemonName,
    pokemonType,
    setPokemonType,
    pokemonsByName,
    handleChange,
    types,
  } = usePokedex();

  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonsByName,
    currentPage
  );

  return (
    <main>
      <section>
        <p>
          <span>Welcome {name} </span>
        </p>
        <form>
          <div>
            <input
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search pokemon..."
              type="text"
            />
          </div>

          <select value={pokemonType} onChange={handleChange(setPokemonType)}>
            <option value="">All pokemons</option>
            {types.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </section>

      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <PokemonList pokemons={itemsInCurrentPage} />
    </main>
  );
};
export default Pokedex;
