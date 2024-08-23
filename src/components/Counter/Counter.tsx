import './Counter.css'

type Props = {
  time: number
}

export const Counter = ({time}: Props) => {
  const hours = `${Math.floor(time / 3600)}`
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  return (
    <div className="counter">
      {hours}:{minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}:{milliseconds}
    </div>
  )
}
