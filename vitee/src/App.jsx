import { useState } from 'react'
import Input from './Input.jsx'
import List from './List.jsx'
import SaveButton from './SaveButton.jsx'
import './App.css'

function App() {
  const [task, settask] = useState("");
  const [list, setlist] = useState([]);

  function savetask() {
    if (task.trim() === '') return;
    setlist(prev => [...prev, task]);
    settask("");
  }

  return (
    <div className='card'>
      <div className='content'>
        <Input task={task} settask={settask} />
        <SaveButton savetask={savetask} />

        <h1>TO do's</h1>

        <List list={list} />
      </div>
    </div>
  )
}

export default App;