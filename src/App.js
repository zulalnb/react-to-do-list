import { useState } from "react";
import "./app.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const initualToDos = [
  { id: 1, task: "Learn JavaScript", completed: true },
  { id: 2, task: "Learn React", completed: false },
  { id: 3, task: "Have a life", completed: false }
];

function App() {
  //köklü değişim
  const [todoList, setTodoList] = useState(initualToDos);

  //filtreleme
  const [visibleTodos, setVisibleTodos] = useState(todoList);

  return (
    <section className="todoapp">
      <Header addTodo={setTodoList} todoList={todoList} />
      <Main
        todoList={todoList}
        setTodoList={setTodoList}
        visibleTodos={visibleTodos}
      />
      <Footer
        todoList={todoList}
        setTodoList={setTodoList}
        visibleTodos={visibleTodos}
        setVisibleTodos={setVisibleTodos}
      />
    </section>
  );
}

export default App;
