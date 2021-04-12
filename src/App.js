import './App.css';
import ClickCounter from './components/clickCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';


function App() {
  return (

    /* useState Hook 
    <div className="App">      
      <ClickCounter/>
    </div>
    */

    /* useState hook proper usage when we want to update based on previos state
    <div className="App">      
      <ClickCounterTwo/>
    </div>
    */

    /* useState hook with objects
    <HookCounterThree/>
    */

    /* useState hook with array */
    <HookCounterFour/>
    );
}

export default App;
