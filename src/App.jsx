import React from "react";
import { useState } from "react";
import "./global.scss";


interface TodoItem {
  id: string;
  texto: string;
  completado: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [newTodo, setNewTodo] = useState<String>("")
  
  const adicionarTarefa = () => {
    if(newTodo !== "") {
      const newId = crypto.randomUUID()
      const newTodoItem: TodoItem = {
        id: newId,
        texto: newTodo,
        completado: false,
      };
      setTodos([...todos, newTodoItem])
      setNewTodo("")
    }
  }
  
  return (
   <div className="app">
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <div className="input-container">
         <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
         <button onClick={adicionarTarefa}>+</button>
      </div>
      <ol>
        {
          todos.map((todo) => (
            <li key={todo.id}>
               <span>{todo.texto}</span>
            </li>
          ))
        }
      </ol>
    </div>
   </div>
  );
}

export default App;
