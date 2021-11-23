import { useState } from "react";
import "./app.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const initialToDos = [
  { id: 1, task: "Learn JavaScript", completed: true },
  { id: 2, task: "Learn React", completed: false },
  { id: 3, task: "Have a life", completed: false }
];

function App() {
  const [todoList, setTodoList] = useState(initialToDos);

  const [visibleTodos, setVisibleTodos] = useState(todoList);

  const anyCompleted = todoList.some((item) => item.completed);

  return (
    <section className="todoapp">
      <Header addTodo={setTodoList} todoList={todoList} />
      <Main
        todoList={todoList}
        setTodoList={setTodoList}
        visibleTodos={visibleTodos}
        anyCompleted={anyCompleted}
      />
      <Footer
        todoList={todoList}
        setTodoList={setTodoList}
        visibleTodos={visibleTodos}
        setVisibleTodos={setVisibleTodos}
        anyCompleted={anyCompleted}
      />
    </section>
  );
}

export default App;
