import React from 'react'

export default function Activity(props) {
    console.log(props)
    
    return (
        <div>
            <h1>Activities</h1>
            <button onClick={props.click}>Random Activity</button>
        </div>
    )
}
