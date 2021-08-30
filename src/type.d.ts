interface ITodo {
  id: number;
  title: string;
}

type ContextType = {
  todos: ITodo[];
  selectedTodo?: ITodo;
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number, data: ITodo) => void;
  findTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  setSelectedTodo
};
