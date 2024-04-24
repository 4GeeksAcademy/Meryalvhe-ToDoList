import { element } from "prop-types";
import React, { useState } from "react";
import'../../styles/toDoList.css';

export const ToDoList = () => {

    const [task, setTask] = useState('');
    const [list, setList] = useState(['Hacer la cama', 'Bañarme', 'Cepillarme los dientes']);


    const handleSubmit = (event)=>{
        event.preventDefault();
        if (task.trim() !== ''){
            setList([...list, task]);
            setTask('');
        } else{
            setTask('')
        }
    }

    const deleteTask = (item) => {
        setList(list.filter((element) => element !== item))
    }
    
    return(
        <div className="container col-10 col-sm-8 col-md-6 mt-3">
            <h1 className="text-primary fw-bold" > TO DO LIST </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label text-success fw-bold"> Tareas pendientes: </label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="task" value= {task} onChange= {(event) => setTask(event.target.value)}/>
                </div>
            </form>
            <ul className="list-group">
                {list.map((item, id) => <li key={id} className="list-group-item d-flex justify-content-between hidden-icon">
                    {item}
                    <span>
                    <i className="fas fa-times text-secondary" onClick= {()=> deleteTask(item)}></i>
                    </span>
                </li>)}
                <li className="list-group-item list-group-item-primary text-end fw-lighter">
                    {list.length} items
                </li>
            </ul>
     
        </div>
    )
}