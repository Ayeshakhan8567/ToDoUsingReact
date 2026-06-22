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
    <div   className=" flex flex-col bg-[url('cherry.jpg')] bg-cover bg-no-repeat  p-5 w-80  transition-transform duration-300 hover:scale-105 hover:shadow-lg" >

      <div className='flex flex-col gap-4 ' >
        <div className='flex gap-6' >
        <Input className="  focus:outline-none transition-transform focus:scale-105 focus:shadow-xl p-0.5" task={task} settask={settask} />
        <SaveButton className="bg-green-500 text-white   transition-colors duration-300   hover:bg-green-700 h-8 transition-transform hover:scale-105 hover:shadow-lg " savetask={savetask} />
</div>
        <h1 className='font-bold' >To do's</h1>
        <List className="  transition-transform focus:scale-105cd p-1 bg-blue-100 flex gap-4 " className2="bg-red-500 text-white px-2 rounded transition-transform hover:scale-105 hover:shadow-lg transition-colors duration-300   hover:bg-red-900 " deleteItem={deleteItem} edititem={edititem} list={list} />
      </div>
    </div>
  )
}

export default App;