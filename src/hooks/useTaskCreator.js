import { useState, useEffect } from "react";
import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";
export const useTaskCreator = () => {
  const [formTask, setFormTask] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [tasksItems, setTasksItems] = useState([]);
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  const handleChance = (e) => {
    setFormTask({
      ...formTask,
      id: nanoid(),
      [e.target.name]: e.target.value.toLowerCase(),
      done: false,
      date: new Date().toLocaleString(),
    });
  };

  const createTask = (task) => {
    if (!tasksItems.find((t) => t.nameTask === task.nameTask)) {
      setTasksItems([...tasksItems, task]);
    } else {
      alert(`La tarea ${task.nameTask} ya se encuentra registrada`);
    }
  };

  const handleUpdate = (value) => {
    const tasksChange = tasksItems.map((t) => (t.id === value.id ? value : t));
    console.log(tasksChange);
    setTasksItems(tasksChange);
  };

  const handleDelete = (value) => {
    if (window.confirm(`Are you sure delete todo "${value.nameTask}"`)) {
      const todosFilters = tasksItems.filter((t) => t.id !== value.id);
      setTasksItems(todosFilters);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(formTask);
    setFormTask({
      [e.target.name]: "",
    });
  };

  return {
    handleSubmit,
    handleChance,
    formTask,
    isEdit,
    setIsEdit,
    handleUpdate,
    handleDelete,
    tasksItems,
  };
};
