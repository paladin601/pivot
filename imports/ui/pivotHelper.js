import "../../client/main.html";
import "jquery";
import "pivottable";
import "jqueryui";
import { Tasks } from '../api/tasks.js';
import { Meteor } from "meteor/meteor";

export function initPivot(mps,config){
    $('#output').pivot(
        mps, config
      );   
}