import * as React from "react";

type Props = {
  todo: ITodo;
  updateTodo: (id: number, data: ITodo) => void;
  findTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  completeTodo: (id: number) => void;
  status: boolean
};

const Todo: React.FC<Props> = ({ todo, findTodo, removeTodo, completeTodo, status }) => {
  return (
    <div className="Card mydivouter">
      <div className="Card--text">
        <h1 onDoubleClick={()=> alert('double click')} className={status? "line-through":""}>{todo.title}</h1>
      </div>
      <div className="mybuttonoverlap btn btn-info">
        <button
          onClick={() => findTodo(todo?.id || 0)}
          className="Card--button"
        >
          Edit
        </button>

        <button
          onClick={() => removeTodo(todo?.id)}
          className="Card--button-remove"
        >
          Remove
        </button>
        <button
          onClick={() => completeTodo(todo?.id)}
          className="Card--button-remove"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default Todo;
