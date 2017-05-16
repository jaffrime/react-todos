import React from 'react';

const TodoListItem = ({todo}) => {
  return (
    <div className="todo-list-item">
      <div>
        <input type="checkbox"/>
        <span> {todo} </span>
        <a href="#" style={{textAlign: "right"}}>delete</a>
      </div>
    </div>
  );
}

export default TodoListItem;
