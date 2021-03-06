import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import AddItem from './components/addItem';
import About from './components/About';
// import uuid from 'uuid'; // add a Unique Id
import axios from 'axios'; // For Fetching Data

class App extends React.Component {
  state = {
    todos :[]
  }

    // get the Data From JsonServer With Axios
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos : res.data}) )
  }

  markCompelted = (id) =>{
    this.setState({todos : this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
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
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title ,
      completed : false
    })
    .then(res => this.setState({todos : [...this.state.todos , res.data]}))
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
