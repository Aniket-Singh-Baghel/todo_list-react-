import './App.css';
import History from './Component/History/History';
import Create from './Component/Create/Create';
import { useState } from 'react';


function App() {
  const [data, setdata] = useState([
    { name: 'Cash', color: 'red' }, { name: 'Book', color: 'blue' }
  ]);
  var [count, setcount] = useState(0);
  const deletetask = (e) => {
    const cl = data.filter((i, index) => {
      return index !== e
    })
    setdata(cl)
    setcount(count += 1)
    console.log(data.length + count)
  }
  const supplydata = (e) => {
    const copyl = [...data]
    copyl.push(e)
    setdata(copyl)
    console.log('called')
  }
  return (
    <div className="App">
      <div id="exp">
        <h2>{data.length + count} Task</h2>
        <h4>{data.length} task remaining</h4>
        <History data={{ d: data, f: deletetask }} />
        <Create data={{ d: setdata, f: supplydata }} />
      </div>
    </div>
  );
}

export default App;
