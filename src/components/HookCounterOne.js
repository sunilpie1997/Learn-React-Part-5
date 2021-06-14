import React, { useState, useEffect } from 'react'

function HookCounterOne() {
	const [count, setCount] = useState(0)
	
    //the parameter to useEffect is a function that is executed after every render
	useEffect(() => {
		document.title = `You clicked ${count} times`
	})
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>
				useEffect - Click {count} times
			</button>
		</div>
	)
}

export default HookCounterOne