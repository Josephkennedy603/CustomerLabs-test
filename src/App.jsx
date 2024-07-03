import React, { useState } from 'react'
import "./App.css";
import AddSchema from './AddSchema';

const App = () => {

  const [open,setOpen] = useState(false)
  return (
    <div className='App' >
     <div className="header">  
      <img src="https://img.icons8.com/metro/26/ffffff/back.png"  alt="back" />
      <h3>View Audience</h3>
     </div>

     <button onClick={()=>setOpen(true)} className='save-button'  >Save Segment</button>
      
      {
        open && <div className='pop-up'><AddSchema /></div>  
      }

    </div>
  )
}

export default App