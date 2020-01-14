import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './components/Todos'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import axios from 'axios'

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
    .then(res => this.setState({ todos: res.data }))
  }


  // Toggle complete
  markComplete = (id) => {
    // console.log(id)
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
    } 
    return todo;
  }) });
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: this.state.todos.filter(
      todo => todo.id !==id )}))
    
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.datat]}))
  }
  

 render(){
  //  console.log(this.state.todos)
  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo = {this.addTodo} />
            <Todos 
                todos={this.state.todos} 
                markComplete={this.markComplete} 
                delTodo={this.delTodo} 
            />
          </React.Fragment> )} 
          
        />
        <Route path='/about' component={About} />
        

        </div>
    </Router>
  );
 }
}

export default App;
