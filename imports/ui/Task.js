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
    

  }
  render() {
    return (
      <div>{this.updateBA()}</div>
    );
  }
}