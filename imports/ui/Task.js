import React, { Component } from 'react';
import "../../client/main.html";
import "jquery";
import "pivottable";
import "jqueryui";
import { Tasks } from '../api/tasks.js';
import { Meteor } from 'meteor/meteor';
import { sensitiveTable } from './table';
 
// Task component - represents a single todo item
export default class Task extends Component {
  updateBA(){
    var aux=JSON.parse(this.props.mps);
    $("#output").pivot(aux,this.props.config , true);
    $( "#tabla_update" ).remove();
    sensitiveTable(aux);
    // $("#hola").text(this.props.mps)
  }
  render() {
    return (
      <div>{this.updateBA()}</div>
    );
  }
}