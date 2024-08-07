import React, { useState } from "react";
import CreateTask from "./components/ CreateTask";
import Header from "./components/Header";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTask] = useState([
    { id: 1, task: "Research study abroad programs", isDone: false },
    {
      id: 2,
      task: "Create Facebook page for translating podcasts",
      isDone: false,
    },
    {
      id: 3,
      task: "Record and edit first podcast translation video",
      isDone: true,
    },
    { id: 4, task: "Upload video to Facebook page", isDone: false },
    { id: 5, task: "Promote the Facebook page on social media", isDone: true },
  ]);

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const doneTask = (id) => {
    setTask(
      tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  return (
    <div className="p-10">
      <Header />
      <CreateTask addTask={addTask} />
      <TaskList doneTask={doneTask} removeTask={removeTask} tasks={tasks} />
    </div>
  );
};

export default App;
