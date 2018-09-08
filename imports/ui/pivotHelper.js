import "../../client/main.html";
import "jquery";
import "pivottable";
import "jqueryui";
import { Tasks } from '../api/tasks.js';
import { Meteor } from "meteor/meteor";

export function initPivot(mps){
    $('#output').pivotUI(
        mps,
        {
            rows: ["color"],
            cols: ["shape"],
            aux:0,
            onRefresh: function(config) {
              if(this.aux==1){
                var config_copy = config;
                //delete some values which will not serialize to JSON
                delete config_copy["aggregators"];
                delete config_copy["renderers"];
                var aux=Tasks.find().fetch();
                if(aux.length>0){
                  Meteor.call('tasks.remove', aux[0]._id);
                }
                var text=JSON.stringify(config_copy);
                Meteor.call('tasks.insert', text);
              }else{
                this.aux=1;
              }
            }
        }
      );
}