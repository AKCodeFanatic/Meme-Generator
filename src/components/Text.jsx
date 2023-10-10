import React from 'react'
import Draggable from 'react-draggable'
import { useState } from 'react'

const Text = () => {
    const [editMode , setEditMode] = useState(false);
    const [val , setVal] = useState("Double Click to Edit");

     if(setEditMode){
        let inp = document.getElementById("text-input");
        if(inp){
            inp.addEventListener("keydown", function (e)  {
                if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
                    setEditMode(false);
                }
        });
        }
     }
  return (
    <Draggable>
        <div style={{cursor : 'pointer'}}>
        {
        editMode ? <input id="text-input" type="text" 
        onDoubleClick={(e) => setEditMode(false)} 
        value={val} onChange={(e) => setVal(e.target.value)}/> 
        : (<h2 onDoubleClick={(e)=> setEditMode(true)}>{val}</h2>)
        } 
        </div>
    </Draggable>
  )
}

export default Text