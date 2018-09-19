import "jquery";

export function sensitiveTable(mps,scope){

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
}
 