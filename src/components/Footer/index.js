import React, { useEffect, useState } from "react";

function Footer({ todoList, setTodoList, visibleTodos, setVisibleTodos }) {
  const [showTodos, setShowTodos] = useState("all");

  const clear = () => {
    let filtered = todoList.filter((todo) => {
      return !todo.completed;
    });
    setTodoList(filtered);
  };

  useEffect(() => {
    const filterActive = todoList.filter((todo) => !todo.completed);
    const filterCompleted = todoList.filter((todo) => todo.completed);

    showTodos === "all"
      ? setVisibleTodos(todoList)
      : showTodos === "active"
      ? setVisibleTodos(filterActive)
      : setVisibleTodos(filterCompleted);
  }, [showTodos, todoList, setVisibleTodos]);

  if (!todoList.length) {
    return null;
  }

  const activeCount = visibleTodos.filter((item) => item.completed === false)
    .length;
  const itemWord = activeCount === 1 ? "item" : "items";

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || "No"}</strong> {itemWord} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={showTodos === "all" ? "selected" : ""}
            onClick={() => setShowTodos("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={showTodos === "active" ? "selected" : ""}
            onClick={() => setShowTodos("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={showTodos === "completed" ? "selected" : ""}
            onClick={() => setShowTodos("completed")}
          >
            Completed
          </a>
        </li>
      </ul>

      {todoList.some((item) => item.completed) && (
        <button className="clear-completed" onClick={clear}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Footer;
