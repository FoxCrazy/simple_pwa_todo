import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import {Container, Row} from "react-bootstrap";
import soundCompleted from "./sounds/completed.wav";
import soundUncompleted from "./sounds/uncompleted.wav";
import soundRemoved from "./sounds/removed.wav";
import soundAdded from "./sounds/added.wav";

function App() {

    const completedAudio = new Audio(soundCompleted);
    const uncompletedAudio = new Audio(soundUncompleted);
    const removedAudio = new Audio(soundRemoved);
    const addedAudio = new Audio(soundAdded);

    const [todos, setTodos] = React.useState(
        localStorage.getItem('savedTodos') !== null ? JSON.parse(localStorage.getItem('savedTodos')) : [
            {id: 1, completed: false, title: "Example todo"},
            {id: 2, completed: true, title: "Another completed example"},
        ]
    );

    localStorage.setItem('savedTodos', JSON.stringify(todos));
    console.log(JSON.parse(localStorage.getItem('savedTodos')))


    function toggleTodo(id) {
        console.log("todo id -", id);
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                    (todo.completed ? completedAudio : uncompletedAudio).play();
                }
                return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
        removedAudio.play();
    }

    function addTodo(title) {
        setTodos(
            todos.concat([
                {
                    title,
                    id: Date.now(),
                    completed: false,
                },
            ])
        );
        addedAudio.play();
    }

    return (
        <Context.Provider value={{removeTodo: removeTodo}}>
            <div className="wrapper">
                <Container>
                    <Row className="justify-content-around">
                        <h1>To Do list</h1>
                    </Row>
                    <Row className="justify-content-around" sm md={8}>
                        <AddTodo onCreate={addTodo}/>
                    </Row>

                    <Row className="justify-content-around" sm md={8}>
                        {todos.length ? (
                            <TodoList todos={todos} onToggle={toggleTodo}/>
                        ) : (
                            <p>No todos</p>
                        )}
                    </Row>

                </Container>
            </div>
        </Context.Provider>
    );
}

export default App;
