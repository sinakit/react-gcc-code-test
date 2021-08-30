import * as React from "react";
import { TodoContext } from "../context/todoContext";

const AddTodo: React.FC = () => {
  const { saveTodo, todos, selectedTodo, setSelectedTodo, updateTodo } =
    React.useContext(TodoContext) as ContextType;
  const [formData, setFormData] = React.useState<Partial<ITodo>>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      title: e.currentTarget.value,
    });
    if (selectedTodo?.id) {
      setSelectedTodo({ ...selectedTodo, title: "" });
    }
  };

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    const existTitle = todos.find((v) => v.title === formData?.title);
    console.log("exist title:", existTitle);
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
            pattern="^(?=[A-Za-z0-9])([A-Za-z0-9\s]*)(?<=[A-Za-z0-9])$"
          />
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
