import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  //In this scenario, Counter does not work. console.log('...') in 'tick' functions shows
  //'tick' is called everytime after 1 second but 'count' value remains same.
  /*
  const tick = () => {
    console.log("tick called with count=",count);
    setCount(count + 1)
  }
  */

  //so whenever updating value based on previous state, USE THIS
  const tick = () => {
    console.log("tick called with count=",count);
    setCount(prevState=>prevState + 1)
  }
  
  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
	}, [])
  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter