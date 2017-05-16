import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({todos}) => {
  // console.log(todos, "in the todo-list component");
  let itemKey = -1;
  const todoItems = todos.map(todo => {
    itemKey += 1;
    return (
      <TodoListItem
        todo={todo}
        key={itemKey}
      />
    )
  })

  return (
    <div className="todo-list">
      {todoItems}
    </div>
  );
}

export default TodoList;
