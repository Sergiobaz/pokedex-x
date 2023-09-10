import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import StatBarList from "../components/pokemondetail/StatBarList";
import Movements from "../components/pokemondetail/Movements";
import { bgStylePokemonType, lettterStylePokemonType } from "../components/pokedex/shared/pokemon";

const firstLetterToUpperCase = (str) => {
  const firstLetter = str[0]
  const firstLetterUpper = firstLetter.toUpperCase()
  const strWithOutFirstLetter = str.slice(1)
  return firstLetterUpper + strWithOutFirstLetter
}


const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId).then((data) =>
      setPokemonData(data).catch((err) => console.log(err))
    );
  }, []);


  return (
    <main className="flex justify-center items-center sm:mt-8">
      <article className="px-4 w-[min(100%,_700px)] drop-shadow-xl">
        <header>
          <div className={`flex justify-center mt-2 h-[80px] ${bgStylePokemonType[pokemonData?.types[0]]} `}>
            <img src={pokemonData?.image} alt="" />
          </div>
        </header>
        <section>
          <section className="flex flex-col justify-center items-center">
            <article className="flex space-x-8 mt-2 sm:flex-col sm:justify-center sm:items-center ">
            <span className={`font-roboto text-[20px] sm:text-center sm:text-[25px] ${lettterStylePokemonType[pokemonData?.types[0]]} `} >#{pokemonData?.id}</span>
            <h3 className={`font-roboto text-[20px] sm:text-center sm:text-[25px] ${lettterStylePokemonType[pokemonData?.types[0]]} `} >{pokemonData?.name}</h3>
            </article>
            <div className="hidden">
              <div>
                <p>Weight</p>
                <span>{pokemonData?.weight}</span>
              </div>
              <div>
                <p>Height</p>
                <span>{pokemonData?.height}</span>
              </div>
            </div>
          </section>
          <section className="flex flex-col justify-center items-center sm:flex-row sm:gap-8 " >
            <article className="m-1" >
              <div className="text-center font-roboto py-2" >Type</div>
              <div className="grid grid-cols-2  gap-6" >
                <h3 className={` sm:px-8 sm:rounded-none font-roboto text-center p-1 px-4 rounded-full ${bgStylePokemonType[pokemonData?.types[0]]} `}>{pokemonData?.types[0]}</h3>
                <h3 className={` sm:px-8 sm:rounded-none font-roboto text-center p-1 px-4 rounded-full ${bgStylePokemonType[pokemonData?.types[1]]} `}>{pokemonData?.types[1]}</h3>
              </div>
            </article>
            <article className="m-1" >
              <div className="text-center font-roboto py-2" >Abilities</div>
              <div className="grid grid-cols-2 gap-6" >
                <h3 className=" sm:px-8  sm:rounded-none font-roboto text-center p-1 px-4 rounded-full bg-slate-400 ">{pokemonData?.abilities[0].ability.name}</h3>
                <h3 className=" sm:px-8 sm:rounded-none font-roboto text-center p-1 px-4 rounded-full bg-slate-400 ">{pokemonData?.abilities[1].ability.name}</h3>
              </div>
            </article>
          </section>

          <StatBarList stats={pokemonData?.stats} />
          
          <Movements moves={pokemonData?.moves}/>
        </section>
      </article>
    </main>
  );
};
export default PokemonDetail;
