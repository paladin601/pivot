import React, { Component } from 'react';
import "../../client/main.html";
import "jquery";
import "pivottable";
import "jqueryui";
import { Tasks } from '../api/tasks.js';
import { Meteor } from 'meteor/meteor';
 
// Task component - represents a single todo item
export default class Task extends Component {
  updateBA(){
    $("#output").pivot(JSON.parse(this.props.mps),this.props.config , true);
    // $("#hola").text(this.props.mps)
  }
  render() {
    return (
      <div>{this.updateBA()}</div>
    );
  }
}