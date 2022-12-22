import React from "react";
import style from "./Header.module.css";

export default function Header({ filterList, filter, onFilterChange }) {
  return (
    <header className={style.header}>
      <ul className={style.filters}>
        {filterList.map((f, idx) => (
          <li key={idx}>
            <button
              className={`${style.filter} ${
                f === filter ? style.selected : ""
              }`}
              onClick={() => onFilterChange(f)}
            >
              {f}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
