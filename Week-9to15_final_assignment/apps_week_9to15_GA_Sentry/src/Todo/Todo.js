import { useEffect, useState } from "react";
import ReactGA from "react-ga";

function ToDo() {
  // states
  const [task, setTask] = useState("");
  const [store, setStore] = useState([]);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  console.log(task,store, completedTaskCount, "check");

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  // add task fun
  const addTodo = () => {
    ReactGA.event({
      category: "Task",
      action: "Add Task",
    })
    const id = store.length + 1;
    setStore((prev) => [
      ...prev,
      {
        id: id,
        Task: task,
        complete: false,
      },
    ]);
    setTask("");
  };

  // when task completes fun
  const handleComplete = (id) => {
    let list = store.map((task) => {
      let item = {};
      if (task.id === id) {
        if (!task.complete) {
          //Task is pending, modifying it to complete and increment the count
          setCompletedTaskCount(completedTaskCount + 1);
        } else {
          //Task is complete, modifying it back to pending, decrement Complete count
          setCompletedTaskCount(completedTaskCount - 1);
        }
        item = { ...task, complete: !task.complete };
      } else item = { ...task };
      return item;
    });
    setStore(list);
  };

  return (
    <div className="App">
      <h3>To Do List</h3>

      <span>
        <input
          type="text"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          id="task"
        />
        <button onClick={addTodo}>Add</button>
      </span>

      <ul>
        {store.map((todo) => {
          return (
            <li
              complete={todo.complete}
              id={todo.id}
              onClick={() => handleComplete(todo.id)}
              style={{
                listStyle: "none",
                textDecoration: todo.complete && "line-through",
              }}
            >
              {todo.Task}
            </li>
          );
        })}
      </ul>
      <span>
      <b>Completed Tasks</b> {completedTaskCount}
      </span>
    </div>
  );
}

export default ToDo;
