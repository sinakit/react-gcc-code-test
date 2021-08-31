import * as React from 'react';

import { TodoContext } from '../context/todoContext';
import Todo from '../components/Todo';

const Todos = () => {
  const { todos, updateTodo, findTodo, removeTodo } = React.useContext(
    TodoContext
  ) as ContextType;
  return (
    <React.Fragment>
      {todos.map((todo: ITodo) => (
        <Todo
          key={todo.id}
          updateTodo={updateTodo}
          todo={todo}
          findTodo={findTodo}
          removeTodo={removeTodo}
        />
      ))}
    </React.Fragment>
  );
};

export default Todos;
