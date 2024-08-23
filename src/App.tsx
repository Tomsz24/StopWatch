import './App.css'
import {Title} from "./components/Title/Title.tsx";
import {Counter} from "./components/Counter/Counter.tsx";
import {ActionButton} from "./components/ActionButton/ActionButton.tsx";
import {Table} from "./components/Table/Table.tsx";

export const App = () => {

  const action = () => {
    console.log("Button clicked");
  }

  return (
    <div className="wrapper">
      <Title/>

      <Counter time={0}/>

      <div>
        <ActionButton actionName={'start'} action={action}/>
        <ActionButton actionName={'stop'} action={action}/>
        <ActionButton actionName={'reset'} action={action}/>
        <ActionButton actionName={'lap'} action={action}/>
      </div>

      <Table/>
    </div>
  )
}
