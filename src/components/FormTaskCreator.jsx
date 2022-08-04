export const FormTaskCreator = (props) => {
  const { formTask, handleSubmit, handleChance } = props;

  return (
    <section className="container-fluid">
      <div className="row ">
        <div className="col-12 mt-4 text-center">
          <form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <input
              style={{ width: "20rem" }}
              name="nameTask"
              type="text"
              placeholder="write your task here"
              required
              onChange={handleChance}
              value={formTask.nameTask || ""}
            />

            <textarea
              style={{ resize: "none", width: "20rem", margin: ".5em 0" }}
              name="taskDescription"
              cols="30"
              rows="5"
              required
              onChange={handleChance}
              placeholder="write your description task here"
              value={formTask.taskDescription || ""}
            ></textarea>

            <button style={{ width: "10rem" }} className="btn btn-success">
              Save task
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
