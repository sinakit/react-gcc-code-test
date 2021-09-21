import * as React from 'react';

import { TodoContext } from '../context/todoContext';
import Todo from '../components/Todo';

const Todos = () => {
  const { todos, updateTodo, findTodo, removeTodo, searchTitle, completeTodo } = React.useContext(
    TodoContext
  ) as ContextType;
  const [newTodo, setNewTodo] = React.useState(todos);
  React.useEffect(()=>{
     if (searchTitle) {
      const searchTodo = todos.filter(v=> v.title.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase()));
      setNewTodo([...searchTodo]);
     }else {setNewTodo([...todos])}
  },[searchTitle])
  return (
    <React.Fragment>
      {newTodo && newTodo.length?newTodo.map((todo: ITodo) => (
        <Todo
          key={todo.id}
          updateTodo={updateTodo}
          todo={todo}
          findTodo={findTodo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          status={todo.status}
        />
      )): <h1>No tasks founds</h1>}
    </React.Fragment>
  );
};

export default Todos;
