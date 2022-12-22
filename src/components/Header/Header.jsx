import React, { useContext } from "react";
import style from "./Header.module.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDarkMode } from "../../context/DarkModeContext";

export default function Header({ filterList, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const handleToggleDarkmode = () => {
    toggleDarkMode();
  };
  return (
    <header className={style.header}>
      <button className={style.darkmodebutton} onClick={handleToggleDarkmode}>
        {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
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
