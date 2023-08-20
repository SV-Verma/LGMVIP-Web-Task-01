import React from 'react'
import { FaTimesCircle } from 'react-icons/fa';

function ToDoLists(props) {
  
   

  return (
    <div>
        <div className="todo-main">
        <FaTimesCircle onClick={() => {
          props.onSelect(props.id)
        }
        } />
       <li>{props.text}</li>
       </div>
    </div>
  )
}

export default ToDoLists
