import {useState, useRef} from "react";
import './App.css'
import {Title} from "./components/Title/Title.tsx";
import {Counter} from "./components/Counter/Counter.tsx";
import {ActionButton} from "./components/ActionButton/ActionButton.tsx";
import {Table} from "./components/Table/Table.tsx";
import {ScoreBoard} from "./components/ScoreBoard/ScoreBoard.tsx";

export const App = () => {
  const [runCounter, setRunCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRunRef = useRef<number | null>(null);
  const intervalLapRef = useRef<number | null>(null);
  const [savedLaps, setSavedLaps] = useState<number[]>([])
  const [lapCounter, setLapCounter] = useState<number>(0);

  const resetAction = () => {
    setRunCounter(0);
    setLapCounter(0);
    setSavedLaps([]);
  }

  const startAction = () => {
    setIsRunning(true);
    if (intervalRunRef.current !== null) {
      return;
    }
    intervalRunRef.current = setInterval(() => {
      setRunCounter(prevState => prevState + 100);
    }, 100);
    if (intervalLapRef.current !== null) {
      return;
    }
    intervalLapRef.current = setInterval(() => {
      setLapCounter(prevState => prevState + 100);
    }, 100);
  }

  const stopAction = () => {
    if (intervalRunRef.current === null) {
      return;
    }
    if (intervalLapRef.current === null) {
      return;
    }
    clearInterval(intervalRunRef.current);
    clearInterval(intervalLapRef.current);
    intervalLapRef.current = null;
    intervalRunRef.current = null;
    setIsRunning(false);
  }

  const saveLap = () => {
    if (!isRunning && !!runCounter && !!lapCounter) {
      return;
    }
    setSavedLaps(prevState => [...prevState, lapCounter]);
    setLapCounter(0);
  }

  const showBasicButton = isRunning ? <ActionButton actionName={'stop'} action={stopAction}/> :
    <ActionButton actionName={'start'} action={startAction}/>;

  const results = !isRunning && !!savedLaps.length ? <ScoreBoard savedLaps={savedLaps} runCounter={runCounter}/> :
    <Table lapsArray={savedLaps}/>
  
  return (
    <div className="wrapper">
      <Title/>

      <Counter time={runCounter} title={"Run time"}/>
      <Counter time={lapCounter} title={"Lap time"}/>

      <div className="buttons-wrapper">
        {showBasicButton}
        <ActionButton actionName={'reset'} action={resetAction}/>
        <ActionButton actionName={'lap'} action={saveLap}/>
      </div>
      {results}
    </div>
  )
}
