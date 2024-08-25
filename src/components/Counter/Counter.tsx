import './Counter.css'
import {formatTime} from "../../helpers.ts";

type Props = {
  time: number;
  title: string;
}

export const Counter = ({time, title}: Props) => {
  return (
    <div className="counter">
      <h2>{title}:</h2>
      <p>{formatTime(time)}</p>
    </div>
  );
};
