import React from "react";
// import { TodoCard } from "./TodoCard";
import { Todo } from "./Todo";

export const ContainerTasks = (props) => {
  const { tasks, handleUpdate, handleDelete } = props;
  return (
    <section className="container text-center mt-4">
      <div className="row">
        {tasks.map((task) => (
          <Todo
            key={task.id}
            task={task}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
};
