import React from "react";
import { BsTrash } from "react-icons/bs";
import style from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleClick = () => {
    onDelete(todo);
  };
  return (
    <li className={style.list}>
      <input
        className={style.checkbox}
        type="checkbox"
        id={`checkbox_${todo.id}`}
        onChange={handleChange}
        checked={todo.status === "completed"}
      />
      <label className={style.label} htmlFor={`checkbox_${todo.id}`}>
        {todo.text}
      </label>
      <button className={style.button} onClick={handleClick}>
        <BsTrash />
      </button>
    </li>
  );
}
