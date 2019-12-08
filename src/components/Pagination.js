import React from 'react';
import './Pagination.css';

function Pagination() {
  return (
    <div className="Pagination">
      <a href="/#" className="Pagination-previous">
        Previous
      </a>
      <a href="/#" className="Pagination-number active">
        1
      </a>
      <a href="/#" className="Pagination-number">
        2
      </a>
      <a href="/#" className="Pagination-number">
        3
      </a>
      <a href="/#" className="Pagination-number">
        4
      </a>
      <a href="/#" className="Pagination-number">
        5
      </a>
      <a href="/#" className="Pagination-number">
        6
      </a>
      <a href="/#" className="Pagination-number">
        7
      </a>
      <a href="/#" className="Pagination-number">
        8
      </a>
      <a href="/#" className="Pagination-next">
        Next
      </a>
    </div>
  );
}

export default Pagination;
