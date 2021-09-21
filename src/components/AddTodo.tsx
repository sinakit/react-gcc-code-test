import * as React from "react";
import { TodoContext } from "../context/todoContext";

const AddTodo: React.FC = () => {
  const { saveTodo, todos, selectedTodo, setSelectedTodo, updateTodo, searchTodo } =
    React.useContext(TodoContext) as ContextType;
  const [formData, setFormData] = React.useState<Partial<ITodo>>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    const title = e.currentTarget.value;
    console.log('on change title:', title);
    searchTodo(title);
    setFormData({
      ...formData,
      title
    });
    if (selectedTodo?.id) {
      setSelectedTodo({ ...selectedTodo, title: "" });
    }
    
  };

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    console.log('form data:', formData);
    console.log('todos:', todos);
    const existTitle = todos.find((v) => v.title.toLowerCase() === formData?.title.trim().toLowerCase());
    if (existTitle) {
      alert("Title already exist");
      setFormData({});
      return;
    }
    selectedTodo && Object.keys(selectedTodo).length > 0
      ? updateTodo(selectedTodo.id, {
          ...selectedTodo,
          title: formData?.title || selectedTodo?.title,
        })
      : saveTodo(formData);
    // saveTodo(formData);
    setFormData({});
    setSelectedTodo({});
  };

  return (
    <form className="Form" onSubmit={(e) => handleSaveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor="name">Title</label>
          <input
            required
            onChange={handleForm}
            type="text"
            id="title"
            value={formData?.title || selectedTodo?.title || ""}
            pattern="^(?!\s*$).+"
          />
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
