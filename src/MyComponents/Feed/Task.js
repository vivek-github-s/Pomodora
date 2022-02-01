import React from 'react'
import './Task.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Task() {
    return (
        <div className='task'>
            <p>Time to Work!</p>
            <div className="task__setting">
            <h1 className='task__header'>Tasks</h1>
            
            </div>
            
            <div className="task__add">
                <AddCircleOutlineIcon/>
                <p>Add Task</p>
            </div>
        </div>
    )
}

export default Task
