import "../../client/main.html";
import "jquery";
import "pivottable";
import "jqueryui";
import { Tasks } from '../api/tasks.js';
import { Meteor } from "meteor/meteor";

export function initPivot(mps){
  var sum = $.pivotUtilities.aggregatorTemplates.sum;
        var numberFormat = $.pivotUtilities.numberFormat;
        var intFormat = numberFormat({digitsAfterDecimal: 0});


    $('#output').pivot(
        mps,
        {
            rows: ["Caracteristica"],
            cols: ["Mes"],
            colKeys:["mes 1","mes 2","mes 3","mes 4","mes 5","mes 6","mes 7","mes 8","mes 9","mes 10","mes 11","mes 12"],
            aggregator: sum(intFormat)(["value"]),
            rendererOptions: {
                table: {
                    clickCallback: function(e, value, filters, pivotData){
                        console.log(pivotData);
                    }
                }
            }
        }
      );
}