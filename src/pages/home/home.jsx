import React, { useState } from "react";
import "./index.scss";
import DeleteBox from "../../components/deleteBox/deleteBox";
import Header from "../../components/header/header";
import AddingBox from "../../components/addingBox/addingBox";


function Home() {
  const [itemList, setItemList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  function handleAddingItem() {
    const noSpacingText = inputText.trim();
    if (noSpacingText === "") return;

    let newItem = {
      id: Date.now(),
      texto: noSpacingText,
      completado: false,
    };

    setItemList([...itemList, newItem]);
    setInputText("");
  }

  const marcarCompleto = (id) => {
    const updateTodos = itemList.map((item) => {
      if (item.id === id) {
        return { ...item, completado: !item.completado };
      }
      return item;
    });
    setItemList(updateTodos);
  };

  function handleDeleteItem(item) {
    setItemList((prevList) => prevList.filter((list) => list !== item));
  }

  function handelEditItem(id, texto) {
    setEditId(id);
    setEditText(texto);
  }

  function handleSaveEdit(id) {
    const updateItems = itemList.map((item) => {
      if (item.id ===id) {
        return {...item, texto: editText };
      }
      return item;
    });
    setItemList(updateItems);
    setEditId(null);
    setEditText("");
  }

  return (
    <>
      <Header />
      <h1 className="title">
        Otimize seu tempo e se organize com o nosso Planejador Diário.
      </h1>
      <div className="container">
      
        <ul className="list">
        <div className="title-table">
          <span className="task">Tarefa</span>
          <span className="actions">Status</span>
          <span className="actions">opções</span>
        </div>
        <img src="./line.svg"/>
          {itemList.map((item) => (
            <li className="item" key={item.id}>
              {editId === item.id ? (
                <>
                 <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)}/>
                 <button onClick={()=> handleSaveEdit(item.id)}>salvar</button>
                </>
              ) : (
              <>
              <span style={{ textDecoration: item.completado ? "line-through" : "none" }}>
                {item.texto}
              </span>
              <input
                type="checkbox"
                checked={item.completado}
                onChange={() => marcarCompleto(item.id)}
              />
              <button className="editItem" onClick={() => handelEditItem(item.id, item.texto)}><img src="/editar1.png" className="icons" alt="Delete" /></button>
              <button className="deleteItem" onClick={() => handleDeleteItem(item)}>
                <img src="/deleteIcon.svg" className="icons" alt="Delete" />
              </button>
              </>
              )}
            </li>
          ))}
        </ul>
        <div>
          <input
            className="newTask"
            type="text"
            value={inputText}
            placeholder="nova tarefa..."
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className="addingItem" onClick={handleAddingItem}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;