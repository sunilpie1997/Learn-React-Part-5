import './App.css';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';

import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounterTwo from './components/HookCounterTwo';

import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';

import MouseContainer from './components/MouseContainer';

import ClickCounter from './components/clickCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';

import DataFetching1 from './components/DataFetching1';
import DataFetching2 from './components/DataFetching2';

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

    /* useState hook with array 
    <HookCounterFour/>
    */

    /* usEffect hook 
    <>
    <ClassCounterOne/>
    <HookCounterOne/>
    </>
    );

    */

    /* optimise useEffect hook
    <>
    <ClassCounterTwo/>
    <HookCounterTwo/>
    </>
    */

    /* run effect only once
    <>

    <ClassMouse/>
    <HookMouse/>
    </>

    */

    /* cleanup with useEffect
    <MouseContainer/>
    */

    /* useEffect with incorrect dependency
    <>
    <IntervalClassCounter/>
    <IntervalHookCounter/>
    </>
    */

    /* Data Fetching */
    <DataFetching2/>

)}

export default App;
