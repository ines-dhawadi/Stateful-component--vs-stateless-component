import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import  Test from './components/stateful'

{/***---------------composants à base de classe--------- */}
{/*----------------------------Stateful component---------------------*/}

class App extends Component {

 /*-----constructor(props) {
  super(props)
  this.state ={
    name:'Si Chrrrifff'
  }
}--------*/
 

  state ={
    name:'Si Chrrrifff'
  }

  render(){
    return (
      <div className="App">
        <h1> Stateful component   vs    stateless component</h1>
      

       <h2>{this.state.name}</h2>

       <h4><Test reslt={this.state.name} /></h4>

      </div>
    );}}

export default App;
