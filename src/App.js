import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
class App extends React.Component {
  state = {
    todos :[
      {
        id : 1 ,
        title : 'dinner With Friend', 
        competed : false 
      },
      {
        id : 2 ,
        title : 'dinner With ahmed', 
        competed : false 
      },
      {
        id : 3 ,
        title : 'dinner With Ali', 
        competed : false 
      }
    ]
  }
  render(){
    return(
      <div>
        <Navbar />
        <Todos todos = {this.state.todos} />
      </div>
    )
  }

}

export default App;
