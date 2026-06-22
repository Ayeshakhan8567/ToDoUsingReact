import { useState } from 'react'
import Input from './Input.jsx'
import List from './List.jsx'
import SaveButton from './SaveButton.jsx'

function App() {
  const [task, settask] = useState("");
  const [list, setlist] = useState([]);
  const [editIndex, setedit] = useState(null);

  function deleteItem(index) {
    setlist(prev => prev.filter((_, i) => i !== index));
  }

  function edititem(index) {
    settask(list[index]);
    setedit(index);
  }

  function savetask() {
    if (task.trim() === '') return;

    if (editIndex !== null) {
      const updated = [...list];
      updated[editIndex] = task;
      setlist(updated);
      setedit(null);
    } else {
      setlist(prev => [...prev, task]);
    }

    settask("");
  }

  return (
    <div className='card'>
      <div className='content'>
        <Input task={task} settask={settask} />
        <SaveButton savetask={savetask} />

        <h1>TO do's</h1>
        <List deleteItem={deleteItem} edititem={edititem} list={list} />
      </div>
    </div>
  )
}

export default App;