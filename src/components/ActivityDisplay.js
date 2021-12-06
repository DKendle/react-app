import React from 'react'
import { useState, useEffect } from 'react'
import Activity from './Activity'

export default function ActivitiesDisplay(props) {
    const [act, setAct] = useState(props.activities)
    //right now state is not needed, plans to handle new activities from form for setAct() fxn

    useEffect(() => {
        fetch("http://localhost:3000/activities")
        .then(console.log("FETCHED"))
        //return () => {
            //cleanup
        //}
    }, [])


    function handleClick(){
        const ranAct = act[Math.floor(Math.random() * act.length)]
        console.log(ranAct.activity)
    }

    return (
        <div>
            <Activity click={handleClick} />
        </div>
    )
}
