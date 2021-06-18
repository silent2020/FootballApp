import {Competitions,WeekNumber, WeeksNumber} from './components';
import Styles from './App.Module.css';
import {fetchData} from './api';
import React from 'react';
class App extends React.Component {
  
  async componentDidMount(){
    const data = await fetchData();
    console.log(data);
  }

  render(){
    return (
      <div className={Styles.container}>
        <h1>Salam</h1> 
        <WeeksNumber/>
        <Competitions/>
      </div>
    );
  }
}

export default App;
