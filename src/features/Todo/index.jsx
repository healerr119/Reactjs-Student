import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailTodo from './pages/DetailTodo';
import ListTodo from './pages/ListTodo';

TodoFeature.propTypes = {

};


function TodoFeature(props) {
    const match = useRouteMatch(); //nested routing

    return (
        <div>
           <Switch>
                <Route path={match.path} component={ListTodo} exact />
                <Route path={`${match.path}/:todoId`} component={DetailTodo} />
           </Switch>
        </div>
    );
}

export default TodoFeature;