import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";

const filterList = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filterList[0]);
  return (
    <DarkModeProvider>
      <Header
        filterList={filterList}
        filter={filter}
        onFilterChange={setFilter}
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
