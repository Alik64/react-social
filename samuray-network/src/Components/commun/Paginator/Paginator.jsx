import React, { useState, useEffect } from "react";
import style from "./Paginator.module.css";



export default function Paginator({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) {
  useEffect(() => {
    setPortionNumber(Math.ceil(currentPage / portionSize))
  }, [currentPage, portionSize])

  const pagesCount = Math.ceil(totalItemsCount / pageSize)// Nb de pages total
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize) // nb portions de page
  const [portionNumber, setPortionNumber] = useState(1)

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1 // N° bord gauche
  let rightPortionPageNumber = portionNumber * portionSize // N° bord droit


  return (


    <div className={style.pagination}>

      <button onClick={() => {
        setPortionNumber(1)
      }}>Start</button>
      {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}

      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((page, index) => {
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

      {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
      <button onClick={() => {
        setPortionNumber(portionCount)
      }}>End</button>
    </div>
  );
}
