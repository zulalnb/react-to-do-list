import React, { useState } from "react";

function Header({ addTodo, todoList }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.trim() === "") {
      setTodo("");
      return false;
    }

    addTask(todo);
    setTodo("");
  };

  const addTask = (todo) => {
    let copy = [...todoList];
    copy = [...copy, { id: copy.length + 1, task: todo, completed: false }];
    addTodo(copy);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          autoFocus
        />
      </form>
    </header>
  );
}

export default Header;
