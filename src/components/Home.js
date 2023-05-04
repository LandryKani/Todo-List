import React from "react";
import "../assets/home.css";
function  Home({handleSave, todo, changeTodo, error}) {
  return (
    <div className="home">
      <h1>Todo List</h1>
      {/* {erroTodo && <p>Impossible d'enregistrer les mêmes tâches</p>} */}
      {error && <p>impossible d'enregistrer des tâches vides</p> }
      <br /> <br />
      <div className="header">
        <div class="form">
          <input
            type="text"
            name="text"
            value={todo} 
            onChange={changeTodo}
            placeholder="Remplir"
            autocomplete="off"
            required
          />
          <label for="text" class="label-name">
            <span class="content-name"></span>
          </label>
        </div>
        <button type="submit" className="enregistrer" onClick={handleSave}>
          Enregistrer
        </button>
      </div>
    </div>
  );
}

export default Home;
