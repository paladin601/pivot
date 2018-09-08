import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';
import Task from './Task.js';
import { initPivot } from './pivotHelper.js';

var aux=0;
var mps=[{color: "blue", shape: "circle"},{color: "red", shape: "triangle"}];
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