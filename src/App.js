import { useTaskCreator } from "./hooks/useTaskCreator";
import { ContainerTasks } from "./components/ContainerTasks";
import { FormTaskCreator } from "./components/FormTaskCreator";
import { Header } from "./components/Header";

function App() {
  const {
    handleSubmit,
    handleChance,
    formTask,
    handleUpdate,
    handleDelete,
    tasksItems,
  } = useTaskCreator();
  const styleMain = {
    backgroundColor: "#ff34f",
    color: "#fff",
    minHeight: "100vh",
  };
  return (
    <main className="container-fluid" style={styleMain}>
      <Header />
      <FormTaskCreator
        formTask={formTask}
        handleSubmit={handleSubmit}
        handleChance={handleChance}
      />
      <ContainerTasks
        tasks={tasksItems}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </main>
  );
}

export default App;
