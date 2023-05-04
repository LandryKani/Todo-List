import React from 'react';
import TodoItem from './TodoItem';

function TodoList( {todoArray, deleteTodo, editTodo} ) {
  return (
    <ul className='parent'>

      {
        todoArray.map((todo)=>{
          return(
            <TodoItem todo={todo} key={todo.id} deleteTodo={deleteTodo}  editTodo={editTodo}/>
          )
        })
      }
        
    </ul>
    
  )
}

export default TodoList