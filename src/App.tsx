import {useState, useRef} from "react";
import './App.css'
import {Title} from "./components/Title/Title.tsx";
import {Counter} from "./components/Counter/Counter.tsx";
import {ActionButton} from "./components/ActionButton/ActionButton.tsx";
import {Table} from "./components/Table/Table.tsx";

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const [savedLaps, setSavedLaps] = useState<number[]>([])

  const action = () => {
    console.log("Button clicked");
  }

  const startAction = () => {
    setIsRunning(true);
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCounter(prevState => prevState + 100);
    }, 100);
  }

  const stopAction = () => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  }

  const saveLap = () => {
    if (!isRunning && !!counter) {
      return;
    }
    setSavedLaps(prevState => [...prevState, counter]);
  }

  const showBasicButton = isRunning ? <ActionButton actionName={'stop'} action={stopAction}/> :
    <ActionButton actionName={'start'} action={startAction}/>;
  return (
    <div className="wrapper">
      <Title/>

      <Counter time={counter}/>

      <div>
        {showBasicButton}
        <ActionButton actionName={'reset'} action={action}/>
        <ActionButton actionName={'lap'} action={saveLap}/>
      </div>
      <Table/>
    </div>
  )
}
