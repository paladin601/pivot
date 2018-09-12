import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';
import Task from './Task.js';
import { initPivot } from './pivotHelper.js';

var aux=0;
var mps=[{Caracteristica: "Luz", Mes: "mes 1",value:20},
{Caracteristica: "Luz", Mes: "mes 2",value:20},
{Caracteristica: "Luz", Mes: "mes 3",value:20},
{Caracteristica: "Telefono", Mes: "mes 1",value:10},
{Caracteristica: "Telefono", Mes: "mes 2",value:10},
{Caracteristica: "Telefono", Mes: "mes 3",value:10},
{Caracteristica: "Agua", Mes: "mes 1",value:30},
{Caracteristica: "Agua", Mes: "mes 2",value:19},
{Caracteristica: "Agua", Mes: "mes 3",value:39}];
// App component - represents the whole app
class App extends Component {
  renderTasks() {
    if(aux==0){
      initPivot(mps);
      aux=1;
    }
    return this.props.tasks.map((task) => (
      <Task key={task._id} value={task} mps={mps}/>
    ));
  }
 
  render() {
    return (
      <div className="container">
          {this.renderTasks()}
      </div>
    );
  }
}

export default withTracker(() => {
    Meteor.subscribe('tasks');
    return {
      tasks: Tasks.find({}).fetch(),
    };
  })(App);