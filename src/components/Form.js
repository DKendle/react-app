import React from 'react'
import { useState } from 'react'


//PLAN:
//Form for submission of new activities when bored
//Users Can:
//Navigate with a link to the form
//Use URL to access new form link
//Input new activities and all info for them
//Hit submission, create new activity in the database


export default function Form() {
    //create state for activity input
    const [activity, setActivity] = useState([])


    function handleSubmit(e){
        e.preventDefault()
        console.log("The Form has been Submitted!")
    }

    function handleInput(e){
        console.log(e.target.value)
    }


    return (
        <div>
            <form id='input-form' >
            <input onChange={(e) => handleInput(e)} type='text' name='Activity' placeholder='Activity'/>
            <input onChange={(e) => handleInput(e)}type='text' name='Type' placeholder='Type'/>

            <input onClick={handleSubmit} type='submit' name='Submit'/>
            </form>
        </div>
    )
}
