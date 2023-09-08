import { useState } from "react";
import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../components/hooks/usePokedex";
import { paginateData } from "../../public/utils/pagination";
import Pagination from "../components/pokedex/Pagination";
import { firstLetterToUpperCase } from "../../public/utils/firstLetterToUpperCase";

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1);

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
      <section className="flex flex-col">
        <div className="sm:flex sm:text-center sm:items-center sm:ml-6 sm:my-5">
          <p className="font-inter text-red-600 text-center text-[22px] sm:text-[18px] font-[580]">
            Welcome {firstLetterToUpperCase(name)},
          </p>
          <p className="font-inter text-center sm:text-[18px]">
            here you can find your favorite pokemon!
          </p>
        </div>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:mb-12 sm:gap-4 mb-4 mt-2 sm:justify-evenly ">
          <div>
            <input
              className=" bg-slate-500 text-white p-2 text-center font-inter rounded-full outline-none sm:h-[68px]"
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search pokemon..."
              type="text"
            />
          </div>

          <select
            className="p-2 px-14 font-inter bg-slate-500 rounded-full text-white sm:h-[68px]"
            value={pokemonType}
            onChange={handleChange(setPokemonType)}
          >
            <option value="">All pokemons</option>
            {types.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </section>

      <PokemonList pokemons={itemsInCurrentPage} />

      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </main>
  );
};
export default Pokedex;
