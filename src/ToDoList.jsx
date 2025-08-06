import React, {use, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ToDoList(){
    const [tasks, setTasks] = useState(["Eat", "Play", "Study"]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if (newTask.trim() !== ""){
            if (editIndex == null){
                setTasks(t => [...t, newTask]);
                setNewTask("");
            }
            else{
                const updatedTasks = [...tasks];
                updatedTasks[editIndex] = newTask;
                setTasks(updatedTasks);
                setEditIndex(null);
                setNewTask("");
            }
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function editTask(index){
        setNewTask(tasks[index]);
        setEditIndex(index);
    }
    
    return(<div className = "todolist">
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">TO DO LIST</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <div>
            <input 
                type = "text"
                placeholder="Enter A Task..."
                value = {newTask}
                onChange={handleInputChange}/>
            
            <Button variant="success"
                className = "addbutton"
                onClick={addTask}>
                {editIndex !== null ? "Update" : "Add"}
            </Button>
        </div>

        <ol>
            {tasks.map((task, index) => 
                <li key = {index}>
                    <span className = "text">{task}</span>
                    <Button variant="danger"
                        className = "deletebutton"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </Button>

                    <Button variant="info"
                        className = "editbutton"
                        onClick={() => editTask(index)}>
                        Edit
                    </Button>
                </li>)}
        </ol>
    </div>)
}

export default ToDoList