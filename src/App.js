import {Competitions,WeekNumber, WeeksNumber} from './components';
import Styles from './App.Module.css';

function App() {
  return (
    <div className={Styles.container}>
      <h1>Salam</h1> 
      <WeeksNumber/>
      <Competitions/>
    </div>
  );
}

export default App;
