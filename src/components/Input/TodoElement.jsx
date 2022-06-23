import React from "react";
import "./TodoElement.css";
const TodoElement = ({ todos }) => {
  return (
    <div className="todo-container">
      {todos !== [] ? (
        <ul>
          {todos.map((element, index) => {
            // const { value } = element;
            return (
              <li key={index}>
                <p>{Object.values(element)}</p>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default TodoElement;
