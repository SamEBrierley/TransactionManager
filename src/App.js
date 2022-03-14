import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


function App(props) {

  return (
    <div>
      <NewExpense/>
      <Expenses/>
    </div>

  );
}

export default App;