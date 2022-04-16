import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function important(i) {
    const importantTodos = todos.map((item, index) => {
      if (i === index) {
        return {
          ...item,
          freezing: !item.freezing,
        };
      }
      return item;
    });
    setTodos(importantTodos);
  }

  function deleted(indexTodoList) {
    const deleteTodos = todos.filter((todo, index) => {
      if (index === indexTodoList) {
        return false;
      }
      {
        return true;
      }
    });
    setTodos(deleteTodos);
  }
  const addTodos = () => {
    if (text == "") {
    } else {
      setTodos([
        ...todos,
        {
          text: text,
          freezing: false,
        },
      ]);
    }
    setText("");
  };
  const newsTodos = todos.map((todo, index) => {
    let todoClass;
    let sectionSex;
    let todoDel;
    if (todo.freezing === false) {
      sectionSex = "section";
      todoDel = "✖";
    } else {
      sectionSex = "sectionSex";
      todoClass = "hiding";
    }

    return (
      <div className={sectionSex}>
        <div className="mark true">
          <button onClick={() => important(index)} className="checkMark">
            ★
          </button>
        </div>
        <div className="text">
          <span>{todo.text}</span>
        </div>
        <div className="deleteTodo">
          <span onClick={() => deleted(index)} className={todoClass}>
            {todoDel}
          </span>
        </div>
      </div>
    );
  });
  return (
    <div className="App">
      <div className="todoListText">
        <span>Список дел</span>
      </div>
      <div className="header">
        <input
          className="val"
          placeholder={"Введите текст ..."}
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodos}>Добавить</button>
      </div>
      {newsTodos}
    </div>
  );

}

export default App;


