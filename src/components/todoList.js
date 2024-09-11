import React, { useState } from 'react'; 

function Todolist(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.item);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    props.editItem(props.index, editText);
    setIsEditing(false);
  };

  return (
    <li className="list-item">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span>{props.item}</span>
      )}
      <span className="icons">
        {isEditing ? (
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="edit-btn" onClick={handleEdit}>
            Edit
          </button>
        )}
        <button
          className="delete-btn"
          onClick={() => {
            props.deleteItem(props.index);
          }}
        >
          Delete
        </button>
      </span>
    </li>
  );
}

export default Todolist;
