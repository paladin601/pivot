import { Meteor } from 'meteor/meteor';
import { Tasks } from '../api/tasks.js';
import "jquery";

export function sensitiveTable(mps){

    var body = document.getElementById("table"),
    celda,
    hilera,
    nuevo,
    textoCelda,
    meses = [],
    caracteristica,
    tabla   = document.createElement("table"),
    tblBody = document.createElement("tbody");
    tabla.setAttribute("id","tabla_update");
    // Crea las celdas
    caracteristica = mps[0].Caracteristica;
    hilera = document.createElement("tr");

    for(let i = 0; i < mps.length; i++){


        if(mps[i].Caracteristica === caracteristica){

            celda = document.createElement("td");

            if(i == 0){
                textoCelda = document.createTextNode("");
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
                celda = document.createElement("td");
             }

            textoCelda =  document.createElement("input");
            textoCelda.type = "text"
            textoCelda.className = "insert"
            textoCelda.value = mps[i].Mes;

            meses.push(mps[i].Mes);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);

        }else{

            tblBody.appendChild(hilera);
            break;

        }


    }

    
    for (var i = 0; i < mps.length;) {
        nuevo = true;
        hilera = document.createElement("tr");

        for(let j = 0; j < meses.length; j++){

            celda = document.createElement("td");

            if(j == 0 && nuevo){

                textoCelda = document.createElement("input");
                textoCelda.type = "text"
                textoCelda.value = mps[i].Caracteristica;
                textoCelda.className = "insert";

                celda.appendChild(textoCelda);
                hilera.appendChild(celda);

                celda = document.createElement("td");

                nuevo =false;

            }

            if(mps[i].Mes !== meses[j]){

                textoCelda =  document.createElement("input");
                textoCelda.type = "number"
                textoCelda.value = 0;
                textoCelda.className = "insert";

                celda.appendChild(textoCelda);
                hilera.appendChild(celda);

                celda = document.createElement("td");
                continue;
            }else{

                textoCelda =  document.createElement("input");
                textoCelda.type = "number"
                textoCelda.value = mps[i].value;
                textoCelda.className = "insert";

                celda.appendChild(textoCelda);
                hilera.appendChild(celda);

            }
            i++
        }

        tblBody.appendChild(hilera);
    }
  
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
    let a = $('.insert');
      for (let i = 0; i < a.length; i++) {
        if (a[i].type === "number") {
          a[i].addEventListener("input", function () {
            var aux = $(".insert");
            let meses = [],
              mes = true,
              caracteristica,
              newMps = [];

            for (let i = 0; i < aux.length; i++) {

              if (mes && aux[i + 1].type !== "number") {
                meses.push(aux[i].value);
              } else {
                mes = false;
                caracteristica = aux[i].value;
                for (let j = 0; j < meses.length; j++) {
                  i++;
                  newMps.push({
                    Caracteristica: caracteristica,
                    Mes: meses[j],
                    value: aux[i].value
                  });
                }
              }
            }
            var obj = Tasks.find().fetch();
            if (obj.length > 0) {
              Meteor.call('tasks.remove', obj[0]._id);
            }
            Meteor.call('tasks.insert', JSON.stringify(newMps));
            // console.log(newMps);
          })
        }
      }
}
 