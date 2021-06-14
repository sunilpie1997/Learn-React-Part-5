import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching2() {
	const [post, setPost] = useState({})
	const [id,setId] = useState(1)
	const [idFromButtonClick,setIdFromButtonClick]=useState(1);

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
			.then(res => {
        console.log(res)
        setPost(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [idFromButtonClick])


	return (
		<div>
			<input type="text" value={id} onChange={e=>setId(e.target.value)}/>
			<button onClick={()=>setIdFromButtonClick(id)}>Fetch post</button>
			{post.title}
		</div>
	)
}

export default DataFetching2