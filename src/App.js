import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { useState } from "react";

const filterList = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filterList[0]);
  return (
    <>
      <Header
        filterList={filterList}
        filter={filter}
        onFilterChange={setFilter}
      />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
