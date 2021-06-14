import React, { useState, useEffect } from 'react'
import HookMouse from './HookMouse';

const MouseCountainer=()=>{


    const [display,setDisplay]=useState(true);

    return (
        <div>
        <button onClick={()=>setDisplay(!display)}>toggle</button>
            
            {display && <HookMouse/>}
        </div>
    )
}

export default MouseCountainer