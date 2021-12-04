import React from 'react'
import { useState } from 'react'

export default function Form() {
    //create state for the name input
    const [name, setName] = useState([])


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
            <input onChange={(e) => handleInput(e)} type='text' name='Title' placeholder='Title'/>
            <input onChange={(e) => handleInput(e)}type='text' name='Category' placeholder='Category'/>

            <input onClick={handleSubmit} type='submit' name='Submit'/>
            </form>
        </div>
    )
}
