"use client";

import React from "react";
import Button from "./Button";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <Button
        onClick={handlePrev}
        disabled={currentPage === 1}
        variant="outline"
        className="font-normal"
      >
        Previous
      </Button>

      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>

      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        variant="outline"
        className="font-normal"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
