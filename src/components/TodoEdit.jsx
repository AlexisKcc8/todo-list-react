export const TodoEdit = (props) => {
  const { setEdit, handleChance, updateTask, handleUpdate } = props;

  return (
    <div
      className="card text-center text-dark overflow-hidden"
      style={{ minHeight: "15rem" }}
    >
      <input
        type="text"
        name="nameTask"
        value={updateTask.nameTask}
        onChange={handleChance}
      />
      <div className="card-body d-flex flex-column align-items-center justify-content-center">
        <p
          className="card-text"
          style={{ overflowRrap: "break-word", maxWidth: "90%" }}
        ></p>
        <textarea
          style={{ resize: "none", width: "20rem", margin: ".5em 0" }}
          name="taskDescription"
          cols="30"
          rows="5"
          required
          onChange={handleChance}
          value={updateTask.taskDescription}
        ></textarea>

        <div className="card-text">
          <button className="btn btn-primary mx-2" onClick={handleUpdate}>
            Update
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => setEdit(false)}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="card-footer text-muted">{updateTask.date}</div>
    </div>
  );
};
