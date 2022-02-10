import React from 'react';
import '../History/History.css'

function History(props) {

    const list = props.data.d.map((i, index) => {
        return (<div className={index} id="box2">
            <div className='divp'>
                <div className="color" style={{ backgroundColor: i.color }}></div>
            </div>
            <p className={index} id='p'>{i.name}</p>
            <button className='lo' onClick={() => props.data.f(index)}><i class="ri-delete-bin-5-line"></i></button>
        </div>)
    })
    return (
        <div className='index'>
            {list}
        </div>
    );
}

export default History;
