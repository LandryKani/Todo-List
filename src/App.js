// import logo from './logo.svg';
import "./App.css";
import TodoList from "./components/TodoList";
// import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import React, { useState } from "react";

function App() {
  const [todoArray, setTodoArray] = useState([
  ]);
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);
  // const [errorTodo, setErrorTodo] = useState(false);
  const [todoEdit, setTodoToEdit] = useState("");

  const deleteTodo = (t) => {
    // const removeTodo = todoArray.filter((todo) => todo.id !== t.id);
    setTodoArray(todoArray.filter((todo) => todo.id !== t.id));
  };

  const editTodo = (t) => {
    setTodoToEdit(t);

    // let editTodo = todoArray.find((todo) => todo.id === id);
    setTodo(t.content);
  };

  const changeTodo = (e) => {
    setTodo(e.target.value);
  };

  const saveTodo = (e) => {

    if (todo.trim() === "") {
      setError(true);
      setTodo("");
      return;
    }

    var newTodo = {
      id: new Date().getTime(),
      content: todo,
    };

    if(!!todoEdit) {
      console.log("update")
      const new_array = todoArray.map((item) => {
        if(item.id === todoEdit.id) {
          return newTodo;
        } else {
          return item;
        }
      })
      setTodoArray(new_array);
      setTodoToEdit(null)
      setTodo("");
    } else {
      setTodoArray([...todoArray, newTodo]);
      setTodo("")
    }
    
  };

  return (
    // <Routes>
    <>
      <Home
        todo={todo}
        changeTodo={changeTodo}
        handleSave={saveTodo}
        error={error}
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
