import { useState } from "react";
import "./BoxSelection.scss";

function BoxSelection(props) {
  const [todoInput, setTodoInput] = useState(
    props.selectedTodo ? props.selectedTodo.name : ""
  );

  const onClickNo = () => {
    props.onCloseBox(false);
  };

  const onClickYes = () => {
    if (props.isEdit) {
      if (todoInput === "") {
        alert("Digite uma tarefa");
      } else {
        props.onCloseBox(true, todoInput);
      }
    } else {
      props.onCloseBox(true);
    }
  };

  const onTodoInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  return (
    <div id="box">
      <p id="title">
        {props.isEdit
          ? "Deseja editar esse Item?"
          : "Deseja excluir este item?"}
      </p>
      {props.isEdit ? (
        <>
          <p id="text">Colocar as descrições das tarefas aqui.</p>
          <div className="input-container">
            <input
              value={todoInput}
              type="text"
              placeholder="Editar Tarefa..."
              onChange={onTodoInputChange}
            />
          </div>
        </>
      ) : (
        <div className="todo-details">
          <div className="todo-name">
            {props.selected ? props.selected.name : ""}
          </div>
        </div>
      )}
      <div id="buttons">
        <button id="no" onClick={onClickNo}>
          Não
        </button>
        <button id="yes" onClick={onClickYes}>
          Sim
        </button>
      </div>
    </div>
  );
}

export default BoxSelection;
