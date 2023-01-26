import React, {useState} from 'react'
import { AiOutlineRest } from "react-icons/ai";

function TodoList() {
    const [input, setInput] = useState('');
    const [task, setTask] = useState([]);

    const addTask = (e) => {
        e.preventDefault();
        const newTask = {
          text: input,
          completed: false
        }
        if(input === '') return;
        setTask([...task, newTask]);
        setInput('');
      }
      
        // Edit task
  const editTask = (title, id) => {
    const newTasks = task.map((task) =>
      task.id === id ? { title, id } : task
    )
  }
        
    const  remove = (index) => {
        
        setTask(task.filter((_item,i)=> i !== index));
        console.log(index);
    
    }
    
    const toggleChecked = (index) => {
        const taskList = [...task]; // create a copy of the original task list
        const obj = {...taskList[index]}; // create a copy of the task object at the given index
        obj.completed = !obj.completed; // toggle the completion status of the copied task object
        taskList[index] = obj; // update the original task list with the copied and modified task object
        setTask(taskList); // update the state with the updated task list
        console.log(index);
    }
    

    
    return (
        <div className="container TODO_lIST">
            <h1 className="heading">TaskMaster</h1>
            <form onSubmit={addTask}>
                <input
                    placeholder="New Task?"
                    className="in-text"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <button className="add-btn">Add Task</button>
            </form>
            <div className="task-list">
                {task.map((item, i) => (
                    <div className="task" key={i}>
                        <div className="task-text" style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                            {item.text}
                        </div>
                        <div className="task-controls">
                            <input
                                className="check"
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => toggleChecked(i)}
                            />
                            <button className="delete-btn" onClick={() => remove(i)}><AiOutlineRest  /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
}

export default TodoList