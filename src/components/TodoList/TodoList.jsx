import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import style from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: "1", text: "first todo", status: "active" },
    { id: "2", text: "second todo", status: "active" },
  ]);
  const handleAdd = (item) => {
    setTodos([...todos, item]);
  };
  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };

  const getFilteredTodos = () => {
    if (filter === "all") return [...todos];
    else return todos.filter((i) => i.status === filter);
  };
  return (
    <section className={style.container}>
      <ul className={style.list}>
        {getFilteredTodos().map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
