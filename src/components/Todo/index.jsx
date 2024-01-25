import React from "react";
import { useState } from "react";
import "./style.css";
import { LuCheckCircle } from "react-icons/lu";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState([]);
  const [find, setFind] = useState([]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setStatus([...status, false]);
    setFind([...find, false]);
    setInputValue("");
  }

  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    const newStatus = [...status];
    newStatus.splice(index, 1);

    const newFind = [...find];
    newFind.splice(index, 1);

    setTodos(newTodos);
    setStatus(newStatus);
    setFind(newFind);
  }

  function handleStatus(index) {
    const newStatus = [...status];
    newStatus[index] = !newStatus[index];

    const newFind = [...find];
    newFind[index] = !newFind[index];

    setStatus(newStatus);
    setFind(newFind);
  }

  return (
    <div className="main">
      <h1>Todo List</h1>

      <form>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {status[index] && find[index] ? (
              <LuCheckCircle
                style={{ height: "51px", width: "37px", cursor: "pointer" }}
                onClick={() => handleStatus(index)}
              />
            ) : (
              <RiCheckboxBlankCircleLine
                style={{ height: "51px", width: "37px", cursor: "pointer" }}
                onClick={() => handleStatus(index)}
              />
            )}

            <span >{todo}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
