import React from "react";
import style from "./Paginator.module.css";



export default function Paginator({ totalUsersCount, pageSize, currentPage, onPageChanged }) {
  const PAGES_LENGTH = 10; // nombre max de page à afficher
  const totalPagesCount = Math.ceil(totalUsersCount / pageSize); // Nb de pages total

  const pagesCount =
    totalPagesCount < PAGES_LENGTH ? totalPagesCount : PAGES_LENGTH;

  const half = Math.floor(pagesCount / 2);

  let startPage = currentPage - half;
  if (startPage < 1) startPage = 1;
  if (startPage + pagesCount > totalPagesCount)
    startPage = totalPagesCount - pagesCount;

  const pages = [];
  for (let i = startPage; i < startPage + PAGES_LENGTH; i++) {
    pages.push(i);
  }

  return (


    <div className={style.pagination}>
      {pages.map((page, index) => {
        return (
          <span
            key={index}
            className={`${style.page} ${currentPage === page && style.selectedPage
              }`}
            onClick={(e) => {
              onPageChanged(page);
            }}
          >
            {page}
          </span>
        );
      })}
    </div>

  );
}
