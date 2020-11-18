import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import {ListGroup} from "react-bootstrap";


function TodoList(props) {
    return (
        <ListGroup as="ul" style={{width: 600}}>
            {props.todos.map((todo, index) => {
                const variant = todo.completed ? 'light' : 'secondary';
                return (
                    <ListGroup.Item key={todo.id} as="li" variant={variant}>
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            index={index}
                            onChange={props.onToggle}
                        />
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default TodoList;
