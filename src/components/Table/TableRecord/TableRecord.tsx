import './TableRecord.css';

type Props = {
  lap: number;
  index: number;
}

export const TableRecord = ({lap, index}: Props) => {
  return (
    <tr>
      <td className="number-cell">{index + 1}</td>
      <td className="lap-cell">{lap}</td>
    </tr>
  )
}
