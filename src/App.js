import { useState } from "react";
import "./App.css";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([
    { memo: "init memo", done: false },
    { memo: "second memo", done: false },
  ]);
  const [filter, setFilter] = useState("all");
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, { memo: text, done: false }]);
    setText("");
  };
  const textChange = (e) => {
    setText(e.target.value);
  };
  const deleteItem = (e) => {
    const targetIndex = parseInt(e.target.id.split("_")[1]);
    setItems(items.filter((_, index) => index !== targetIndex));
  };
  const checkChange = (e) => {
    console.log(items);
    const targetIndex = parseInt(e.target.id.split("_")[1]);
    setItems(
      items.map((item, index) => {
        if (index === targetIndex) {
          return { ...item, done: !item.done };
        } else return { ...item };
      })
    );
  };
  const filterAll = () => {
    setFilter("all");
  };
  const filterActive = () => {
    setFilter("active");
  };
  const filterCompleted = () => {
    setFilter("completed");
  };
  const setHidden = (done) => {
    if (filter === "all") {
      return false;
    } else if (filter === "active") {
      return done;
    } else if (filter === "completed") {
      return !done;
    } else {
      console.error(`filter ${filter} is not defined`);
    }
  };
  return (
    <DarkModeProvider>
      <div className="App">
        <div>
          <button>Night Mode</button>
        </div>
        <div>
          <button onClick={filterAll}>All</button>
          <button onClick={filterActive}>Active</button>
          <button onClick={filterCompleted}>Completed</button>
        </div>
        <ul>
          {items.map((i, count) => (
            <li key={count} hidden={setHidden(i.done)}>
              <div>
                <input
                  id={`memo_${count}`}
                  type="checkbox"
                  checked={i.done}
                  onChange={checkChange}
                />
                <label
                  htmlFor="memo_${count}"
                  className={i.done ? "strikethrough" : ""}
                >
                  {i.memo}
                </label>
                <button id={`btn_${count}`} onClick={deleteItem}>
                  delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <form onSubmit={addItem}>
          <input
            type="text"
            className="text-add"
            onChange={textChange}
            value={text}
          ></input>
          <button className="btn-add" onClick={addItem}>
            Add
          </button>
        </form>
      </div>
    </DarkModeProvider>
  );
}

export default App;
