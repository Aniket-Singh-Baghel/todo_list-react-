import React, { useState } from 'react';
import  "./Create.css"

function Create(props) {
    const [show, setshow] = useState({ name: "", color: '' });

    console.log(props.data.d.list)
    const inputhandeler = (e) => {
        setshow({ ...show, [e.target.name]: e.target.value })
        console.log(show)
    }

    return (
        <div className='create'>
            <br /><br /><br />
            <h3>Add new task</h3>

            <div id="mi">
                <input id="first" type="text" placeholder='Add Todo' name='name' onChange={(e) => inputhandeler(e)} value={show.name} />
                <input id = "second" type="color" placeholder="color" name='color' onChange={(e) => inputhandeler(e)} value={show.color} />
            </div>
            <button className='main' onClick={(e) => props.data.f(show)}>Add To</button>
        </div>
    );
}

export default Create;
