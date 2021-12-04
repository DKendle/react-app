import React from 'react'

export default function Form() {

    function handleSubmit(e){
        e.preventDefault()
        console.log("The Form has been Submitted!")
    }



    return (
        <div>
            <form id='input-form' >
            <input type='text' name='Title' placeholder='Title'/>
            <input type='text' name='Category' placeholder='Category'/>
            <input onClick={handleSubmit} type='submit' name='Submit'/>

            </form>
        </div>
    )
}
