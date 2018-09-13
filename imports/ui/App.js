import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';
import Task from './Task.js';
import { initPivot } from './pivotHelper.js';

var aux=0;
var mps=[
{Caracteristica: "Luz", Mes: "mes 1",value:20},
{Caracteristica: "Luz", Mes: "mes 2",value:20},
{Caracteristica: "Luz", Mes: "mes 3",value:20},
{Caracteristica: "Luz", Mes: "mes 4",value:20},
{Caracteristica: "Luz", Mes: "mes 5",value:20},
{Caracteristica: "Luz", Mes: "mes 6",value:20},
{Caracteristica: "Luz", Mes: "mes 7",value:20},
{Caracteristica: "Luz", Mes: "mes 8",value:20},
{Caracteristica: "Luz", Mes: "mes 9",value:20},
{Caracteristica: "Luz", Mes: "mes 10",value:20},
{Caracteristica: "Luz", Mes: "mes 11",value:20},
{Caracteristica: "Luz", Mes: "mes 12",value:20},
{Caracteristica: "Telefono", Mes: "mes 1",value:10},
{Caracteristica: "Telefono", Mes: "mes 2",value:10},
{Caracteristica: "Telefono", Mes: "mes 3",value:10},
{Caracteristica: "Telefono", Mes: "mes 4",value:10},
{Caracteristica: "Telefono", Mes: "mes 5",value:10},
{Caracteristica: "Telefono", Mes: "mes 6",value:10},
{Caracteristica: "Telefono", Mes: "mes 7",value:10},
{Caracteristica: "Telefono", Mes: "mes 8",value:10},
{Caracteristica: "Telefono", Mes: "mes 9",value:10},
{Caracteristica: "Telefono", Mes: "mes 10",value:10},
{Caracteristica: "Telefono", Mes: "mes 11",value:10},
{Caracteristica: "Telefono", Mes: "mes 12",value:10},
{Caracteristica: "Gas", Mes: "mes 1",value:20},
{Caracteristica: "Gas", Mes: "mes 2",value:20},
{Caracteristica: "Gas", Mes: "mes 3",value:20},
{Caracteristica: "Gas", Mes: "mes 4",value:20},
{Caracteristica: "Gas", Mes: "mes 5",value:20},
{Caracteristica: "Gas", Mes: "mes 6",value:20},
{Caracteristica: "Gas", Mes: "mes 7",value:20},
{Caracteristica: "Gas", Mes: "mes 8",value:20},
{Caracteristica: "Gas", Mes: "mes 9",value:20},
{Caracteristica: "Gas", Mes: "mes 10",value:20},
{Caracteristica: "Gas", Mes: "mes 11",value:20},
{Caracteristica: "Gas", Mes: "mes 12",value:20},
{Caracteristica: "Renta", Mes: "mes 1",value:10},
{Caracteristica: "Renta", Mes: "mes 2",value:10},
{Caracteristica: "Renta", Mes: "mes 3",value:10},
{Caracteristica: "Renta", Mes: "mes 4",value:10},
{Caracteristica: "Renta", Mes: "mes 5",value:10},
{Caracteristica: "Renta", Mes: "mes 6",value:10},
{Caracteristica: "Renta", Mes: "mes 7",value:10},
{Caracteristica: "Renta", Mes: "mes 8",value:10},
{Caracteristica: "Renta", Mes: "mes 9",value:10},
{Caracteristica: "Renta", Mes: "mes 10",value:10},
{Caracteristica: "Renta", Mes: "mes 11",value:10},
{Caracteristica: "Renta", Mes: "mes 12",value:10},
{Caracteristica: "Nomina", Mes: "mes 1",value:20},
{Caracteristica: "Nomina", Mes: "mes 2",value:20},
{Caracteristica: "Nomina", Mes: "mes 3",value:20},
{Caracteristica: "Nomina", Mes: "mes 4",value:20},
{Caracteristica: "Nomina", Mes: "mes 5",value:20},
{Caracteristica: "Nomina", Mes: "mes 6",value:20},
{Caracteristica: "Nomina", Mes: "mes 7",value:20},
{Caracteristica: "Nomina", Mes: "mes 8",value:20},
{Caracteristica: "Nomina", Mes: "mes 9",value:20},
{Caracteristica: "Nomina", Mes: "mes 10",value:20},
{Caracteristica: "Nomina", Mes: "mes 11",value:20},
{Caracteristica: "Nomina", Mes: "mes 12",value:20},
{Caracteristica: "Telefono Celular", Mes: "mes 1",value:10},
{Caracteristica: "Telefono Celular", Mes: "mes 2",value:10},
{Caracteristica: "Telefono Celular", Mes: "mes 3",value:10},
{Caracteristica: "Telefono Celular", Mes: "mes 4",value:10},
{Caracteristica: "Telefono Celular", Mes: "mes 5",value:10},
{Caracteristica: "Telefono Celular", Mes: "mes 6",value:10},
{Caracteristica: "Telefono Celular", Mes: "mes 7",value:10},
{Caracteristica: "Telefono Celular", Mes: "mes 8",value:10},
{Caracteristica: "Telefono Celular", Mes: "mes 9",value:10},
{Caracteristica: "Telefono Celular", Mes: "mes 10",value:10},
{Caracteristica: "Telefono Celular", Mes: "mes 11",value:10},
{Caracteristica: "Telefono Celular", Mes: "mes 12",value:10},

{Caracteristica: "Telefono Celular1", Mes: "mes 1",value:10},
{Caracteristica: "Telefono Celular1", Mes: "mes 2",value:10},
{Caracteristica: "Telefono Celular1", Mes: "mes 3",value:10},
{Caracteristica: "Telefono Celular1", Mes: "mes 4",value:10},
{Caracteristica: "Telefono Celular1", Mes: "mes 5",value:10},
{Caracteristica: "Telefono Celular1", Mes: "mes 6",value:10},
{Caracteristica: "Telefono Celular1", Mes: "mes 7",value:10},
{Caracteristica: "Telefono Celular1", Mes: "mes 8",value:10},
{Caracteristica: "Telefono Celular1", Mes: "mes 9",value:10},
{Caracteristica: "Telefono Celular1", Mes: "mes 10",value:10},
{Caracteristica: "Telefono Celular1", Mes: "mes 11",value:10},
{Caracteristica: "Telefono Celular1", Mes: "mes 12",value:10},
{Caracteristica: "Telefono Celular2", Mes: "mes 1",value:10},
{Caracteristica: "Telefono Celular2", Mes: "mes 2",value:10},
{Caracteristica: "Telefono Celular2", Mes: "mes 3",value:10},
{Caracteristica: "Telefono Celular2", Mes: "mes 4",value:10},
{Caracteristica: "Telefono Celular2", Mes: "mes 5",value:10},
{Caracteristica: "Telefono Celular2", Mes: "mes 6",value:10},
{Caracteristica: "Telefono Celular2", Mes: "mes 7",value:10},
{Caracteristica: "Telefono Celular2", Mes: "mes 8",value:10},
{Caracteristica: "Telefono Celular2", Mes: "mes 9",value:10},
{Caracteristica: "Telefono Celular2", Mes: "mes 10",value:10},
{Caracteristica: "Telefono Celular2", Mes: "mes 11",value:10},
{Caracteristica: "Telefono Celular2", Mes: "mes 12",value:10},
{Caracteristica: "Telefono Celular3", Mes: "mes 1",value:10},
{Caracteristica: "Telefono Celular3", Mes: "mes 2",value:10},
{Caracteristica: "Telefono Celular3", Mes: "mes 3",value:10},
{Caracteristica: "Telefono Celular3", Mes: "mes 4",value:10},
{Caracteristica: "Telefono Celular3", Mes: "mes 5",value:10},
{Caracteristica: "Telefono Celular3", Mes: "mes 6",value:10},
{Caracteristica: "Telefono Celular3", Mes: "mes 7",value:10},
{Caracteristica: "Telefono Celular3", Mes: "mes 8",value:10},
{Caracteristica: "Telefono Celular3", Mes: "mes 9",value:10},
{Caracteristica: "Telefono Celular3", Mes: "mes 10",value:10},
{Caracteristica: "Telefono Celular3", Mes: "mes 11",value:10},
{Caracteristica: "Telefono Celular3", Mes: "mes 12",value:10},
{Caracteristica: "Telefono Celular4", Mes: "mes 1",value:10},
{Caracteristica: "Telefono Celular4", Mes: "mes 2",value:10},
{Caracteristica: "Telefono Celular4", Mes: "mes 3",value:10},
{Caracteristica: "Telefono Celular4", Mes: "mes 4",value:10},
{Caracteristica: "Telefono Celular4", Mes: "mes 5",value:10},
{Caracteristica: "Telefono Celular4", Mes: "mes 6",value:10},
{Caracteristica: "Telefono Celular4", Mes: "mes 7",value:10},
{Caracteristica: "Telefono Celular4", Mes: "mes 8",value:10},
{Caracteristica: "Telefono Celular4", Mes: "mes 9",value:10},
{Caracteristica: "Telefono Celular4", Mes: "mes 10",value:10},
{Caracteristica: "Telefono Celular5", Mes: "mes 11",value:10},
{Caracteristica: "Telefono Celular6", Mes: "mes 12",value:10},
{Caracteristica: "Telefono Celular7", Mes: "mes 12",value:10},
{Caracteristica: "Telefono Celular8", Mes: "mes 12",value:10},
{Caracteristica: "Agua", Mes: "mes 1",value:30},
{Caracteristica: "Agua", Mes: "mes 2",value:19},
{Caracteristica: "Agua", Mes: "mes 3",value:39},
{Caracteristica: "Agua", Mes: "mes 4",value:39},
{Caracteristica: "Agua", Mes: "mes 5",value:39},
{Caracteristica: "Agua", Mes: "mes 6",value:39},
{Caracteristica: "Agua", Mes: "mes 7",value:39},
{Caracteristica: "Agua", Mes: "mes 8",value:39},
{Caracteristica: "Agua", Mes: "mes 9",value:39},
{Caracteristica: "Agua", Mes: "mes 10",value:39},
{Caracteristica: "Agua", Mes: "mes 11",value:39},
{Caracteristica: "Agua", Mes: "mes 12",value:39},
{Caracteristica: "Agua", Mes: "mes 13",value:39},
{Caracteristica: "Agua", Mes: "mes 14",value:39},
{Caracteristica: "Agua", Mes: "mes 15",value:39},
{Caracteristica: "Agua", Mes: "mes 16",value:39},
{Caracteristica: "Agua", Mes: "mes 17",value:39},
{Caracteristica: "Agua", Mes: "mes 18",value:390},
{Caracteristica: "Agua", Mes: "mes 19",value:390},
{Caracteristica: "Agua", Mes: "mes 20",value:390},
{Caracteristica: "Agua", Mes: "mes 21",value:390},
{Caracteristica: "Agua", Mes: "mes 22",value:390},
{Caracteristica: "Agua", Mes: "mes 23",value:3900},

];
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