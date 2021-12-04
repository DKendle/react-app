import React from 'react'
import { useState } from 'react'

export default function Activities(props) {

    const [act, setAct] = useState(props.activities)

    function handleClick(){
        const ranAct = act[Math.floor(Math.random() * act.length)]
        console.log(ranAct.activity)
    }

    return (
        <div>
            <h1>Activities</h1>
            
            <button onClick={handleClick}>Random Activity</button>
        </div>
    )
}
