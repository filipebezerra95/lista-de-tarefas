import { useState } from "react";
import "./TodoList.scss";
import BoxSelection from "../components/BoxSelection/BoxSelection";
import Checkbox from "../components/CheckBox/Checkbox";
import ButtonEdit from "../components/ButtonEdit/ButtonEdit";
import ButtonDelete from "../components/ButtonDelete/ButtonDelete"
import AddButton from "../components/AddButton/AddButton"

function TodoList(){
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [todoList,setTodoList] = useState([
        {
        name: "fazer compras",
        done: true,
    },
]);
const [todoInput, setTodoInput] = useState ("");
const [todoSelectedIndex, setTodoSelectedIndex] = useState(null);

const onClickEdit = (index) => {
    setIsBoxOpen(true);
    setIsEdit(true);
    setTodoSelectedIndex(index);
};

const onClickDelete = (index) => {
    setIsBoxOpen(true);
    setIsEdit(false);
    setTodoSelectedIndex(index);
};

const onCloseBox = (isConfirm, todoNameEdit) => {
    setIsBoxOpen(false);

    if (isConfirm) {
        if (isEdit) {
            const newTodoList = [...todoList];
            newTodoList[todoSelectedIndex].name = todoNameEdit;

            setTodoList(newTodoList);
        }
    }
};

const onClickAdd = () => {
    if (todoInput === "") { // Usando === para comparação estrita
      alert("Digite uma tarefa");
    } else {
      setTodoList([
        ...todoList,
        {
          name: todoInput,
          done: false,
        },
      ]);
      setTodoInput("");
    }
  };

const onTodoInputChange = (e) => {
    setTodoInput(e.target.value);
};

const onTodoInputKeyUp = (e) => {
    if (e.key === "Enter") {
        onClickAdd();
    }
};

const onCheck = (index, isChecked) => {
    const newTodoList = [...todoList];
    setTodoList[index].done = isChecked;

    setTodoList(newTodoList);
}

return (
    <div id="todo-list">
        {isBoxOpen && (
            <BoxSelection 
                isOpen={isBoxOpen}
                isEdit={isEdit}
                selected={todoList[todoSelectedIndex]}
                onCloseBox={onCloseBox}
            />
        )}
        <div className="title">
            Otimize seu tempo e se organize com o nosso Planejador Diário.
        </div>
        <table>
            <thead>
                <tr>
                    <th className="left">Tarefas</th>
                    <th className="center">Status</th>
                    <th className="right">Opções</th>
                </tr>
            </thead>
            <tbody>
                {todoList.map((item,index) => {
                    return (
                        <tr key={index}>
                            <td className="left">{item.name}</td>
                            <td className="center">
                                <Checkbox isChecked={item.done} onCheck={(isChecked) => onCheck(index, isChecked)}/>
                            </td>
                            <td className="right">
                                <ButtonEdit onClick={() => onClickEdit(index)} />
                                <ButtonDelete onClick={() => onClickDelete(index)} />
                            </td>
                        </tr>
                    );
                })}
                <tr>
                    <td className="left">
                        <input
                        value={todoInput}
                        type="text"
                        placeholder="Nova Tarefa..."
                        onChange={onTodoInputChange}
                        onKeyUp={onTodoInputKeyUp}
                        />
                    </td>
                    <td className="center"></td>
                    <td className="right">
                      <AddButton onClick={onClickAdd} />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);
} 
  
export default TodoList;