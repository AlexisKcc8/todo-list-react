import { TodoCard } from "./TodoCard";
import { TodoEdit } from "./TodoEdit";
import { useTaskUpdate } from "../hooks/useTaskUpdate";

export const Todo = (props) => {
  const { task, onUpdate, onDelete } = props;
  const {
    edit,
    setEdit,
    updateTask,
    handleDelete,
    handleChance,
    handleUpdate,
  } = useTaskUpdate(task, onUpdate, onDelete);

  return (
    <div className="col-sm-12 col-xl-4 mb-2">
      {edit ? (
        <TodoEdit
          setEdit={setEdit}
          updateTask={updateTask}
          handleChance={handleChance}
          handleUpdate={handleUpdate}
        />
      ) : (
        <TodoCard task={task} setEdit={setEdit} handleDelete={handleDelete} />
      )}
    </div>
  );
};
