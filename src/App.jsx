import React from "react";
import { useState } from "react";
import "./global.scss";

function App() {
  const [itemList, setItemList] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleAddingItem() {
    const noSpacingText = inputText.trim();
    if (noSpacingText == "") return;

    let newItem = {
      id: Date.now(),
      itemList: noSpacingText,
    };

    setItemList([...itemList, newItem]);
    setInputText("");
  };

  function handleDeleteItem(item) {
    setItemList((prevList) => prevList.filter((list) => list != item));
  };
  return (
    <>
    <h1 className="title">Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
    <div className="container">
    <ul className="list">
        {itemList.map((item) => (
          <li className="item" key={item.id}>
            {item.itemList}
            <button className="deleteItem" onClick={()=> handleDeleteItem(item)}><img src="/iconDel.png"/></button>{" "}
          </li>
        ))}
      </ul>
      <div>
        <input
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

export default App;
