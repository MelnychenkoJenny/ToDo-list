import { Button } from "components/Button/Button";
import { useDispatch } from "react-redux";
// import { addTask } from "redux/actions";
import { addTask } from "reduxAsync/operations";
import css from "./TaskForm.module.css";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const form = event.target;
    if(form.elements.text.value.trim()==='') {
      return alert('Hey. Cannot add/execute an empty task. Come up with a name/description.')
    }
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};