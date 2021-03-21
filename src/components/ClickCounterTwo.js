import React, { useState } from 'react';

function ClickCounterTwo(props) {

    const [count,setCount]=useState(0);

    const incrementFive=()=>{
        
        /* this increments only by 1 instead of 5. that is why don't use this approach
        for(let i=1;i<5;i++)
        {
            setCount(count+1);
        }
        */

        /* use this approach */
        for(let i=1;i<=5;i++)
        {
            setCount(prevState=>prevState+1);
        }
        
    }
    return (
       

        <div>
            {count}<br></br>
            <button onClick={incrementFive}>increment by 5</button>
        </div>
    );
}

export default ClickCounterTwo;