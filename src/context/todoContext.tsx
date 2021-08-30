import * as React from "react";

export const TodoContext = React.createContext<ContextType | null>(null);

const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [selectedTodo, setSelectedTodo] = React.useState<ITodo>();
  const [todos, setTodos] = React.useState<ITodo[]>([
    {
      id: 1,
      title: "task 1",
    },
    {
      id: 2,
      title: "task 2",
    }
  ]);

  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(), // not really unique - but fine for this example
      title: todo.title,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number, data: ITodo) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.title = data.title;
        setTodos([...todos]);
      }
    });
  };
  const findTodo = (id: number) => {
    todos.find((todo: ITodo) => {
      if (todo.id === id) {
        setSelectedTodo(todo);
      }
    });
  };

  const removeTodo = (id: number) => {
    console.log('id to remove:', id);
    todos.splice(todos.findIndex(todo => todo.id === id) , 1);
    setTodos([...todos]);
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo, selectedTodo, findTodo, setSelectedTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
