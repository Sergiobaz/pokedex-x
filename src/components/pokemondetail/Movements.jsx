const Movements = ({ moves }) => {
  return (
    <section>
      <h2 className="mt-8 text-[#302F2F] text-[22px] text-center font-roboto">
        Movements
      </h2>
      <ul className="flex flex-wrap mt-4">
        {moves?.map((move) => (
          <li
            className="px-5 py-2  bg-[#E5E5E5] m-2 rounded-full"
            key={move.move.name}
          >
            {move.move.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Movements;
