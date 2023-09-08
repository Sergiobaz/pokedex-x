import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/trainer.slice"

const HeaderPokeball = ({ children }) => {
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(logout())
  }
  return (
    <section>
      <header>
        <section>
          <div className="h-16 bg-red-600 relative"></div>
          <div className=" absolute  sm:left-14 top-7 w-[220px] sm:w[300px]">
            <img src="/images/pokedexhomeimage.png" alt="" />
          </div>
          <div className="h-12 bg-black relative">
            <div
              onClick={handleLogOut} className="h-16 aspect-square rounded-full bg-white absolute
         sm:right-0 right-[-10px] -translate-x-1/2 bottom-3 border-[8px]
          border-black after:block after:content-[''] 
          after:h-8 after:aspect-square after:bg-gray-500
           after:left-1/2 after:-translate-x-1/2 after:top-1/2
            after:-translate-y-1/2 after:absolute after:rounded-full 
           after:border-4 after:border-black transition-colors hover:bg-red-500 cursor-pointer"
            ></div>
          </div>
        </section>
      </header>
      {children}
    </section>
  );
};
export default HeaderPokeball;
