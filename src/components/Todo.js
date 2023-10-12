import deleteIcon from "../icons/delete.png";

export default function Todo(props) {
  const task = props.task;

  function handleDelete() {
    props.remove(task);
  }

  function handleStatusChange() {
    props.toggleTask(task);
  }

  return (
    <li className="task">
      <div className="task-details">
        <div className="left-side">
          <input
            type="checkbox"
            onChange={handleStatusChange}
            value={task.done}
          />
          <p>{task.done === true ? <del>{task.title}</del> : task.title}</p>
          <span>{task.artist}</span>
        </div>

        <div className="right-side" onClick={handleDelete}>
          <img src={deleteIcon} alt="delete icon" />
        </div>
      </div>
    </li>
  );
}
