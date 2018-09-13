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
            aggregator: sum(intFormat)(["value"]),
            rendererOptions: {
                table: {
                    clickCallback: function(e, value, filters, pivotData){
                        console.log(pivotData.tree,e,value,filters);
                    }
                }
            }
        }
      );
      
}