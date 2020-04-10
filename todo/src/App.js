import React, { useReducer, useState } from "react";

import { newReducer, initialState } from "./reducers/newReducer";
import TaskForm from "./components/taskForm";

import "./App.css";

function App() {
  const [tasksState, dispatch] = useReducer(newReducer, initialState);
  const [newTask, addNewTask] = useState("");

  const handleChanges = (e) => {
    addNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADDING_TASK", payload: newTask });
    addNewTask("");
  };

  const toggleDone = (id) => {
    dispatch({ type: "UPDATE_COMPLETED", payload: id });
  };

  return (
    <div className="App">
      <TaskForm
        handleChanges={handleChanges}
        addTask={addNewTask}
        task={newTask}
        onSubmit={handleSubmit}
      />
      <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
        {" "}
        Clear
      </button>
      <div>
        {tasksState.map((item) => {
          return (
            <div>
              <div onClick={() => toggleDone(item.id)} className="to-do">
                <h1> {item.item}</h1>
              </div>

              <h2> {item.completed ? "Completed" : "Pending"}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
