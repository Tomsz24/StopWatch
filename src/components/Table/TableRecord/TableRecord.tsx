import './TableRecord.css';
import {formatTime} from "../../../helpers.ts";

type Props = {
  lap: number;
  index: number;
}

export const TableRecord = ({lap, index}: Props) => {
  return (
    <tr>
      <td className="number-cell">{index + 1}</td>
      <td className="lap-cell">{formatTime(lap)}</td>
    </tr>
  )
}
