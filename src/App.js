import './App.css';
import ClickCounter from './components/clickCounter';
import ClickCounterTwo from './components/ClickCounterTwo';


function App() {
  return (

    /* useState Hook 
    <div className="App">      
      <ClickCounter/>
    </div>
    */

    /* useState hook proper usage when we want to update based on previos state */
    <div className="App">      
      <ClickCounterTwo/>
    </div>
    );
}

export default App;
