import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from './components/Modal'
import { SearchBox } from "./components/SearchBox";

function App() {
  const [searchText, setSearchText] = useState("");
   
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([
      {title: "Não sei 1", done: false },
      {title: "Não sei 2", done: true },
      {title: "Não sei 3", done: true },
    ]);
  }, []);

  function addAction(newItem){
    let newList = [...list, {title:newItem, done:false}];
    setList(newList);
  }


  function handleToogleDone(index){
    let newList = [...list]

    newList[index].done = !newList[index].done;

    setList(newList)
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox
        frasePadrao="Adicione um Item"
        onEnter={addAction}
        
      />

      <hr />

      <ul>
        {list.map((item, index) => {
          return (
          <li key={index}>
            {!item.done &&
              <del>{item.title}</del>
            }
            {item.done &&
              item.title
            }
            <button onClick={() => handleToogleDone(index)}>
              {!item.done && 
                'Desfazer'
              }
              {item.done && 
                'Feita'
              }
            </button>
            
          </li>
          )
        })}
      </ul>
    </>
  );
}

export default App;
