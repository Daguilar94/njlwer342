import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super()

    this.updateInput = this.updateInput.bind(this)
    this.addTask = this.addTask.bind(this)
    this.state = {
      newTask: '',
      tasks: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato']
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, i) =>
              <li key={i}>{task}</li>
            )}
          </ul>
           <form onSubmit={this.addTask}>
             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.updateInput} />
             <input type='submit' vlaue='submit' />
           </form>
        </div>
      </div>
    )
  }
  updateInput(e) {
    this.setState({
      newTask: e.target.value
    })
  }

  addTask(e) {
      e.preventDefault();
      this.setState({
        tasks: [...this.state.tasks, this.state.newTask],
        newTask: ''
      })
  }
}


export default App;
