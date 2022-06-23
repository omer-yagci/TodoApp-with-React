import React, { useState } from "react";
import "./Input.css";
import TodoElement from "./TodoElement";

const Input = () => {
  const [info, setInfo] = useState("");
  const [todos, setTodos] = useState([]);

  const inputChangeHandler = (e) => {
    setInfo(e.target.value);
  };
  const buttonHandler = (e) => {
    e.preventDefault();

    if (info !== "") {
      const taskDetails = {
        value: info,
      };
      setTodos([...todos, taskDetails]);
    }
    setInfo("");
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form className="form-container">
        <input
          className="todo-input"
          type="text"
          name="text"
          placeholder="Todo Input"
          onChange={inputChangeHandler}
          value={info}
        />
        <button className="todo-button" onClick={buttonHandler}>
          Add
        </button>
      </form>
      <TodoElement todos={todos} />
    </div>
  );
};

export default Input;
