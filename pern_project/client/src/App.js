import React, { Fragment } from "react";

import "./App.css";
import ListTodos from "./components/ListTodos";

// components

import InputTodo from "./components/InputTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
