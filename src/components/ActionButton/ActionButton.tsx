import './ActionButton.css'

type Props = {
  actionName: string;
  action: () => void;
}

export const ActionButton = ({action, actionName}: Props) => {
  return (
    <button className={`action-button ${actionName}`} onClick={action}>{actionName}</button>
  );
}
