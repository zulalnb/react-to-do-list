import React from "react";

function Main({ todoList, setTodoList, visibleTodos, anyCompleted }) {
  const isAllCompleted = todoList.every((item) => item.completed);

  const checkTodo = todoList.map((todo) => {
    return { ...todo, completed: true };
  });

  const uncheckTodo = todoList.map((todo) => {
    return { ...todo, completed: false };
  });

  const handleMarkAll = () => {
    !anyCompleted ? setTodoList(checkTodo) : setTodoList(uncheckTodo);
  };

  const handleChange = (item) => {
    const toggleCheck = todoList.map((todo) =>
      todo.id === item.id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(toggleCheck);
  };

  const destroy = (item) => {
    const removeTodo = todoList.filter((todo) => todo.id !== item.id);
    setTodoList(removeTodo);
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" checked={isAllCompleted} />
      {todoList?.length ? (
        <label htmlFor="toggle-all" onClick={handleMarkAll}>
          Mark all as complete
        </label>
      ) : null}

      <ul className="todo-list">
        {visibleTodos.map((item) => (
          <li className={item.completed ? "completed" : ""} key={item.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={item.completed}
                onChange={() => handleChange(item)}
              />
              <label>{item.task}</label>
              <button
                className="destroy"
                onClick={() => destroy(item)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Main;
