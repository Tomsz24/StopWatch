import './Counter.css'

type Props = {
  time: number;
  title: string;
}

export const Counter = ({time, title}: Props) => {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = ((time % 1000) / 100);

  return (
    <div className="counter">
      <h2>{title}:</h2>
      <p>
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds}
      </p>
    </div>
  );
};
