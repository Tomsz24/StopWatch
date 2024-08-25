import {formatTime} from "../../helpers.ts";

type Props = {
  savedLaps: number[];
  runCounter: number;
}

export const ScoreBoard = ({savedLaps, runCounter}: Props) => {
  const bestLap = Math.min(...savedLaps);
  const lapAverage = Math.round(savedLaps.reduce((acc, curr) => acc + curr, 0) / savedLaps.length);
  const lapsAmount = savedLaps.length;

  return (
    <div>
      <h1>Score Board</h1>
      <p>Your best lap: {formatTime(bestLap)}</p>
      <p>Your average lap: {formatTime(lapAverage)}</p>
      <p>Entire time: {formatTime(runCounter)}</p>
      <p>How many laps did you made: {lapsAmount}</p>
    </div>
  )
}
