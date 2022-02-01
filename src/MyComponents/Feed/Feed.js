import React from 'react'
import Task from './Task'
import Timer from './Timer'
import './Feed.css'

function Feed() {
    return (
        <div className="feed">
            <Timer/>
            <Task/>
        </div>
    )
}

export default Feed
