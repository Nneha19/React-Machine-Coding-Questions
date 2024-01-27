import React, { useState } from "react";
import data from "./data";

const itemsPerPage = 5;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex).map((item) => (
      <div key={item.id}>
        <p>{item.name}</p>
      </div>
    ));
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    const minPage = Math.max(1, currentPage - 2);
    const maxPage = Math.min(totalPages, currentPage + 2);

    for (let page = minPage; page <= maxPage; page++) {
      pageButtons.push(
        <button
          key={page}
          onClick={() => handleClick(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <div className="main">
      <h3>Pagination Example</h3>
      {renderData()}
      <div className="pagination">
        <button  className="controlbtn" onClick={handlePrevClick} disabled={currentPage === 1}>
          {"<"}
        </button>
        {renderPageButtons()}
        <button className="controlbtn" onClick={handleNextClick} disabled={currentPage === totalPages}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
