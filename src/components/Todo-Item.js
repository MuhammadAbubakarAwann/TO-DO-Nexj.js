const TodoItem = ({ id, title, handleDelete, handleEdit }) => {
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <h6>{title}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-red-600" onClick={handleDelete}>
          <i className="fas fa-trash"></i>
        </span>
        <span className="mx-2 text-green-500" onClick={handleEdit}>
          <i className="fas fa-pen"></i>
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
