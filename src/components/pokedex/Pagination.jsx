
const FIRST_PAGE = 1

const Pagination = ({ currentPage, lastPage, pagesInCurrentBlock, setCurrentPage }) => {
  
  const handleNextPage = () => {
    setCurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPage) return nextPage;
      return prevState
    });
  };
  
  const handleLastPage = () => setCurrentPage(lastPage)


  const handlePrevPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage - 1
      if (newPage >= FIRST_PAGE) return newPage
      return prevPage
    });
  };

  const handleFirstPage = () => setCurrentPage(FIRST_PAGE)

  return (
    <ul className="flex justify-center gap-1 items-center  mt-4">
      <li className=" cursor-pointer" onClick={handleFirstPage}><img src="images/bx-chevrons-left.png" alt="" /></li>
      <li className=" cursor-pointer" onClick={handlePrevPage}><img src="images/bx-chevron-left.png" alt="" /></li>
      {pagesInCurrentBlock.map((page) => (
        <li
          className={`p-2 px-3 cursor-pointer rounded-sm ${currentPage == page ? " bg-[#DD1A1A] " : ""}`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}

      <li className=" cursor-pointer" onClick={handleNextPage}><img src="images/bx-chevron-right.png" alt="" /></li>
      <li className=" cursor-pointer" onClick={handleLastPage}><img src="images/bx-chevrons-right.png" alt="" /></li>
    </ul>
  );
};
export default Pagination;


// cursor-pointer bg-[#DD1A1A] p-3 rounded-sm

//rounded-sm aspect-square p-3 px-5