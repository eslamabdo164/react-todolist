import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import AddItem from './components/addItem';
import About from './components/About';
import uuid from 'uuid'; // add a Unique Id

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
  markCompelted = (id) =>{
    this.setState({todos : this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.competed = !todo.competed
      }
      return todo;
    })})
    
  }
  // This Function return only the Item that left after click 
  delItem = (id) =>{
    this.setState({
      todos : [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addItem = (title) => {
    const newTodo = {
      id : uuid.v4() ,  // add a Unique Id
      title , 
      competed : false
    }
    this.setState({
      todos : [...this.state.todos , newTodo]
    })
  }
  render(){
    return(
      <Router>
        <Navbar />
        <Route exact path ='/' render ={props => (
          <React.Fragment> 
              <AddItem addItem = {this.addItem} />
              <Todos 
              todos = {this.state.todos} 
              markCompelted ={this.markCompelted}
              delItem ={this.delItem}
              />
          </React.Fragment>
        )} /> 

        <Route path ='/about' component ={About} />
      
      </Router>
    )
  }

}

export default App;
