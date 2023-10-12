import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function Todos() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  }

  function removeTask(item) {
    const updatedTask = tasks.filter(function (task) {
      return task.id !== item.id;
    });

    setTasks(updatedTask);
  }

  function toggleTask(item) {
    const updatedTask = tasks.map(function (task) {
      if (task.id === item.id) {
        task.done = !task.done;
        return task;
      } else {
        return task;
      }
    });
    setTasks(updatedTask);
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Todo
            key={task.id}
            task={task}
            remove={removeTask}
            toggleTask={toggleTask}
          />
        ))}
      </ul>
      <TodoForm addTask={addTask} />
    </div>
  );
}
