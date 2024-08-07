import React from 'react'

const Task = ({job: {id, task, isDone}, removeTask, doneTask}) => {

    const handleRemoveTask = () => {
       if(confirm("Are you sure to delete?")){
        removeTask(id)
       }
    }

    const handleOnChange = () => {
      doneTask(id);
    }
  return (
   <div  className=' flex justify-between items-center border-2 p-3 border-slate-300 rounded rounded-lg mb-3 last:mb-0'>
  <div className="flex items-center gap-3">
  <input type="checkbox" checked={isDone} onChange={handleOnChange} className='size-4' />
  <p className={isDone ? "line-through" : " "}>{task}</p>
  </div>

    <button onClick={handleRemoveTask} className='bg-red-100 text-red-700 text-sm bg-red-100 hover:bg-slate-400 hover:text-white rounded rounded-r-lg py-2 px-4'> Delete</button>
   </div>
  )
}

export default Task