import "./App.css";
import { TaskCard } from "./Components/Task-card";

function App() {
  return (
    <>
      <div className="grid-container">
        <div className="title todo">ToDo</div>
        <div className="title done">Done</div>

        <TaskCard className="done" name="Task 1" description="" />
        <TaskCard className="todo" name="Task 2" description="" />
        <TaskCard className="done" name="Task 3" description="" />
        <TaskCard className="done" name="Task 4" description="" />
      </div>
    </>
  );
}

export default App;
