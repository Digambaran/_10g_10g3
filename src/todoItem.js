import React from "react";
// import "./styles.css";

export const Item = ({ id, item, refetch }) => {
  const removeTodoBaseUrl = process.env.BLOX_ENV_URL_removeTodo;
  
  const handleDelete = (e) => {
    e.preventDefault();
    const idToRemove = e.target.value.trim();

    fetch(`${removeTodoBaseUrl}/removeTodo`, {
      method: "delete",
      body: JSON.stringify({ id: idToRemove }),
    })
      .then((res) => res.json())
      .then(({ status }) => {
        console.log(status);
        refetch(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div id={id} className="todo-item">
        <div>
          <p>{item}</p>
        </div>
        <div>
          <button value={id} onClick={handleDelete}>
            delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
