type Props = {
  lapsArray: number[];
}

export const Table = ({lapsArray = []}: Props) => {
  return (
    <table>
      <tbody>
      {lapsArray.map((lap, index) => (
        <tr key={lap.toString()}>
          <td>{index + 1}</td>
          <td>{lap}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}
