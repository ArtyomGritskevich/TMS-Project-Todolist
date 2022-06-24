import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import Form from "./components/Form";

let listForSessionStorage = JSON.parse(sessionStorage.getItem("active-list") || "[]");
let listDeletedForSessionStorage = JSON.parse(sessionStorage.getItem("deleted-list") || "[]");

function App() {

  const [filterStatus, setFilterStatus] = useState("all");
  const [filterValue, setFilterValue] = useState("");
  const [todoList, setTodoList] = useState(listForSessionStorage);
  const [deletedTodoList, setDeletedTodoList] = useState(listDeletedForSessionStorage);

  useEffect(() => {
    sessionStorage.setItem("active-list", JSON.stringify(todoList));
    sessionStorage.setItem("deleted-list", JSON.stringify(deletedTodoList));
  }, [todoList, deletedTodoList]);

  const handleCreateTodo = (name) => {
    const createId = uuidv4();
    setTodoList(todoList.concat({
      name,
      done: false,
      id: createId,
    }));
  };

  const handleDone = (id) => {
    setTodoList(todoList.map((todoItem) =>
      todoItem.id === id ? { ...todoItem, done: true } : todoItem
    ));
  };

  const handleEdit = (id, name) => {
    setTodoList(todoList.map((todoItem) => todoItem.id === id ? { ...todoItem, name } : todoItem));
  };

  const handleDelete = (id) => {
    const deletedTodoIndex = todoList.findIndex(
      (todoItem) => todoItem.id === id
    );
    if (deletedTodoIndex < 0) { return todoList }
    const deletedTodoItem = (todoList.splice(deletedTodoIndex, 1));
    setTodoList([...todoList]);
    setDeletedTodoList(deletedTodoList.concat(deletedTodoItem));
    console.log(todoList);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value)
  };

  const getFilteredToDo = () => {
    let initialList;

    if (filterStatus === 'done') {
      console.log('Pressed filter done');
      initialList = todoList.filter((todoItem) => todoItem.done === true);
    }
    if (filterStatus === 'all') {
      console.log('Pressed filter all');
      initialList = todoList;
    }
    if (filterStatus === 'deleted') {
      console.log('Pressed filter deleted');
      initialList = deletedTodoList
    }
    if (filterValue) {
      initialList = initialList.filter((todoItem) => todoItem.name.toLowerCase().includes(filterValue.toLowerCase()))
    }
    return initialList
  };

  const filteredList = getFilteredToDo();

  const handleClick = (newFilterStatus) => {
    setFilterStatus(newFilterStatus)
  };

  return (
    <div className="container">
      <Header
        listCount={filteredList.length}
      />
      <Filter
        onClick={handleClick}
        inputValue={filterValue}
        onFilterChange={handleFilterChange}
      />
      <List
        onEdit={handleEdit}
        initialValue={todoList.name}
        onDone={handleDone}
        list={filteredList}
        onDelete={handleDelete}
      />
      <Form onCreateTodo={handleCreateTodo} />
    </div>
  );
};

export default App;