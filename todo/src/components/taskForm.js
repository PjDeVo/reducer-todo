import React from "react";

const TaskForm = (props) => {
  console.log(props);
  return (
    <form onSubmit={props.onSubmit}>
      <label>Add Task</label>

      <input
        className="new-task-input"
        type="text"
        name="newTaskInput"
        value={props.task}
        onChange={props.handleChanges}
      />

      <button> Add</button>
    </form>
  );
};

export default TaskForm;
