import './TableRecord.css';

type Props = {
  lap: number;
  index: number;
}

export const TableRecord = ({lap, index}: Props) => {
  const formatTime = () => {
    const hours = Math.floor(lap / 3600000);
    const minutes = Math.floor((lap % 3600000) / 60000);
    const seconds = Math.floor((lap % 60000) / 1000);
    const milliseconds = ((lap % 1000) / 100);

    return `
    ${hours < 10 ? '0' + hours : hours}:
    ${minutes < 10 ? '0' + minutes : minutes}:
    ${seconds < 10 ? '0' + seconds : seconds}:
    ${milliseconds}
    `;
  }

  return (
    <tr>
      <td className="number-cell">{index + 1}</td>
      <td className="lap-cell">{formatTime()}</td>
    </tr>
  )
}
