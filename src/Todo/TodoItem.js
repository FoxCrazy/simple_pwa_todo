import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";
import {Button} from "react-bootstrap";


function TodoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context);
    const classes = [];

    if (todo.completed) {
        classes.push("done");
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
      <span className={classes.join(" ")}>
        <input
            type="checkbox"
            checked={todo.completed}
            style={{marginRight: "1rem"}}
            onChange={() => onChange(todo.id)}
        />

          <label className={classes.join(" ") + " todo-text"}>
              <strong>{index + 1}</strong>
              &nbsp;{todo.title}</label>

      </span>
            <Button variant="outline-danger" onClick={() => {
                removeTodo(todo.id);
            }}>&times;</Button>
        </div>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
};

export default TodoItem;
