import './Table.css'
import {TableRecord} from "./TableRecord/TableRecord.tsx";

type Props = {
  lapsArray: number[];
}

export const Table = ({lapsArray = []}: Props) => {

  const emptyArrayInformation = <tr>
    <td></td>
    <td className="information-cell">Start your first lap!</td>
  </tr>

  const renderContent = lapsArray.length ? lapsArray.map(
    (lap, index) => <TableRecord lap={lap} index={index} key={index}/>) : emptyArrayInformation

  return (
    <table>
      <thead>
      <tr>
        <th>Lp</th>
        <th>Time</th>
      </tr>
      </thead>
      <tbody>
      {renderContent}
      </tbody>
    </table>
  )
}
