interface ITodo {
  id: number;
  title: string;
  status: boolean
}

type ContextType = {
  todos: ITodo[];
  selectedTodo?: ITodo;
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number, data: ITodo) => void;
  findTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  searchTodo: (title: string) => void;
  completeTodo: (id: number) => void;
  setSelectedTodo,
  setSearchTitle,
  searchTitle: string
};
