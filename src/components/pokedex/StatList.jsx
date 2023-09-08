const StatList = ({stats, textColor}) => {

  function shortingName(str) {
    if (str === "special-attack") {
      return "S.attack";
    } else if (str === "special-defense") {
      return "S.defense";
    } else {
      return str;
    }
  }

  

  return (
    <ul className="grid gap-2 grid-cols-3 text-xs p-2">
        {
            stats?.map((stat) => <li key={stat.name}>
                <h4 className=" text-base p-1 font-roboto capitalize line-clamp-1">{shortingName(stat.name)}</h4>
                <span className={` text-lg  ${textColor} font-bold`}>{stat.value}</span>
            </li>)
        }
    </ul>
  
  )
}
export default StatList