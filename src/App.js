// import logo from './logo.svg';
import "./App.css";
import TodoList from "./components/TodoList";
// import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import React, { useState } from "react";

function App() {
  const [todoArray, setTodoArray] = useState([]);
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);
  // const [errorTodo, setErrorTodo] = useState(false);
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);

  const deleteTodo = (id) => {
    const removeTodo = todoArray.filter((todo) => todo.id !== id);
    setTodoArray(removeTodo);
  };

  const editTodo = (id) => {
    setEdit(true);
    setId(id);
    let editTodo = todoArray.find((todo) => todo.id === id);
    setTodo(editTodo.content);
  };

  const changeTodo = (e) => {
    setTodo(e.target.value);
  };

  const saveTodo = (e) => {
    var newTodo = {
      id: new Date().getTime(),
      content: todo,
    };
    console.log("valeur du todo :", todo);
    if (edit) {
      let tempTasks = todoArray.map((todo) => {
        let currentTask = {};
        todo.id === id
          ? (currentTask = { ...todo, content: newTodo.content })
          : (currentTask = todo);

        return currentTask;
      });

      setTodoArray(tempTasks);
      setTodo("");
    } else if (todo) {
      setEdit(false);
      setTodoArray([newTodo, ...todoArray]);
      setError(false);
      setTodo("");
    }
    if (todo === "") {
      setError(true);
      setTodo("");
    }
    console.log("tableau :", todoArray);
  };

  return (
    // <Routes>
    <>
      <Home
        todoArray={todoArray}
        setTodoArray={setTodoArray}
        todo={todo}
        changeTodo={changeTodo}
        handleSave={saveTodo}
        error={error}
        // erroTodo={errorTodo}
      />
      <TodoList
        todoArray={todoArray}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  );
}

export default App;
