import React, { useState } from "react";

const CreateTask = ({addTask}) => {
    const [job,setJob] = useState("");
    const handleOnChange = (event) => {
       setJob(event.target.value);
    };

    const handleAddTask = () => {
      const newTask = {
        id : Date.now(), 
        task : job ,
        isDone: false,
      }
        addTask(newTask);
        setJob("");
    }
  return (
    <div className=" flex  mb-5">
      <input
        type="text"
        className="bg-slate-200 flex-grow border-2 border-slate-300  rounded-l-lg p-2"
        onChange={handleOnChange}
        value={job}
        placeholder="Type your Tasks"
      />

      <button onClick={handleAddTask} className=" border-2 border-slate-300 rounded-r-lg py-2 px-4 ">
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
