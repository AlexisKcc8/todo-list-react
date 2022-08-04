export const TodoCard = (props) => {
  const { task, setEdit, handleDelete } = props;
  return (
    <div
      className="card text-center text-dark overflow-hidden"
      style={{ minHeight: "15rem" }}
    >
      <div className="card-header">{task.nameTask}</div>
      <div className="card-body d-flex flex-column align-items-center justify-content-center">
        <p
          className="card-text"
          style={{ overflowRrap: "break-word", maxWidth: "90%" }}
        >
          {task.taskDescription}
        </p>

        <div className="card-text">
          <button
            className="btn btn-primary mx-2"
            onClick={() => setEdit(true)}
          >
            Edit
          </button>

          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <div className="card-footer text-muted">{task.date}</div>
    </div>
  );
};
