  
import React, { useState } from 'react'

function HookCounterThree() {
	const [name, setName] = useState({ firstName: '', lastName: '' })
	return (
		<form>
			<input
				type="text"
				value={name.firstName}
                
                /* DON'T USE THIS --> this updates 'firstName' but removes 'lastName' propert from 'name' object
                onChange={e => setName({firstName: e.target.value })}
				*/

                onChange={e => setName({ ...name, firstName: e.target.value })}
			/>
			<input
				type="text"
				value={name.lastName}
                
                /* DON'T USE THIS --> this updates 'lastName' but removes 'firstName' propert from 'name' object
                onChange={e => setName({lastName: e.target.value })}
                */

				onChange={e => setName({ ...name, lastName: e.target.value })}
			/>
			<h2>Your first name is - {name.firstName}</h2>
			<h2>Your last name is - {name.lastName}</h2>
			<h2>{JSON.stringify(name)}</h2>
		</form>
	)
}

export default HookCounterThree