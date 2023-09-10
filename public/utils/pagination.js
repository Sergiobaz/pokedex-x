const paginateData = (items, currentPage) => {
  const ITEM_PER_PAGE = 20;

  const sliceEnd = currentPage * ITEM_PER_PAGE;
  const slicestart = sliceEnd - ITEM_PER_PAGE;
  const itemsInCurrentPage = items.slice(slicestart, sliceEnd);

  const lastPage = Math.ceil(items.length / ITEM_PER_PAGE);

  //Actualiza las cantidad de paginas por bloque segun el width de la pantalla
  const quantityOfPagesPerBlock = () => {
    if (window.innerWidth >= 640) {
      return 5;
    } else {
      return 3;
    }
  };
  
  const PAGES_PER_BLOCK = quantityOfPagesPerBlock();

  const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK);

  //Paginas que se van a mostar en el bloque actual
  const pagesInCurrentBlock = [];
  const maxPage = actualBlock * PAGES_PER_BLOCK;
  const minPage = maxPage - PAGES_PER_BLOCK + 1;
  for (let i = minPage; i <= maxPage; i++) {
    if (i <= lastPage) {
      pagesInCurrentBlock.push(i);
    }
  }

  return {
    itemsInCurrentPage,
    lastPage,
    pagesInCurrentBlock,
  };
};

export { paginateData };
