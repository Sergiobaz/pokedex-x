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
    <ul className="flex justify-center gap-4 p-4 items-center">
      <li onClick={handleFirstPage}>{"<<"}</li>
      <li onClick={handlePrevPage}>{"<"}</li>
      {pagesInCurrentBlock.map((page) => (
        <li
          className={`  p-2 cursor-pointer ${currentPage == page ? " bg-red-400 " : ""}`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}

      <li onClick={handleNextPage}>{">"}</li>
      <li onClick={handleLastPage}>{">>"}</li>
    </ul>
  );
};
export default Pagination;
