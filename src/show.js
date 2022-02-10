import React, { useState } from 'react'

function Show() {
    const c = () => {
        setCount(!count)
    }
    const [count, setCount] = useState(true);
    return (
        <div>
            <b>{count ? 'came from show' : ''}</b>
            <br />
            <button onClick={c}>Hide</button>
        </div>
    )
}

export default Show