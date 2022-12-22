import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    onAdd({ id: uuidv4(), text: text, status: "active" });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        className={style.input}
        type="text"
        placeholder="Add Text"
        onChange={handleChange}
        value={text}
      />
      <button className={style.button} onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}
