
import { useState } from 'react';
import './App.css';
import ToDoLists from './ToDoLists';

function App() {
  const [inputList, setInputList ] = useState("");
  const [item, setItems] = useState([]);

  const itemEvent = (event) => {
   setInputList(event.target.value)
  }
  const itemList = ()=> {
   setItems((oldItems) => {
    return [...oldItems, inputList];
   });
   setInputList("");
  };

  const deleteItems= (id) => {
    console.log('deleted')
   
    setItems((oldItems) =>{
       return oldItems.filter((errElem, index) => {
        return index !== id;
       })
    })

   };

  return (
    <>
    <div className="main-app">
      <div className="center-app">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder='Add Item' 
        value={inputList}
        onChange={itemEvent} />
        <button onClick={itemList}> + </button>
        
        <ol>
          {item.map((itemeval,index) =>{
            return (
              
               <ToDoLists 
               id={index}
               key={index}
               text={itemeval} 
               onSelect={deleteItems}
               />
            );
          })}
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;
