import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import TodoList from "../../components/TodoList";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import queryString from "query-string";
import TodoForm from "../../components/TodoForm";
ListTodo.propTypes = {};

function ListTodo(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Action",
      status: "new",
    },
  ];
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const path = queryString.parse(location.search);
    return path.status || "all";
  });
  const handleTodoClick = (todo, index) => {
    //clone current array to the new one
    const newTodoList = [...todoList];
    console.log(todo, index);

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };

    setTodoList(newTodoList);
  };

  useEffect(() => {
    const path = queryString.parse(location.search);
    setFilterStatus(path.status || "all");
  }, [location.search]);

  const handleShowAll = () => {
    // setFilterStatus('all')
    const queryParams = { status: "all" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowCompleted = () => {
    // setFilterStatus('completed')
    const queryParams = { status: "completed" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowNew = () => {
    // setFilterStatus('new')
    const queryParams = { status: "new" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filterStatus === "all" || filterStatus === todo.status);
  }, [todoList, filterStatus]);

  const handleTodoFormSubmit = (values) => {
    console.log("Form submit:", values);

    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: "new",
    };

    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAll}> Show All</button>
        <button onClick={handleShowCompleted}> Show Completed</button>
        <button onClick={handleShowNew}> Show New</button>
      </div>
    </div>
  );
}

export default ListTodo;
