import { useState } from "react";

export const useTaskUpdate = (task, onUpdate, onDelete) => {
  const [edit, setEdit] = useState(false);
  const [updateTask, setUpdateTask] = useState(task);

  const handleChance = (e) => {
    setUpdateTask({
      ...updateTask,
      [e.target.name]: e.target.value.toLowerCase(),
      date: new Date().toLocaleString(),
    });
  };
  const handleUpdate = () => {
    onUpdate(updateTask);
    setEdit(false);
  };
  const handleDelete = () => {
    onDelete(task);
  };

  return {
    edit,
    setEdit,
    updateTask,
    setUpdateTask,
    handleChance,
    handleUpdate,
    handleDelete,
  };
};
