import React from "react";
import "../assets/home.css";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TodoItem({ todo, deleteTodo, editTodo }) {
  const processDelete = () => {
    deleteTodo(todo.id);
  };
  return (
    <li className="body__input__value__save">
      <div className="input__value__save">{todo.content}</div>
      <br/> <br/>
      <button className="update">
        <FontAwesomeIcon
          icon={faPen}
          onClick={() => {
            editTodo(todo.id);
          }}
        />
      </button>
      <button className="delete">
        <FontAwesomeIcon icon={faDeleteLeft} onClick={processDelete} />
      </button>
    </li>
  );
}

export default TodoItem;
