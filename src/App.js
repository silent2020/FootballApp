import {Competitions,WeekNumber, WeeksNumber} from './components';
import Styles from './App.Module.css';
import {fetchData} from './api';
import React from 'react';
class App extends React.Component {
  
  state ={
    data:{},
  }

  async componentDidMount(){
      const fetchedData=await fetchData();
      this.setState({data:fetchedData});
      //console.log(data);
  }

  render(){
    const data=this.state;
    return (
      <div className={Styles.container}>
        <h1>Salam</h1> 
        <WeeksNumber/>
        <Competitions data={data}/>
      </div>
    );
  }
}

export default App;
