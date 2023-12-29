"use client";

import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationDemoProps {
  totalItems: number;
}

export const PaginationDemo: React.FC<PaginationDemoProps> = ({
  totalItems,
}) => {
  const [activePage, setActivePage] = useState(1);
  const arr = [1, 2, 3, 4, 5];

  const handleNextClick = () => {
    console.log(totalItems);

    setActivePage((prevPage) => prevPage + 1);
  };

  const handlePreviousClick = () => {
    if (activePage > 1) {
      setActivePage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={handlePreviousClick} />
        </PaginationItem>

        {arr.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              href="#${activePage}"
              isActive={pageNumber === activePage}
              onClick={() => setActivePage(pageNumber)}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}

        <PaginationItem>
          <PaginationNext href="#" onClick={handleNextClick} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
