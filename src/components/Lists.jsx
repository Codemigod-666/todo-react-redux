import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {updateCompleted, updateDelete, setUpdate, updateTodo} from '../features/Todo/todoSlice'

const Lists = () => {
  const [input, setInput] = useState(false);
  const [text , setText] = useState('');
  const tasks = useSelector((state) => state.Todo.todos);
  const dispatch = useDispatch();

  const handleEdit = (item) => {
    setText(item.task);
    dispatch(setUpdate(item));
  }

  const handleKeyPress = (e,item) => {
    if(e.key === 'Enter') {
        dispatch(updateTodo({itemss: item, text: text}))
        setUpdate(item);
        handleEdit(item);
    }
  }

   useEffect(() => {
    console.log("tasks in list : ",tasks)
  }, [tasks])
  return (
    <div className='container my-4'>

        <div className="row">
            <div className="col-12 col-md-4">
                <ul className='todo-list-container'>
                    <h1 className='card'>Todo</h1>
                    {
                        tasks?.filter((item1) => {return item1.completed === false && item1.deleted === false}).map((item, index) => {
                            return (
                                <li className='text-white d-flex flex-row justify-content-between mt-3'
                                 key={index}>
                                    {
                                        (item.update === false)?
                                        <div className='d-flex justify-conntent-center align-items-center p-3'>{item.task}</div>:
                                        <textarea value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => handleKeyPress(e, item)} />
                                    }
                                    <div className='d-flex justify-content-between'>
                                        <button className='btn btn-success m-2' onClick={() => dispatch(updateCompleted(item))}><i className="fa-solid fa-check-double"></i></button>
                                        <button className='btn btn-warning m-2' onClick={() => handleEdit(item)} ><i className="fa-solid fa-pen-to-square"></i></button>
                                        <button className='btn btn-danger m-2' onClick={() => dispatch(updateDelete(item))} ><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                 </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="col-12 col-md-4">
                <ul className='todo-list-container'>
                    <h1 className='card'>Completed</h1>
                    {
                        tasks?.filter((item1) => {return item1.completed === true && item1.deleted === false}).map((item, index) => {
                            return (
                                <li className='text-white d-flex flex-row justify-content-between mt-3'
                                 key={index}>
                                    <div className='d-flex justify-conntent-center align-items-center p-3'>{item.task} </div>
                                    <div className='d-flex justify-content-between'>
                                        <button className='btn btn-danger m-2' onClick={() => dispatch(updateDelete(item))}><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                 
                                 </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="col-12 col-md-4">
                <ul className='todo-list-container'>
                    <h1 className='card'>Deleted</h1>
                    {
                        tasks?.filter((item1) => {return item1.deleted === true}).map((item, index) => {
                            return (
                                <li className='text-white d-flex flex-row justify-content-between mt-3'
                                 key={index}>
                                    <div className='d-flex justify-conntent-center align-items-center p-3'>{item.task} </div>
                                 </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Lists