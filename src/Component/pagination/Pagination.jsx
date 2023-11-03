import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default function Pagination({ currentPage, setCurrentPage, totalPages }) {
  return (
    <PaginationWrapper>
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </PaginationButton>
      <span>Page {currentPage} of {totalPages}</span>
      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </PaginationButton>
    </PaginationWrapper>
  );
}
