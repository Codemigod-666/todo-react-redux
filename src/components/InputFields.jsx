import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Lists from './Lists'
import {persistor} from '../redux/store';
import { addTodo } from '../features/Todo/todoSlice';

const InputFields = () => {

  const tasks = useSelector((state) => state.Todo.todos);
  const dispatch = useDispatch();

  const [task, setTask] = useState('');



  const handleTask = (data) => {
    dispatch(addTodo(task));
    setTask(data);
  }

  
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-12 col-md-7'>
                <input type="text"
                    className="form-control" 
                    placeholder="Add Task" 
                    aria-label="AddTask" 
                    value={task}
                    onChange={(e) => setTask(e.target.value) }
                    aria-describedby="basic-addon1" />
            </div>
            <div className='col-12 col-md-4 my-3 my-sm-0'>
                <button type="button" className="btn btn-success container-fluid"
                    onClick={() => handleTask('')}
                >Add</button>
            </div>
        </div>
        <Lists />
        <hr></hr>
        <div className='reset-button'>
                <button className='btn btn-danger' onClick={() => {
                    persistor.purge();
                    window.location.reload();
                }}>Reset</button>

                <p className='text-white'>The Data will persist even if you refresh the page!! (Reset to clear the Data)</p>
        </div>
    </div>  
    )
}

export default InputFields